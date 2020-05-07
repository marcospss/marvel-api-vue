import { shallowMount } from '@vue/test-utils'

import FormEditCharacter from '@/components/FormEditCharacter'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(FormEditCharacter, {
    propsData: {
      character: {
        id: 21032020,
        name: 'Abomination (Emil Blonsky)',
        description:
          'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          extension: 'jpg'
        }
      }
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('FormEditCharacter', () => {
  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('is a FormEditCharacter instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('it Should save character success', () => {
    expect(wrapper.find('.message').exists()).toBeFalsy()
    wrapper.vm.triggerSaveEdit()
    expect(wrapper.vm.alertMessage.type).toBe('success')
    expect(wrapper.vm.alertMessage.message).toBe(
      'Personagem salvo com sucesso!'
    )
  })

  it('it Should edit name character', () => {
    const input = wrapper.find('input[name="name"]')
    expect(input.element.value).toBe('Abomination (Emil Blonsky)')
    input.setValue('new value name character')
    expect(input.element.value).toBe('new value name character')
  })

  it('it Should edit description character', () => {
    const input = wrapper.find('textarea[name="description"]')
    expect(input.element.value).toBe('Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.')
    input.setValue('new value name description')
    expect(input.element.value).toBe('new value name description')
  })
})
