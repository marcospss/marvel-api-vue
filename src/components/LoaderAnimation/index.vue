<template>
  <div class="container-animation">
    <div class="loader"></div>
  </div>
</template>

<style lang="sass" scoped>
.loading {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background: #00000045;
}
@keyframes loader {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #000;
    width: 120px;
    height: 120px;
    animation: loader 2s linear infinite;
}
</style>
