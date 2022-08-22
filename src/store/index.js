import Vue from 'vue'
import Vuex from 'vuex'


import directSearch from './modules/directSearch'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    directSearch
  },
  getters
})
