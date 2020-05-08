<template>
  <div class="wrapper">
    <Loading v-if="isLoading" />
    <form role="search" class="search-character" @submit="onSubmitForm">
      <fieldset>
        <legend>Pesquisar personagem</legend>
        <input
          data-cy="input-search"
          v-model="query"
          type="search"
          name="query"
          id="query"
          maxLength="30"
          placeholder="Pesquisar personagem"
        />
      </fieldset>
    </form>
    <Grid v-show="!isLoading" :characters="filteredListCharacter" />
    <button
      data-cy="btn-load-more"
      type="button"
      class="btn-action"
      @click="loadCharacters()"
    >
      Carregar mais
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('characters')
import Loading from '@/components/Loading'
import Grid from '@/components/Grid'

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      query: ''
    }
  },
  components: { Loading, Grid },
  async created() {
    if (this.isFirstLoad) return
    await this.loadCharacters()
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions(['getCharactersAction']),
    async loadCharacters() {
      const positionScrollY = this.handleScroll()
      this.isLoading = true
      await this.getCharactersAction(this.nextPage)
      setTimeout(() => {
        window.scrollTo({
          top: positionScrollY,
          behavior: 'smooth'
        })
      }, 1000)
      this.isLoading = false
    },
    onSubmitForm(event) {
      event.preventDefault()
    },
    handleScroll() {
      return window !== undefined && window.scrollY
    }
  },
  computed: {
    ...mapGetters(['isFirstLoad', 'nextPage', 'characters']),
    filteredListCharacter() {
      return this.characters.results.filter(character => {
        return character.name.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 80px;
}
.search-character {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  position: fixed;
  padding: 20px;
  background-color: #ccc;
  top: 78px;
  fieldset {
    width: 100%;
    font-size: 16px;
    text-align: center;
    legend {
      padding: 0px 20px;
      text-transform: uppercase;
    }
    border-radius: 10px;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
}
</style>
