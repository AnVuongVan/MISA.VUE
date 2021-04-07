import axios from 'axios'

//const API_URL = 'http://api.manhnv.net/api/customergroups';
const API_URL = 'http://localhost:62509/api/v1/customergroups';

const state = {
    groups: [],
};

const getters = {
    allGroups: state => state.groups,
};

const actions = {
    async fetchCustomerGroups({ commit }) {
        const response = await axios.get(API_URL);
        commit('setCustomerGroups', response.data);
    },
};

const mutations = {
    setCustomerGroups: (state, groups) => state.groups = groups,
};

export default {
    state,
    getters,
    actions,
    mutations
};