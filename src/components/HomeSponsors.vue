<template>
  <section class="HomeSponsors">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-heart" aria-hidden="true"></i>
        Nos sponsors
      </h2>
      <b-row>
        <b-col sm="6" md="4" lg="3" v-for="sponsor of sponsors" :key="sponsor.name">
          <a class="HomeSponsors__item" :href="sponsor.href">
            <img class="mw-100" :src="sponsor.logo"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import shuffle from 'lodash.shuffle'
import sponsors from '@/assets/sponsors.json'

export default {
  name: 'HomeSponsors',
  data () {
    return { sponsors: shuffle(sponsors) }
  }
}
</script>

<style scoped>
  .HomeSponsors {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
    background-color: #f5f5f5;
  }
  .HomeSponsors__item {
    display: block;
    background-color: #ffffff;
  }
</style>
