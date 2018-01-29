<template>
  <section class="HomeWelcome">
    <b-container class="position-relative d-table h-100">
      <div class="d-table-cell align-middle text-white text-center">
        <img class="HomeWelcome__logo" :src="logo" alt="Montpellier Tech Hub"/>
        <p>Association qui accompagne les meetups tech de Montpellier</p>
      </div>
    </b-container>
  </section>
</template>

<script>
import logo from '../assets/logo-light.svg'

export default {
  name: 'HomeWelcome',
  data () {
    return {
      logo: logo
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
  .HomeWelcome p {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .HomeWelcome__logo {
    max-width: 35rem;
    margin-bottom: 2rem;
  }
</style>
