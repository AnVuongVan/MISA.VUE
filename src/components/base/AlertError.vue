<template>
    <div class="alert alert-error">
        <div class="icon-thumb"></div>
        <span class="title" v-text="content" />
        <span class="icon-times" @click="hideAlert"></span>
    </div>
</template>

<script>

export default ({
    name: 'AlertError',
    props: ['statusAlertError'],
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
        switch (this.statusAlertError) {
            case 'ADD':
                this.content = 'Them khach hang khong thanh cong';
                break;
            case 'UPDATE':
                this.content = 'Cap nhat khach hang khong thanh cong';
                break;
            case 'DELETE':
                this.content = 'Xoa khach hang khong thanh cong';
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
