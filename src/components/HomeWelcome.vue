<template>
  <section class="HomeWelcome">
    <b-container class="position-relative d-table h-100">
      <div class="d-table-cell align-middle text-white text-center">
        <h1 class="mb-4">Montpellier TechHub</h1>
        <p>Une super phrase pour nous présenter !</p>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HomeWelcome'
}
</script>

<style scoped>
  .HomeWelcome {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(../assets/welcome-background.jpg);
  }
  .HomeWelcome::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #000000;
    opacity: .7;
  }
  .HomeWelcome p {
    font-size: 1.5rem;
    font-weight: 300;
  }
</style>
