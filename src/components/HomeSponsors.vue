<template>
  <section class="HomeSponsors">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-heart" aria-hidden="true"></i>
        Nos sponsors
      </h2>
      <b-row class="HomeSponsors__row">
        <b-col class="HomeSponsors__item" sm="6" md="4" lg="3" v-for="sponsor of sponsors" :key="sponsor.name">
          <a :title="sponsor.name" rel="noopener noreferrer" target="_blank" :href="sponsor.url_website">
            <img class="mw-100" :src="sponsor.logo"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeSponsors',
  computed: {
    ...mapGetters('sponsors', {
      sponsors: 'getSponsorsForHomePage'
    })
  },
  mounted () {
    this.$store.dispatch('sponsors/getSponsors')
  }
}
</script>

<style scoped>
  .HomeSponsors {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
  }
  .HomeSponsors__row {
    justify-content: center;
  }
  .HomeSponsors__item {
    display: flex;
    align-items: center;
    background-color: #ffffff;
  }
</style>
