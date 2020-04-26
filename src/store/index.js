import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { CHARACTERS } from './mutationTypes'
import { characters as charactersService } from '@/services'

const state = () => ({
  characters: {},
  details: {},
  series: []
})

const mutations = {
  [CHARACTERS.GET_LIST](state, characters) {
    state.characters = characters
  },
  [CHARACTERS.GET_BY_ID](state, details) {
    state.details = details
  },
  [CHARACTERS.GET_SERIES_BY_ID](state, series) {
    state.series = series
  }
}

const actions = {
  async getCharactersAction({ commit }) {
    const characters = await charactersService.fetchesListsCharacters()
    commit(CHARACTERS.GET_LIST, characters)
  },
  async getCharactersByIdAction({ commit }, id) {
    const details = await charactersService.fetchesCharactersById(id)
    commit(CHARACTERS.GET_BY_ID, details.results[0])
  },
  async getSeriesCharactersByIdAction({ commit }, id) {
    const series = await charactersService.fetchesSeriesCharactersById(id)
    commit(CHARACTERS.GET_SERIES_BY_ID, series)
  }
}

const getters = {
  getCharactersNextPage: state => state.characters.offset
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
