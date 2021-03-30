<template>
    <div>
        <div class="header-content">
            <div class="title">Danh sách nhan vien</div>
            <div class="content-feature">
                <button class="m-btn m-btn-default" id="btnAdd">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Thêm nhan vien</div>
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
                <button class="m-btn-refresh m-second-button" id="btnRefresh"></button>
            </div>
        </div>

        <div class="grid grid-employee">
            <table border="1" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th fieldName="Checkbox"><input type="checkbox" id="checkAll" /></th>
                        <th fieldName="Index">#</th>
                        <th fieldName="CustomerCode">Ma khach hang</th>
                        <th fieldName="FullName">Ho va ten</th>
                        <th fieldName="GenderName">Gioi tinh</th>
                        <th fieldName="DateOfBirth" formatType="ddmmyyyy">Ngay sinh</th>
                        <th fieldName="PhoneNumber">So dien thoai</th>
                        <th fieldName="Email">Email</th>
                        <th fieldName="Address">Dia chi</th>
                        <th fieldName="DebitAmount">So tien no</th>
                        <th fieldName="MemberCardCode">Ma the thanh vien</th>
                    </tr>
                </thead>
                <tbody>
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

        <CustomerListDetail />
    </div>
</template>

<script>
import CustomerListDetail from './EmployeeListDetail'

export default{
    name: 'CustomerList',
    components: {
        CustomerListDetail,
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