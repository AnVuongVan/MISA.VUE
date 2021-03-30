<template>
    <div>
        <div class="navbar">
            <div class="logo-site">
                <div class="logo-box">
                    <div class="toggle-icon"></div>
                    <div class="amis-logo"></div>
                </div>
            </div>

            <div class="navbar-content">
                <div class="nav-item">
                    <div class="nav-item-icon overview"></div>
                    <div class="nav-item-text">OverView</div>
                </div>

                <div class="nav-item">
                    <div class="nav-item-icon report"></div>
                    <div class="nav-item-text">Reports</div>
                </div>

                <router-link class="nav-item" to="/danh-muc/nhan-vien">
                    <div class="nav-item-icon employees"></div>
                    <div class="nav-item-text">Employees</div>
                </router-link>

                <router-link class="nav-item" to="/danh-muc/khach-hang">
                    <div class="nav-item-icon employees"></div>
                    <div class="nav-item-text">Customers</div>
                </router-link>

                <div class="nav-item">
                    <div class="nav-item-icon system"></div>
                    <div class="nav-item-text">System</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        width: 220px;
        height: 100vh;
        background-color: rgb(245, 245, 245);
        border-right: 1px solid #e5e5e5;
        float: left;
    }

    .navbar .logo-site, .navbar .logo-box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
    }

    .navbar .logo-box {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* logo page */
    .navbar .logo-box .toggle-icon {
        width: 24px;
        height: 24px;
        background-image: url('../../assets/img/toggle.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 4px;
    }

    .navbar .logo-box .amis-logo {
        width: 65%;
        height: 32px;
        background-image: url('../../assets/img/cukcuk-logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 2px;
    }

    .navbar .navbar-content {
        width: 100%;
    }

    .navbar .navbar-content .nav-item {
        display: flex;
        padding-left: 24px;
        height: 44px;
        line-height: 44px;
        text-decoration: none;
        color: black;
    }

    .navbar .navbar-content .nav-item:hover,
    .nav-item.active {
        cursor: pointer;
        background-color: #019160;
        color: white;
    }

    .navbar .nav-item-text {
        font-size: 15px;
        font-weight: bold;
    }

    .nav-item .nav-item-icon {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        align-self: center;
        margin-right: 10px;
    }

    .nav-item-icon.overview {
        background-image: url('../../assets/img/pie-chart.svg');
        background-size: contain;
    }

    .nav-item:hover>.overview,
    .nav-item.active>.overview {
        background-image: url('../../assets/img/pie-chart-active.svg');
        background-size: contain;
    }

    .nav-item-icon.report {
        background-image: url('../../assets/img/bar-chart.svg');
        background-size: contain;
    }

    .nav-item:hover>.report,
    .nav-item.active>.report {
        background-image: url('../../assets/img/bar-chart-active.svg');
        background-size: contain;
    }

    .nav-item-icon.customers,
    .nav-item-icon.employees {
        background-image: url('../../assets/img/users.svg');
        background-size: contain;
    }

    .nav-item:hover>.customers,
    .nav-item.active>.customers,
    .nav-item:hover>.employees,
    .nav-item.active>.employees {
        background-image: url('../../assets/img/users-active.svg');
        background-size: contain;
    }

    .nav-item-icon.system {
        background-image: url('../../assets/img/settings.svg');
        background-size: contain;
    }

    .nav-item:hover>.system,
    .nav-item.active>.system {
        background-image: url('../../assets/img/settings-active.svg');
        background-size: contain;
    }

    @media (max-width: 1010px) {
        .navbar {
            display: none;
        }
    }
</style>