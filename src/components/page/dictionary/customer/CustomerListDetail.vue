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
                                        <div class="m-control">
                                            <input v-model.trim="formData.CustomerCode" ref="CustomerCode" type="text" 
                                            :class="{'is-invalid': validateStatus($v.formData.CustomerCode)}">
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
                                        <div class="m-control-select" ref="selectOptions" @click="setOptionsSelect">
                                            <select v-model="formData.CustomerGroupId">  
                                                <option v-for="group in customerGroups" :key="group.CustomerGroupId" 
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
                                <div class="m-control">
                                    <input type="text" v-model.trim="formData.PhoneNumber" 
                                    :class="{'is-invalid': validateStatus($v.formData.PhoneNumber)}">
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
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators'

export default{
    name: 'CustomerListDetail',
    props: ['customer'],
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
            customerGroups: []
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
        ...mapActions(['addCustomer', 'updateCustomer']),
        validateStatus: function(validation) {
            return typeof validation != 'undefined'? validation.$error : false;
        },
        //form submit to create or update
        onSubmit(e) {
            e.preventDefault();

            //check validate
            this.$v.formData.$touch();
            if (this.$v.formData.$pending || this.$v.formData.$error) return;

            //if have CustomerId -> update
            if (this.formData.CustomerId) {
                this.updateCustomer(this.formData);
                this.$emit("statusAlert", "UPDATE");
            } else {
                this.addCustomer(this.formData);
                this.$emit("statusAlert", "ADD");
            }  
            this.$emit("statusModal", false);
        },
        //set value for select options of group
        async setOptionsSelect() {
            const response = await axios.get('http://api.manhnv.net/api/customergroups');
            this.customerGroups = response.data;
            console.log(response.data);
        },
        hideListDetail() {
            //pass value to parent components (CustomerList)
            this.$emit("statusModal", false);
        }
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
        //auto load value of select group when update
        if (this.formData.CustomerGroupId) {
            this.$refs.selectOptions.click();
        }

        //auto focus customer code input
        this.$refs.CustomerCode.focus();
    }
}
</script>

<style scoped>
.is-invalid {
    border: 1px solid red;
}
</style>