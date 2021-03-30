import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

import CustomerList from './components/page/dictionary/customer/CustomerList'
import EmployeeList from './components/page/dictionary/employee/EmployeeList'

const routes = [
	{
		path: '/danh-muc/khach-hang',
		component: CustomerList
	},
	{
		path: '/danh-muc/nhan-vien',
		component: EmployeeList
	}
]

const router = new VueRouter({
	routes
});

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
