import { CHARACTERS } from '../mutationTypes'
import { characters as charactersService } from '@/services'

const characters = {
  namespaced: true,
  state: {
    isFirstLoad: false,
    nextPage: 0,
    characters: {}
  },
  mutations: {
    [CHARACTERS.GET_LIST](state, characters) {
      state.characters = characters
      state.nextPage += 10
      state.isFirstLoad = true
    }
  },
  actions: {
    async getCharactersAction({ commit }, nextPage) {
      const characters = await charactersService.fetchesListsCharacters(
        nextPage
      )
      commit(CHARACTERS.GET_LIST, characters)
    }
  },
  getters: {
    characters: state => state.characters,
    nextPage: state => state.nextPage,
    isFirstLoad: state => state.isFirstLoad
  }
}

export default characters
