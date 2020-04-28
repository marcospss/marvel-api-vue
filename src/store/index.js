import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import characters from './modules/characters'
import details from './modules/details'

export default new Vuex.Store({
  modules: {
    characters,
    details
  }
})
