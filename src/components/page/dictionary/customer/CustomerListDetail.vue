<template>
    <div>
        <div class="m-dialog dialog-detail">
            <div class="dialog-modal"></div>
            <form @submit="onSubmit">
                <div class="dialog-content">
                    <div class="dialog-header">
                        <div class="dialog-header-title">Thong tin khach hang</div>
                        <div class="dialog-header-close">
                            <button @click="hideListDetail"></button>
                        </div>
                    </div>

                    
                    <div class="dialog-body">
                        <div class="m-row">
                            <div class="col-4">
                                <div class="avatar"></div>
                                <span>Vui long chon anh co dinh dang: <b>.jpg,</b> <b>.png,</b> <b>.jepg,</b> <b>.gif.</b></span>
                            </div>

                            <div class="col-8">
                                <div class="item">
                                    <div class="customer-item">
                                        <div class="m-label">Ma khach hang <span style="color: red;">(*)</span></div>
                                        <div class="m-control" :class="{'input-required': isTooltip.CustomerCode}">
                                            <input v-model.trim="formData.CustomerCode" 
                                            ref="CustomerCode" type="text" 
                                            @mouseover="overCustomerCode" @mouseleave="leaveCustomerCode"
                                            :class="{'is-invalid': (validateStatus($v.formData.CustomerCode) || errors.CustomerCode.length)}">
                                            <span v-if="isTooltip.CustomerCode">
                                                <span :class="{'tooltip-error': isTooltip.CustomerCode}" 
                                                v-for="(error, index) in errors.CustomerCode" :key="index">{{ error }}</span>
                                            </span>                                              
                                        </div>
                                    </div>

                                    <div class="name-item">
                                        <div class="m-label">Ho va ten <span style="color: red;">(*)</span></div>
                                        <div class="m-control">
                                            <input v-model.trim="formData.FullName" type="text" 
                                            :class="{'is-invalid': validateStatus($v.formData.FullName)}">
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="member-code-item">
                                        <div class="m-label">Ma the thanh vien</div>
                                        <div class="m-control">
                                            <input v-model.trim="formData.MemberCardCode" type="text">
                                        </div>
                                    </div>

                                    <div class="customer-group-item">
                                        <div class="m-label">Nhom khach hang</div>
                                        <div class="m-control-select">
                                            <select v-model="formData.CustomerGroupId">  
                                                <option v-for="group in allGroups" :key="group.CustomerGroupId" 
                                                :value="group.CustomerGroupId">{{ group.CustomerGroupName }}</option>                                     
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="date-item">
                                        <div class="m-label">Ngay sinh</div>
                                        <div class="m-control">
                                            <input v-model="formData.DateOfBirth" type="date">
                                        </div>
                                    </div>

                                    <div class="gender-item">
                                        <div class="m-label">Gioi tinh</div>
                                        <div class="m-control">
                                            <div class="female">
                                                <input type="radio" name="gender" v-model="formData.Gender" :value="0" checked>
                                                <span>Nu</span>
                                            </div>
                                            <div class="male">
                                                <input type="radio" name="gender" v-model="formData.Gender" :value="1">
                                                <span>Nam</span>
                                            </div>                                 
                                            <div class="gray">
                                                <input type="radio" name="gender" v-model="formData.Gender" :value="2">
                                                <span>Khac</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="m-row">
                            <div class="col-8">
                                <div class="m-label">Email</div>
                                <div class="m-control">
                                    <input type="email" v-model.trim="formData.Email" 
                                    :class="{'is-invalid': validateStatus($v.formData.Email)}">
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="m-label">So dien thoai <span style="color: red;">(*)</span></div>
                                <div class="m-control" :class="{'input-required': isTooltip.PhoneNumber}">
                                    <input type="text" v-model.trim="formData.PhoneNumber" 
                                    @mouseover="overPhoneNumber" @mouseleave="leavePhoneNumber"
                                    :class="{'is-invalid': (validateStatus($v.formData.PhoneNumber) || errors.PhoneNumber.length)}">                                   
                                    <span v-if="isTooltip.PhoneNumber">
                                        <span :class="{'tooltip-error': isTooltip.PhoneNumber}" 
                                        v-for="(error, index) in errors.PhoneNumber" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="m-row">
                            <div class="col-8 company-name-item">
                                <div class="m-label">Ten cong ty</div>
                                <div class="m-control">
                                    <input type="text" v-model.trim="formData.CompanyName">
                                </div>
                            </div>

                            <div class="col-4 tax-code-item">
                                <div class="m-label">Ma so thue</div>
                                <div class="m-control">
                                    <input type="text" v-model.trim="formData.CompanyTaxCode">
                                </div>
                            </div>
                        </div>

                        <div class="m-row">
                            <div class="col-12 address-item">
                                <div class="m-label">Dia chi</div>
                                <div class="m-control">
                                    <input type="text" v-model.trim="formData.Address">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dialog-footer">
                        <div class="dialog-footer-close">
                            <span id="btnCancel" @click="hideListDetail">Huy</span>
                        </div>
                        <div class="dialog-footer-save">
                            <button type="submit">
                                <img src="../../../../assets/img/save.svg" />
                                <span>Luu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <Loading v-if="isLoading" />
    </div>
</template>

<script>
import moment from 'moment'
import MISACode from '../../../../store/constant/code'
import PropertyName from '../../../../store/constant/property'
import Loading from '../../../base/Loading'
import { mapGetters, mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators'

export default{
    name: 'CustomerListDetail',
    props: ['customer'],
    components: {
        Loading
    },
    data() {
        return {
            formData: {
                CustomerCode: '',
                FullName: '',
                Gender: '',
                Address: '',
                DateOfBirth: '',
                Email: '',
                PhoneNumber: '',
                CustomerGroupId: '',    
                MemberCardCode: '',
                CompanyName: '',
                CompanyTaxCode: '',
                IsStopFollow: false,
            },
            errors: {
                CustomerCode: [],
                PhoneNumber: []
            },
            isLoading: false,
            isTooltip: {
                CustomerCode: false,
                PhoneNumber: false,
            },
        }
    },
    validations: {
        formData: {
            CustomerCode: { required },
            FullName: { required },
            Email: { email },
            PhoneNumber: { required }
        }
    },
    methods: {
        ...mapActions(['fetchCustomerGroups', 'dispatchCustomer']),
        validateStatus: function(validation) {
            return typeof validation != 'undefined'? validation.$error : false;
        },
        //form submit to create or update
        onSubmit(e) {
            e.preventDefault();

            this.$v.formData.$touch();
            if (this.$v.formData.$pending || this.$v.formData.$error) return;

            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);

            this.errors = {
                CustomerCode: [],
                PhoneNumber: []
            };

            var customerId = this.formData.customerId;

            this.dispatchCustomer(this.formData)
                .then(res => {
                    switch (res.MISACode) {
                        case MISACode.NOTVALID:
                            res.Data.forEach(err => {
                                if (err.includes(PropertyName.CUSTOMER_CODE)) {
                                    this.errors.CustomerCode.push(err);
                                } else if (err.includes(PropertyName.PHONE_NUMBER)) {
                                    this.errors.PhoneNumber.push(err);
                                }
                            });                              
                            break;
                        case MISACode.ISVALID:
                        case MISACode.SUCCESS:                                
                            this.$emit("statusModal", false);
                            if (customerId) {
                                this.$emit("statusAlert", "UPDATE");
                            } else {
                                this.$emit("statusAlert", "ADD");
                            }
                            break;
                        default:
                            break;
                    }
                });
        },
        hideListDetail() {
            //pass value to parent components (CustomerList)
            this.errors = {};
            this.$emit("statusModal", false);
        },
        //show tooltip error
        overCustomerCode() {
            this.isTooltip.CustomerCode = !this.isTooltip.CustomerCode;
        },
        overPhoneNumber() {
            this.isTooltip.PhoneNumber = !this.isTooltip.PhoneNumber;
        },
        //hide tooltip error
        leaveCustomerCode() {
            this.isTooltip.CustomerCode = !this.isTooltip.CustomerCode;          
        },
        leavePhoneNumber() {
            this.isTooltip.PhoneNumber = !this.isTooltip.PhoneNumber;         
        }
    },
    computed: {
        ...mapGetters(['allGroups']),
    },
    created() {
        //set value for form date when update
        this.formData = Object.assign({}, this.customer);
        //format date from database to show
        if (this.formData.DateOfBirth) {
            this.formData.DateOfBirth = moment(String(this.formData.DateOfBirth)).format('YYYY-MM-DD');
        }
    },
    mounted() {
        this.fetchCustomerGroups();

        //auto focus customer code input
        this.$refs.CustomerCode.focus();
    }
}
</script>

<style scoped>
.is-invalid {
    border: 1px solid #FF4747;
}

.input-required {
    position: relative;
}

.tooltip-error {
    position: absolute;
    left: 15%;
    top: -112%;
    right: 15%;
    background-color: #FF4747;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    font-size: 13px;
}

.tooltip-error::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #FF4747;
    z-index: 5;
    clear: both;
}
</style>