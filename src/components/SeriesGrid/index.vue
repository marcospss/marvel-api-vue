<template>
  <div class="series-grid">
    <h2>Series</h2>
    <div class="grid">
      <figure>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="3-D Man"
        />
        <figcaption>3-D Man</figcaption>
      </figure>
      <figure>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="3-D Man"
        />
        <figcaption>3-D Man</figcaption>
      </figure>
      <figure>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="3-D Man"
        />
        <figcaption>3-D Man</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.series-grid {
  max-width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 24px;
    margin: 0px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    padding: 25px;
    grid-gap: 25px;
    grid-auto-flow: dense;
    align-items: stretch;
    width: 100%;
    figure {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      figcaption {
        display: block;
        width: 100%;
        border: 1px solid #fefefe;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        overflow: hidden;
        background: #000;
        color: #fff;
        padding: 20px 10px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
