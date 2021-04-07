import axios from 'axios'

//const API_URL = 'http://api.manhnv.net/api/customers';
const API_URL = 'http://localhost:62509/api/v1/customers';

const state = {
    customers: [],
};

const getters = {
    allCustomers: state => state.customers,
};

const actions = {
    async fetchCustomers({ commit }) {
        const response = await axios.get(API_URL);
        commit('setCustomers', response.data);
    },
    async dispatchCustomer({ commit }, customer) {
        var method = 'POST';
        var url = API_URL;

        if (customer.CustomerId) {
            method = 'PUT';
            url += '/' + customer.CustomerId;
        }

        try {
            const response = await axios({
                url: url,
                method: method,
                data: JSON.stringify(customer),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                }
            });
            
            commit('dispatchCustomer', response.data.Body);
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    async deleteCustomer({ commit }, id) {
        const response = await axios.delete(`${API_URL}/${id}`);
        if (response.data.MISACode == 200) {
            commit('removeCustomer', id);
        } 
    },
    async queryCustomers({ commit }, data) {
        const params = {
            query: data.query, 
            groups: data.groups
        };
        const response = await axios.get(`${API_URL}/search`, { params });
        console.log(response.data);
        commit('queryCustomers', response.data); 
    }
};

const mutations = {
    setCustomers: (state, customers) => state.customers = customers,
    dispatchCustomer: (state, customer) => {
        const index = state.customers.findIndex(item => item.CustomerId === customer.CustomerId);
        if (index !== -1) {
            state.customers.splice(index, 1, customer);
        } else {
            state.customers.unshift(customer);
        }
    },
    removeCustomer: (state, id) => state.customers = state.customers.filter(customer => customer.CustomerId !== id),
    queryCustomers: (state, customers) => state.customers = customers,
};

export default {
    state,
    getters,
    actions,
    mutations
};