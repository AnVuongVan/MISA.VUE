<template>
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
</template>

<script>
    export default {
        name: 'Paging'
    }
</script>

<style scoped>

</style>