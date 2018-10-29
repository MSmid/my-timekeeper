import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

const state = {
    isLoading: false,
    visibleModals: {
        confirmDelete: false,
        create: false,
        upload: false
    }
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
});