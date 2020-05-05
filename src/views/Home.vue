<template>
  <div class="wrapper">
    <Loading v-if="isLoading" />
    <Grid v-show="!isLoading" :characters="characters.results" />
    <button type="button" class="btn-action" @click="loadCharacters()">
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
      isLoading: false
    }
  },
  components: { Loading, Grid },
  async created() {
    if (this.isFirstLoad) return
    await this.loadCharacters()
  },
  methods: {
    ...mapActions(['getCharactersAction']),
    // async getCharactersAction() {
    //   if (this.isFirstLoad) return
    //   // await this.$store.dispatch('characters/getCharactersAction')
    //   this.getCharactersAction()
    // },
    async loadCharacters() {
      this.isLoading = true
      await this.getCharactersAction(this.nextPage)
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters(['isFirstLoad', 'nextPage', 'characters'])
  }
}
</script>
