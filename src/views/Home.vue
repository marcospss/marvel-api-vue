<template>
  <div>
    <Loading v-if="isLoading" />
    <Grid v-show="!isLoading" :characters="characters.results" />
    <hr />
    <p>{{ characters.offset }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    ...mapActions(['getCharactersAction']),
    async loadCharacters() {
      this.isLoading = true
      await this.getCharactersAction()
      this.isLoading = false
    }
  },
  computed: {
    ...mapState(['characters'])
  }
}
</script>
