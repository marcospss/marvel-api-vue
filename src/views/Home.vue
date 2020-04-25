<template>
  <div>
    <Grid :characters="characters.results" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Grid from '@/components/Grid'

export default {
  name: 'Home',
  components: { Grid },
  async created() {
    await this.loadCharacters()
  },
  methods: {
    ...mapActions(['getCharactersAction']),
    async loadCharacters() {
      await this.getCharactersAction()
    }
  },
  computed: {
    ...mapState(['characters'])
  }
}
</script>
