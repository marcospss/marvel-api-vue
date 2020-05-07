import mockAxios from 'axios'
import characters from '@/store/modules/characters'
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
        name: '3-D Man',
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

describe('CHARACTERS - Store', () => {
  describe('Mutations', () => {
    const state = {
      characters: {
        offset: 0,
        limit: 10,
        total: 0,
        count: 0,
        results: []
      }
    }
    it(`mutations/${CHARACTERS.GET_LIST}`, () => {
      const response = {
        offset: 0,
        limit: 10,
        total: 0,
        count: 0,
        results: []
      }
      characters.mutations[CHARACTERS.GET_LIST](state, response)
      expect(state.characters.offset).toEqual(0)
      expect(state.characters.limit).toEqual(10)
      expect(state.characters.total).toEqual(0)
      expect(state.characters.count).toEqual(0)
      expect(state.characters.results).toEqual([])
    })
  })

  describe('Actions', () => {
    const resultCharacters = {
      count: 1,
      limit: 10,
      offset: 0,
      results: [
        {
          description: '',
          id: 1011334,
          modified: '2014-04-29T14:18:17-0400',
          name: '3-D Man',
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

    it('actions/getCharactersAction', async () => {
      const context = {
        commit: jest.fn()
      }
      await characters.actions.getCharactersAction(context)
      expect(context.commit).toHaveBeenCalledWith(
        CHARACTERS.GET_LIST,
        resultCharacters
      )
      expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
  })

  describe('Getters', () => {
    const state = {
      characters: {
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1011334,
            name: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg'
            }
          }
        ]
      },
      isFirstLoad: false,
      nextPage: 0
    }

    it('getters/characters', () => {
      expect(characters.getters.characters(state)).toEqual({
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1011334,
            name: '3-D Man',
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
    it('getters/nextPage', () => {
      expect(characters.getters.nextPage(state)).toEqual(0)
    })
  })
})
