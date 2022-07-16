<template>
  <section class="HomeSponsors">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-heart" aria-hidden="true"></i>
        Nos sponsors
      </h2>
      <mth-sponsors/>
    </b-container>
  </section>
</template>

<script>
import MthSponsors from '../components/Sponsors.vue'

export default {
  name: 'HomeSponsors',
  components: {
    MthSponsors
  }
}
</script>

<style scoped>
  .HomeSponsors {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
  }
</style>
