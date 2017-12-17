import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/api';

Vue.use(Vuex);

const store = {
    state: {
        configuration: undefined,
        status: {},
        ioMap: {},
    },
    getters: {
        getIO: state => {
            return (moduleName, index) => {
                return state.ioMap[ moduleName ][ index ];
            };
        },
    },
    mutations: {
        setConfig(state, configuration) {
            state.configuration = configuration;
        },
        setStatus(state, status) {
            state.status = status;
        },
        setIOMap(state, ioMap) {
            state.ioMap = ioMap;
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
        async getCompleteIOMap({ commit, }) {
            const newMap = {};
            try {
                (await api.getCompleteIOMap()).forEach(mod => {
                    newMap[ mod.name ] = mod.data;
                });
            } catch (err) {
                // eslint-disable-next-line
                console.log(err);
            }

            commit('setIOMap', newMap);
        },
        async setIOState({ commit, }, [ mod, index, state, ]) {
            api.setIO(mod, index, state);
        },
    },
};

/* eslint-disable no-new */
const vuexStore = new Vuex.Store(store);
export default vuexStore;
