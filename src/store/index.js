import Vuex from 'vuex'
import Vue from 'vue'
import customers from './modules/customers'
import groups from './modules/groups'

//load vuex
Vue.use(Vuex)

//create store
export default new Vuex.Store({
    modules: {
        customers,
        groups
    }
})