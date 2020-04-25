<template>
  <div class="details">
    <header>
      <router-link to="/">Voltar para home</router-link>
      <h2>3-D Man</h2>
      <img
        src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
        alt="3-D Man"
      />
      <p>
        Based on the global blockbuster videogame franchise from Sega, Sonic the
        Hedgehog tells the story of the world’s speediest hedgehog as he
        embraces his new home on Earth. In this live-action adventure comedy,
        Sonic and his new best friend team up to defend the planet from the evil
        genius Dr. Robotnik and his plans for world domination.
      </p>
    </header>
    <SeriesGrid />
  </div>
</template>

<script>
import SeriesGrid from '@/components/SeriesGrid'

export default {
  name: 'Details',
  components: { SeriesGrid }
}
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  position: relative;
  max-width: 100%;
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
