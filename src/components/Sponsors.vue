<template>
  <div class="Sponsors">
    <b-row class="Sponsors__row">
      <b-col class="Sponsors__item" sm="6" md="4" lg="3" v-for="sponsor of sponsors" :key="sponsor.name">
        <a :title="sponsor.name" rel="noopener noreferrer" target="_blank" :href="sponsor.url_website">
          <img class="mw-100" :src="sponsor.logo"/>
        </a>
      </b-col>
    </b-row>
  </div>
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
  }
  .Sponsors__row {
    justify-content: center;
  }
  .Sponsors__item {
    display: flex;
    align-items: center;
  }
  .Sponsors__item a{
    background-color: #ffffff;
  }

  .Sponsors__item a {
    height: 130px;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-bottom: 30px;
    transition: all .15s linear;
    text-align: center;
  }
  .Sponsors__item a:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
  }
  .Sponsors__item img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 15px !important;
    margin: 0;
    max-height: 95%;
    vertical-align: baseline;
  }
  .Sponsors__item img:hover {
    box-shadow: none;
  }
</style>
