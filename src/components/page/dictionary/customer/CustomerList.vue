<template>
    <div>
        <div class="header-content">
            <div class="title">Danh sách khách hàng</div>
            <div class="content-feature">
                <button class="m-btn m-btn-default" @click="showListDetail">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Thêm khách hàng</div>
                </button>
            </div>
        </div>

        <div class="filter-bar">
            <div class="filter-left">
                <input type="text" class="icon-search input-search" style="width: 200px;" placeholder="Tim kiem theo ma, ten khach" />
                <select>
                    <option>Phòng đào tạo</option>
                    <option>Phòng Công nghệ</option>
                    <option>Phòng Marketting</option>
                    <option>Phòng Nhân sự</option>
                </select>
            </div>
            <div class="filter-right">
                <button class="m-btn-remove m-second-button" @click="removeCustomer"></button>
                <button class="m-btn-refresh m-second-button" @click="refreshListCustomers"></button>
            </div>
        </div>

        <div class="grid grid-employee">
            <table border="1" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th fieldName="Checkbox"><input type="checkbox" /></th>
                        <th fieldName="Index">#</th>
                        <th fieldName="CustomerCode">Ma khach hang</th>
                        <th fieldName="FullName">Ho va ten</th>
                        <th fieldName="GenderName">Gioi tinh</th>
                        <th fieldName="DateOfBirth" formatType="ddmmyyyy">Ngay sinh</th>
                        <th fieldName="PhoneNumber">So dien thoai</th>
                        <th fieldName="Email">Email</th>
                        <th fieldName="Address">Dia chi</th>
                        <th fieldName="DebitAmount">Ma so thue</th>
                        <th fieldName="MemberCardCode">Ma the thanh vien</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in allCustomers" :key="customer.CustomerId"
                    @dblclick="onDoubleClick(customer)">
                        <td>
                            <input type="checkbox" @change="getChecked(customer.CustomerId, $event)">
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td>{{ customer.CustomerCode }}</td>
                        <td>{{ customer.FullName }}</td>
                        <td>{{ customer.GenderName }}</td>
                        <td>{{ formatDate(customer.DateOfBirth) }}</td>
                        <td>{{ customer.PhoneNumber }}</td>
                        <td>{{ customer.Email }}</td>
                        <td>{{ customer.Address }}</td>
                        <td>{{ customer.CompanyTaxCode }}</td>
                        <td>{{ customer.MemberCardCode }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="paging-bar">
            <p>Showing 1-10/1000 customers</p>
            <div class="pagination">
                <div class="item page first-page"><span></span></div>
                <div class="item page prev-page"><span></span></div>
                <div class="active item"><span>1</span></div>
                <div class="item"><span>2</span></div>
                <div class="item"><span>3</span></div>
                <div class="item"><span>4</span></div>
                <div class="item page next-page"><span></span></div>
                <div class="item page last-page"><span></span></div>
            </div>
            <p>10 customers on a page</p>
        </div>

        <span v-if="statusListDetail">
            <CustomerListDetail @statusModal="statusModal" @statusAlert="statusAlert" :customer="item" />
        </span>

        <span v-if="statusShowPopup">
            <Popup @statusPopup="statusPopup" @isDeleted="isDeleted" :listIds="listIds" />
        </span>

        <span v-if="statusAlertNotify">
            <AlertSuccess :statusAlertSuccess="statusAlertNotify" @isHide="statusAlert" />
        </span>

        <span v-if="false">
            <AlertError />
        </span>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomerListDetail from './CustomerListDetail';

import Popup from '../../../base/Popup';
import AlertSuccess from '../../../base/AlertSuccess';
import AlertError from '../../../base/AlertError';

import moment from 'moment'

export default{
    name: 'CustomerList',
    components: {
        CustomerListDetail,
        Popup,
        AlertSuccess,
        AlertError
    },
    data() {
        return {
            statusListDetail: false,
            statusShowPopup: false,
            statusAlertNotify: '',
            item: {},
            listIds: []
        }
    },
    methods: {
        ...mapActions(['fetchCustomers']),
        //show when add new customer
        showListDetail() {
            this.item = {};
            this.statusListDetail = !this.statusListDetail;
        },
        //receive params status from child components
        statusModal(params) {
            this.statusListDetail = params;
        },
        statusPopup(params) {
            this.statusShowPopup = params;
        },
        isDeleted(params) {
            //if customer removed -> set empty list
            if (params) {
                this.listIds = [];
                this.statusAlertNotify = 'DELETE';
            }
        },
        statusAlert(params) {
            this.statusAlertNotify = params;
        },
        //function to edit customer
        onDoubleClick(customer) {
            this.item = Object.assign({}, customer);
            this.statusListDetail = !this.statusListDetail;
        },
        //function remove customer
        removeCustomer() {
            if (this.listIds.length !== 0) {
                this.statusShowPopup = true;
            } else {
                alert('Ban chua chon ban ghi nao de xoa!');
            }
        },
        //catch event click every input checkbox
        getChecked(id, e) {
            if (e.target.checked) {
                this.listIds.push(id);
            } else {
                let position = this.listIds.indexOf(id);
                if (position !== -1) {
                    this.listIds.splice(position, 1);
                }
            }
        },
        //refresh list customers page
        refreshListCustomers() {
            this.fetchCustomers();
        },
        //function format date to show
        formatDate(dateTime){
            if (dateTime) {
                return moment(String(dateTime)).format('DD-MM-YYYY');
            }
        }
    },
    computed: mapGetters(['allCustomers']),
    created() {
        this.fetchCustomers();
    }
}
</script>


<style scoped>
    .icon-add {
        width: 20px;
        height: 20px;
        background-image: url('../../../../assets/img/user-plus.svg');
        background-size: contain;
    }

    .icon-search {
        height: 16px;
        background-image: url('../../../../assets/icon/search.png');
        background-repeat: no-repeat;
        background-position: 16px center;
    }

    .filter-bar {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0;
		position: relative;
	}

	.filter-bar .filter-left {
		margin-left: 12px;
	}

	.filter-left select {
		padding: 9px;
		border-radius: 3px;
		border: 1px solid #bbb;
		outline: none;
		margin-right: 10px;
		font-size: 13px;
		font-weight: 600;
	}


	.filter-bar .filter-right {
		position: absolute;
		right: 12px;
		top: 9px;
	}
</style>