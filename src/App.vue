<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
