import axios from 'axios'

const state = {
    customers: []
};

const getters = {
    allCustomers: state => state.customers,
};

const actions = {
    async fetchCustomers({ commit }) {
        const response = await axios.get('http://api.manhnv.net/api/customers');
        commit('setCustomers', response.data);
    },
    async addCustomer({ commit }, formData) {
        const response = await axios.post('http://api.manhnv.net/api/customers', 
            JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log(response);
        commit('newCustomer', formData);
    },
    async updateCustomer({ commit }, customer) {
        const response = await axios.put(`http://api.manhnv.net/api/customers/${customer.CustomerId}`,
            JSON.stringify(customer), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log(response);
        commit('updateCustomer', customer);
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
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};