<template>
  <section class="HomeSponsors">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-heart" aria-hidden="true"></i>
        Nos sponsors
      </h2>
      <b-row class="HomeSponsors__row">
        <b-col class="HomeSponsors__item" sm="6" md="4" lg="3" v-for="sponsor of sponsors" :key="sponsor.name">
          <a :title="sponsor.name" rel="noopener noreferrer" target="_blank" :href="sponsor.href">
            <img class="mw-100" :src="sponsor.logo"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import shuffle from 'lodash.shuffle'
import logoAgysoft from '@/assets/sponsors/agysoft.jpeg'
import logoBelieveit from '@/assets/sponsors/believeit.png'

const sponsors = [
  {name: 'Agysoft', logo: logoAgysoft, href: 'http://www.agysoft.fr/'},
  {name: 'Believe it', logo: logoBelieveit, href: 'http://www.believeit.fr/'}
]

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
