<template>
  <div class="details">
    <Loading v-if="isLoading" />
    <header v-show="!isLoading">
      <router-link to="/">Voltar para home</router-link>
      <h2>{{ details.name }}</h2>
      <img
        :src="details.thumbnail && getPathImage(details.thumbnail)"
        :alt="details.name"
      />
      <p>{{ details.description }}</p>
    </header>
    <SeriesGrid
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
      isLoading: false
    }
  },
  components: { Loading, SeriesGrid },
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
}
</style>
