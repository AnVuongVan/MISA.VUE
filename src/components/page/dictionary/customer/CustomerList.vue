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
            <CustomerFilter />
            
            <div class="filter-right">
                <button class="m-btn-remove m-second-button" @click="removeCustomer"></button>
                <button class="m-btn-refresh m-second-button" @click="refreshListCustomers"></button>
            </div>
        </div>

        <div class="grid grid-employee">
            <table border="1" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>#</th>
                        <th>Ma khach hang</th>
                        <th>Ho va ten</th>
                        <th>Gioi tinh</th>
                        <th>Ngay sinh</th>
                        <th>So dien thoai</th>
                        <th>Email</th>
                        <th>Dia chi</th>
                        <th>Ma so thue</th>
                        <th>Ma the thanh vien</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in allCustomers" :key="customer.CustomerId"
                    @dblclick="onDoubleClick(customer)">
                        <td>
                            <input type="checkbox" @change="getChecked(customer.CustomerId, $event)">
                        </td>
                        <td v-text="index + 1"></td>
                        <td v-text="customer.CustomerCode"></td>
                        <td v-text="customer.FullName"></td>
                        <td v-text="customer.GenderName"></td>
                        <td v-text="formatDate(customer.DateOfBirth)"></td>
                        <td v-text="customer.PhoneNumber"></td>
                        <td v-text="customer.Email"></td>
                        <td v-text="customer.Address"></td>
                        <td v-text="customer.CompanyTaxCode"></td>
                        <td v-text="customer.MemberCardCode"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Paging />

        <span v-if="statusListDetail">
            <CustomerListDetail @statusModal="statusModal" @statusAlert="statusAlert" :customer="item" />
        </span>

        <span v-if="statusShowPopup">
            <Popup @statusPopup="statusPopup" @isDeleted="isDeleted" :listIds="listIds" />
        </span>

        <span v-if="statusAlertNotify">
            <AlertSuccess :statusAlertSuccess="statusAlertNotify" @isHide="statusAlert" />
        </span>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomerListDetail from './CustomerListDetail';
import CustomerFilter from './CustomerFilter'

import Paging from '../../../base/Paging';
import Popup from '../../../base/Popup';
import AlertSuccess from '../../../base/AlertSuccess';

import moment from 'moment'

export default{
    name: 'CustomerList',
    components: {
        CustomerListDetail,
        CustomerFilter,
        Paging,
        Popup,
        AlertSuccess,
    },
    data() {
        return {
            statusListDetail: false,
            statusShowPopup: false,
            statusAlertNotify: '',
            item: {},
            listIds: [],
            error: false
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
        formatDate(dateTime) {
            if (dateTime) {
                return moment(String(dateTime)).format('DD-MM-YYYY');
            }
        }
    },
    computed: {
        ...mapGetters(['allCustomers']),
    },
    created() {
        this.fetchCustomers();
    },
}
</script>


<style scoped>
    .icon-add {
        width: 20px;
        height: 20px;
        background-image: url('../../../../assets/img/user-plus.svg');
        background-size: contain;
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

	.filter-bar .filter-right {
		position: absolute;
		right: 12px;
		top: 9px;
	}
</style>