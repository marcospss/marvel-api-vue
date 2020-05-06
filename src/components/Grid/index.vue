<template>
  <div class="grid">
    <figure v-for="character in characters" :key="character.id">
      <router-link
        tag="a"
        :to="{ name: 'Details', params: { id: character.id } }"
      >
        <img :src="getPathImage(character.thumbnail)" :alt="character.name" />
        <figcaption v-once>{{ character.name }}</figcaption>
      </router-link>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    characters: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    getPathImage(thumbnail) {
      const { path, extension } = thumbnail
      return `${path}.${extension}`
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0px;
  grid-gap: 0px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
  figure {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    a {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      color: #fefefe;
      text-decoration: none;
      border: 1px solid #fefefe;
      border-radius: 10px;
      overflow: hidden;
      background: #000;
      &:hover {
        text-decoration: underline;
        color: #4e5f82;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
    }
    figcaption {
      padding: 10px;
    }
  }
}
</style>
