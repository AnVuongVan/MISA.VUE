<template>
    <div class="m-loading">
        <div class="m-loading-content">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading'
    }
</script>

<style scoped>
.m-loading {               
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
}

.m-loading .m-loading-content {               
    position: absolute;
    top: 32%;
    left: 50%;
    width: 120px;
    height: 180px;
    background: transparent url('../../assets/icon/loading.gif') center no-repeat;
}
</style>