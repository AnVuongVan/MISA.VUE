<template>
    <div>
        <div class="m-dialog dialog-detail">
            <div class="dialog-modal"></div>

            <div class="dialog-content">
                <div class="dialog-header">
                    <div class="dialog-header-title">Thong tin khach hang</div>
                    <div class="dialog-header-close">
                        <button id="btnClose"></button>
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
                                        <input id="txtCustomerCode" fieldName="CustomerCode" class="input-required" type="text" required>
                                    </div>
                                </div>

                                <div class="name-item">
                                    <div class="m-label">Ho va ten <span style="color: red;">(*)</span></div>
                                    <div class="m-control">
                                        <input id="txtFullName" fieldName="FullName" class="input-required" type="text" required>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="member-code-item">
                                    <div class="m-label">Ma the thanh vien</div>
                                    <div class="m-control">
                                        <input id="txtMemberCardCode" fieldName="MemberCardCode" type="text">
                                    </div>
                                </div>

                                <div class="customer-group-item">
                                    <div class="m-label">Nhom khach hang</div>
                                    <div class="m-control-select">
                                        <select id="cbxCustomerGroup" fieldName="CustomerGroupName" fieldValue="CustomerGroupId" api="/api/customergroups">                                       
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="date-item">
                                    <div class="m-label">Ngay sinh</div>
                                    <div class="m-control">
                                        <input id="dtDateOfBirth" fieldName="DateOfBirth" type="date">
                                    </div>
                                </div>

                                <div class="gender-item">
                                    <div class="m-label">Gioi tinh</div>
                                    <div class="m-control">
                                        <div class="female">
                                            <input type="radio" name="gender" fieldName="Gender" value="0" checked>
                                            <span>Nu</span>
                                        </div>
                                        <div class="male">
                                            <input type="radio" name="gender" fieldName="Gender" value="1">
                                            <span>Nam</span>
                                        </div>                                 
                                        <div class="gray">
                                            <input type="radio" name="gender" fieldName="Gender" value="2">
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
                                <input type="email" id="txtEmail" fieldName="Email">
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="m-label">So dien thoai <span style="color: red;">(*)</span></div>
                            <div class="m-control">
                                <input type="text" id="txtPhoneNumber" fieldName="PhoneNumber" class="input-required" required>
                            </div>
                        </div>
                    </div>

                    <div class="m-row">
                        <div class="col-8 company-name-item">
                            <div class="m-label">Ten cong ty</div>
                            <div class="m-control">
                                <input type="text" fieldName="CompanyName">
                            </div>
                        </div>

                        <div class="col-4 tax-code-item">
                            <div class="m-label">Ma so thue</div>
                            <div class="m-control">
                                <input type="text" fieldName="CompanyTaxCode">
                            </div>
                        </div>
                    </div>

                    <div class="m-row">
                        <div class="col-12 address-item">
                            <div class="m-label">Dia chi</div>
                            <div class="m-control">
                                <input type="text" id="txtAddress" fieldName="Address">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dialog-footer">
                    <div class="dialog-footer-close">
                        <span id="btnCancel">Huy</span>
                    </div>
                    <div class="dialog-footer-save">
                        <button id="btnSave">
                            <img src="../../../../assets/img/save.svg" />
                            <span>Luu</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <img src="../../../../assets/img/user-avatar.svg" alt="">-->
</template>