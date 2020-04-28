import { CHARACTERS } from '../mutationTypes'
import { characters as charactersService } from '@/services'

const characters = {
  namespaced: true,
  state: {
    characters: {}
  },
  mutations: {
    [CHARACTERS.GET_LIST](state, characters) {
      state.characters = characters
      state.characters.offset += 10
    }
  },
  actions: {
    async getCharactersAction({ commit }) {
      const characters = await charactersService.fetchesListsCharacters()
      commit(CHARACTERS.GET_LIST, characters)
    }
  },
  getters: {
    characters: state => state.characters,
    getCharactersNextPage: state => state.characters.offset
  }
}

export default characters
