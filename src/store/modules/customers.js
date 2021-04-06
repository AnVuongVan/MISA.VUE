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
    async addCustomer({ commit }, formData) {
        try {
            const response = await axios.post(API_URL, 
                JSON.stringify(formData), {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            commit('newCustomer', response.data.Body);
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    async updateCustomer({ commit }, customer) {
        try {
            const response = await axios.put(`${API_URL}/${customer.CustomerId}`,
                JSON.stringify(customer), {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            commit('updateCustomer', response.data.Body);
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
    }
};

const mutations = {
    setCustomers: (state, customers) => (state.customers = customers),
    newCustomer: (state, customer) => state.customers.unshift(customer),
    updateCustomer: (state, customer) => {
        const index = state.customers.findIndex(item => item.CustomerId === customer.CustomerId);
        if (index !== -1) {
            state.customers.splice(index, 1, customer);
        }
    },
    removeCustomer: (state, id) => state.customers = state.customers.filter(customer => customer.CustomerId !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
};