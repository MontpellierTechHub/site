<template>
  <section class="HomeWelcome">
  </section>
</template>

<script>

export default {
  name: 'PageBanner'
}
</script>

<style scoped>
  .HomeWelcome {
    font-family: 'Roboto', sans-serif;
    height: 30vh;
    background-size: cover;
    background-position: center -20vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(../assets/background.jpg);
    position: relative;
  }
  .HomeWelcome::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #000000;
    opacity: .5;
  }
</style>
