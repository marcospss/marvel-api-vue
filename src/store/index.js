import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { CHARACTERS } from './mutationTypes'
import { characters as charactersService } from '@/services'

const state = () => ({
  characters: [],
  details: {},
  series: []
})

const mutations = {
  [CHARACTERS.GET_LIST](state, characters) {
    state.characters = characters
  }
}

const actions = {
  async getCharactersAction({ commit }) {
    const characters = await charactersService.fetchesListsCharacters()
    commit(CHARACTERS.GET_LIST, characters)
  }
}

const getters = {
  geCharacterById: state => id =>
    state.characters.find(character => character.id === id)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
