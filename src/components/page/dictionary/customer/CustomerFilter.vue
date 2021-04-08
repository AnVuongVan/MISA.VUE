<template>
    <div class="filter-left">
        <input type="text" class="icon-search input-search" v-model="inputSearch"
        style="width: 200px;" placeholder="Tim kiem theo ma, ten khach" @input="getQuery" />
        <select v-model="customerGroupId" @change="getQuery">  
            <option v-for="group in allGroups" :key="group.CustomerGroupId" 
            :value="group.CustomerGroupId">{{ group.CustomerGroupName }}</option>                                     
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import debounce from 'debounce';

export default {
    name: 'CustomerFilter',
    data() {
        return {
            inputSearch: '',
            customerGroupId: '',
            customerGroups: []
        }
    },
    methods: {
        ...mapActions(['fetchCustomerGroups']),
        getQuery: debounce(function () {
            const data = {
                query: this.inputSearch, 
                groups: this.customerGroupId
            }                   
            this.$store.dispatch('queryCustomers', data);
        }, 500)
    },
    computed: {
        ...mapGetters(['allGroups']),
    },
    mounted() {
        this.fetchCustomerGroups();
    }
}
</script>

<style scoped>
    .filter-left {
        margin-left: 12px;
    }

    .icon-search {
        height: 16px;
        background-image: url('../../../../assets/icon/search.png');
        background-repeat: no-repeat;
        background-position: 16px center;
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

    .filter-left select:focus {
        border: 1px solid #019160;
    }
</style>