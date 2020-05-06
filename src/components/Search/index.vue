<template>
  <form role="search" class="search-character" @submit="onSubmitForm">
    <fieldset>
      <legend>Pesquisar personagem</legend>
      <input
        @change="triggerSearch($event)"
        v-model="query"
        type="text"
        name="query"
        id="query"
        maxLength="30"
        placeholder="Pesquisar personagem"
      />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data: function() {
    return {
      query: ''
    }
  },
  methods: {
    onSubmitForm(event) {
      event.preventDefault()
    },
    triggerSearch(event) {
      this.query = event.currentTarget.value
      this.$emit('search-character', this.query)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }
}
</style>
