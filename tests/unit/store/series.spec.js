import mockAxios from 'axios'
import series from '@/store/modules/series'
import { CHARACTERS } from '@/store/mutationTypes'

const listResults = {
  data: {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
      {
        id: 1011334,
        title: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg'
        }
      }
    ]
  }
}

describe('SERIES - Store', () => {
  describe('Mutations', () => {
    const state = {
      series: {
        offset: 0,
        limit: 10,
        total: 0,
        count: 0,
        results: []
      }
    }
    it(`mutations/${CHARACTERS.GET_SERIES_BY_ID}`, () => {
      const response = {
        offset: 0,
        limit: 10,
        total: 0,
        count: 0,
        results: []
      }
      series.mutations[CHARACTERS.GET_SERIES_BY_ID](state, response)
      expect(state.series.offset).toEqual(0)
      expect(state.series.limit).toEqual(10)
      expect(state.series.total).toEqual(0)
      expect(state.series.count).toEqual(0)
      expect(state.series.results).toEqual([])
    })
  })

  describe('Actions', () => {
    const resultSeries = {
      count: 1,
      limit: 10,
      offset: 0,
      results: [
        {
          description: '',
          id: 1011334,
          modified: '2014-04-29T14:18:17-0400',
          title: '3-D Man',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784'
          }
        }
      ],
      total: 1
    }
    const resp = { data: listResults }
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp))

    it('actions/fetchesSeriesCharactersById', async () => {
      const context = {
        commit: jest.fn()
      }
      await series.actions.getSeriesCharactersByIdAction(context)
      expect(context.commit).toHaveBeenCalledWith(
        CHARACTERS.GET_SERIES_BY_ID,
        resultSeries
      )
      expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
  })

  describe('Getters', () => {
    const state = {
      series: {
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1011334,
            title: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg'
            }
          }
        ]
      }
    }

    it('getters/series', () => {
      expect(series.getters.series(state)).toEqual({
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1011334,
            title: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg'
            }
          }
        ]
      })
    })
  })
})
