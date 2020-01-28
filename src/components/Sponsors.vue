<template>
  <section class="Sponsors">
    <b-row class="Sponsors__row">
      <b-col class="Sponsors__item" sm="6" md="4" lg="3" v-for="sponsor of sponsors" :key="sponsor.name">
        <a :title="sponsor.name" rel="noopener noreferrer" target="_blank" :href="sponsor.url_website">
          <img class="mw-100" :src="sponsor.logo"/>
        </a>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sponsors',
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
  .Sponsors {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
  }
  .Sponsors__row {
    justify-content: center;
  }
  .Sponsors__item {
    display: flex;
    align-items: center;
    background-color: #ffffff;
  }
</style>
