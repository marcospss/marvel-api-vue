import { CHARACTERS } from '../mutationTypes'
import { characters as charactersService } from '@/services'

const series = {
  namespaced: true,
  state: {
    series: {}
  },
  mutations: {
    [CHARACTERS.GET_SERIES_BY_ID](state, series) {
      state.series = series
    }
  },
  actions: {
    async getSeriesCharactersByIdAction({ commit }, id) {
      const series = await charactersService.fetchesSeriesCharactersById(id)
      commit(CHARACTERS.GET_SERIES_BY_ID, series)
    }
  },
  getters: {
    series: state => state.series
  }
}

export default series
