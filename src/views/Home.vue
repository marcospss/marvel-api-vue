<template>
  <div>
    <Loading v-if="isLoading" />
    <Grid v-show="!isLoading" :characters="characters.results" />
    <p>{{ characters.offset }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('characters')
import Loading from '@/components/Loading'
import Grid from '@/components/Grid'

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false
    }
  },
  components: { Loading, Grid },
  async created() {
    await this.loadCharacters()
  },
  methods: {
    getCharactersAction() {
      this.$store.dispatch('characters/getCharactersAction')
    },
    async loadCharacters() {
      this.isLoading = true
      await this.getCharactersAction()
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters(['characters'])
  }
}
</script>
