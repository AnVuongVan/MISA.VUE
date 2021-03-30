<template>
    <div>
        <div class="header">
            <div class="department-info">
                <select name="cars" id="cars">
                    <option value="volvo">Khách VIP</option>
                    <option value="saab">Khách hàng MISA</option>
                    <option value="mercedes">Khách vãng lai</option>
                </select>
            </div>

            <div class="account-info">
                <div class="acount-avatar"></div>
                <div class="acount-name">An Vuong Van</div>
                <div class="acount-option"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: calc(100% - 221px);
        height: 60px;
        border-bottom: 1px solid #e5e5e5;
        float: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header .department-info select {
        padding: 12px 12px;
        font-size: 15px;
        border: none;
        font-weight: bold;
        outline: none;
    }

    .account-info {
        display: flex;
        align-items: center;
        padding: 12px 16px;
    }

    .acount-avatar {
        background-image: url('../../assets/icon/avatar-default.png');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
    }

    .acount-name {
        font-size: 15px;
        font-weight: bold;
        margin: 0 16px;
    }

    .acount-option {
        background-image: url('../../assets/img/more-horizontal.svg');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        transition: all 0.1s ease-in;
    }
</style>