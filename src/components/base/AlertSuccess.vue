<template>
    <div class="alert alert-success">
        <div class="icon-thumb"></div>
        <span class="title" v-text="content" />
        <span class="icon-times" @click="hideAlert"></span>
    </div>
</template>

<script>

export default ({
    name: 'AlertSuccess',
    props: ['statusAlertSuccess'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        hideAlert() {
            this.$emit("isHide", '');
        }
    },
    created() {
        switch (this.statusAlertSuccess) {
            case 'ADD':
                this.content = 'Them khach hang thanh cong';
                break;
            case 'UPDATE':
                this.content = 'Cap nhat khach hang thanh cong';
                break;
            case 'DELETE':
                this.content = 'Xoa khach hang thanh cong';
                break;
        }
    },
    mounted() {
        setTimeout(() => {
            this.$emit("isHide", '');
        }, 2000);
    }
})
</script>
