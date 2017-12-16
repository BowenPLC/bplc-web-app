import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/api';

Vue.use(Vuex);

const store = {
    state: {
        configuration: undefined,
        status: {},
    },
    mutations: {
        setConfig(state, configuration) {
            state.configuration = configuration;
        },
        setStatus(state, status) {
            state.status = status;
        },
    },
    actions: {
        async getConfig({ commit, }) {
            let newConfig;
            try {
                newConfig = await api.getConfig();
            } catch (err) {
                // eslint-disable-next-line
                console.log(err);
            }

            commit('setConfig', newConfig);
        },
        async getStatus({ commit, }) {
            commit('setStatus', {});
        },
    },
};

/* eslint-disable no-new */
const vuexStore = new Vuex.Store(store);
export default vuexStore;
