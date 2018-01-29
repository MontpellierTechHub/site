<template>
  <section class="HomeWelcome">
    <b-container class="position-relative d-table h-100">
      <div class="d-table-cell align-middle text-white text-center">
        <img class="HomeWelcome__icon" :src="icon" alt="Montpellier Tech Hub"/>
        <h1 class="mb-4">Montpellier <strong>Tech Hub</strong></h1>
        <p>Association qui accompagne les meetups tech de Montpellier</p>
      </div>
    </b-container>
  </section>
</template>

<script>
import icon from '../assets/logo-icon.png'

export default {
  name: 'HomeWelcome',
  data () {
    return {
      icon: icon
    }
  }
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
    opacity: .5;
  }
  .HomeWelcome h1 {
    font-size: 2.5rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: -0.05rem;
  }
  .HomeWelcome p {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .HomeWelcome__icon {
    width: 6rem;
    margin-bottom: 1rem;
  }
</style>
