import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Grid from '@/components/Grid'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Grid, {
    propsData: {
      characters: [
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
    methods: {},
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Grid', () => {
  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('is a Grid instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should be displayed item with data props', () => {
    expect(wrapper.find('a').attributes('href')).toBe(undefined)
    expect(wrapper.find('img').attributes('src')).toBe(
      'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    )
    expect(wrapper.find('img').attributes('alt')).toBe('3-D Man')
    expect(wrapper.find('figcaption').text()).toBe('3-D Man')
  })
})
