<template>
  <div class="details">
    <Loading v-if="isLoading" />
    <header v-show="!isLoading">
      <router-link data-cy="btn-back-home" to="/">Voltar para home</router-link>
      <h2 data-cy="title">{{ details.name }}</h2>
      <img
        data-cy="image"
        :src="details.thumbnail && getPathImage(details.thumbnail)"
        :alt="details.name"
      />
      <p data-cy="description">{{ details.description }}</p>
      <button
        data-cy="edit-character"
        type="button"
        class="btn-edit"
        @click="toggleDisplayForm"
      >
        Editar Personagem
      </button>
    </header>
    <FormEditCharacter
      data-cy="form-edit-character"
      v-if="displayForm"
      @toggleDisplayForm="toggleDisplayForm"
      :character="details"
    />
    <SeriesGrid
      data-cy="series"
      v-if="!isLoading && !!(series && series.results && series.results.length)"
      :series="series.results"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('details')

import Loading from '@/components/Loading'
import SeriesGrid from '@/components/SeriesGrid'
import FormEditCharacter from '@/components/FormEditCharacter'

export default {
  name: 'Details',
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isLoading: false,
      displayForm: false
    }
  },
  components: { Loading, SeriesGrid, FormEditCharacter },
  async created() {
    await this.loadDetails(this.id)
    await this.loadSeries(this.id)
  },
  methods: {
    ...mapActions(['getCharactersByIdAction', 'getSeriesCharactersByIdAction']),
    async loadDetails(id) {
      this.isLoading = true
      await this.getCharactersByIdAction(id)
      this.isLoading = false
    },
    async loadSeries(id) {
      await this.getSeriesCharactersByIdAction(id)
    },
    getPathImage(thumbnail) {
      const { path, extension } = thumbnail
      return `${path}.${extension}`
    },
    toggleDisplayForm() {
      this.displayForm = !this.displayForm
    }
  },
  computed: {
    ...mapGetters(['details', 'series'])
  }
}
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  position: relative;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 4rem;
  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    a {
      position: absolute;
      top: 40px;
      left: 40px;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
      background: #00000030;
      padding: 10px;
      border-radius: 0.5rem;
      &:hover {
        color: #000;
        background: #00000050;
      }
    }
    h2 {
      font-size: 26px;
      text-transform: uppercase;
    }
    img {
      max-width: 280px;
    }
    p {
      font-size: 16px;
    }
  }
  .btn-edit {
    cursor: pointer;
    width: 20%;
    background: #ccc;
    padding: 14px;
    color: #111;
    border-radius: 4px;
    display: inline-block;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
