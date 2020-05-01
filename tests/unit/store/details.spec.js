import mockAxios from 'axios'
import details from '@/store/modules/details'
import { CHARACTERS } from '@/store/mutationTypes'

const resultFindCharacterId = {
  data: {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
      {
        id: 1009146,
        name: 'Abomination (Emil Blonsky)',
        description:
          'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        modified: '2012-03-20T12:32:12-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          extension: 'jpg'
        }
      }
    ]
  }
}

const listResultsSeries = {
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

afterEach(() => {
  jest.clearAllMocks()
})

describe('DETAILS - Store', () => {
  describe('DETAILS', () => {
    describe('Mutations/Details', () => {
      const state = {
        details: {
          offset: 0,
          limit: 10,
          total: 0,
          count: 0,
          results: []
        }
      }
      it(`mutations/${CHARACTERS.GET_BY_ID}`, () => {
        const response = {
          offset: 0,
          limit: 10,
          total: 0,
          count: 0,
          results: []
        }
        details.mutations[CHARACTERS.GET_BY_ID](state, response)
        expect(state.details.offset).toEqual(0)
        expect(state.details.limit).toEqual(10)
        expect(state.details.total).toEqual(0)
        expect(state.details.count).toEqual(0)
        expect(state.details.results).toEqual([])
      })
    })

    describe('Actions/Details', () => {
      const resultDetailsCharacters = {
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1009146,
            name: 'Abomination (Emil Blonsky)',
            description:
              'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
            modified: '2012-03-20T12:32:12-0400',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
              extension: 'jpg'
            }
          }
        ]
      }
      const resp = { data: resultFindCharacterId }
      mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp))

      it('actions/getCharactersByIdAction', async () => {
        const context = {
          commit: jest.fn()
        }
        await details.actions.getCharactersByIdAction(context)
        expect(context.commit).toHaveBeenCalledWith(
          CHARACTERS.GET_BY_ID,
          resultDetailsCharacters.results[0]
        )
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
      })
    })

    describe('Getters/Details', () => {
      const state = {
        details: {
          offset: 0,
          limit: 10,
          total: 1,
          count: 1,
          results: [
            {
              id: 1009146,
              name: 'Abomination (Emil Blonsky)',
              description:
                'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
              modified: '2012-03-20T12:32:12-0400',
              thumbnail: {
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
                extension: 'jpg'
              }
            }
          ]
        }
      }

      it('getters/details', () => {
        expect(details.getters.details(state)).toEqual({
          offset: 0,
          limit: 10,
          total: 1,
          count: 1,
          results: [
            {
              id: 1009146,
              name: 'Abomination (Emil Blonsky)',
              description:
                'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
              modified: '2012-03-20T12:32:12-0400',
              thumbnail: {
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
                extension: 'jpg'
              }
            }
          ]
        })
      })
    })
  })

  describe('SERIES', () => {
    describe('Mutations/Series', () => {
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
        details.mutations[CHARACTERS.GET_SERIES_BY_ID](state, response)
        expect(state.series.offset).toEqual(0)
        expect(state.series.limit).toEqual(10)
        expect(state.series.total).toEqual(0)
        expect(state.series.count).toEqual(0)
        expect(state.series.results).toEqual([])
      })
    })

    describe('Actions/Series', () => {
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
      const resp = { data: listResultsSeries }
      mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp))

      it('actions/fetchesSeriesCharactersById', async () => {
        const context = {
          commit: jest.fn()
        }
        await details.actions.getSeriesCharactersByIdAction(context)
        expect(context.commit).toHaveBeenCalledWith(
          CHARACTERS.GET_SERIES_BY_ID,
          resultSeries
        )
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
      })
    })

    describe('Getters/Series', () => {
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
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg'
              }
            }
          ]
        }
      }

      it('getters/series', () => {
        expect(details.getters.series(state)).toEqual({
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
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg'
              }
            }
          ]
        })
      })
    })
  })
})
