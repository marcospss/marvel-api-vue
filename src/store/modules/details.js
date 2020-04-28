import { CHARACTERS } from '../mutationTypes'
import { characters as charactersService } from '@/services'

const details = {
  namespaced: true,
  state: {
    details: {},
    series: {}
  },
  mutations: {
    [CHARACTERS.GET_BY_ID](state, details) {
      state.details = details
    },
    [CHARACTERS.GET_SERIES_BY_ID](state, series) {
      state.series = series
    }
  },
  actions: {
    async getCharactersByIdAction({ commit }, id) {
      const details = await charactersService.fetchesCharactersById(id)
      commit(CHARACTERS.GET_BY_ID, details.results[0])
    },
    async getSeriesCharactersByIdAction({ commit }, id) {
      const series = await charactersService.fetchesSeriesCharactersById(id)
      commit(CHARACTERS.GET_SERIES_BY_ID, series)
    }
  },
  getters: {
    details: state => state.details,
    series: state => state.series
  }
}

export default details
