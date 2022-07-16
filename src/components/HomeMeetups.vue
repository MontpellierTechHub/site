<template>
  <section class="HomeMeetups">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-meetup" aria-hidden="true"></i>
        Les meetups qui nous ont déjà rejoint
      </h2>

      <b-card-group columns>
        <b-card v-for="meetup of meetupsFromVux" :key="meetup.name" tag="article">
          <h5 class="card-title">
            <a :href="meetup.meetup_dot_link" target="_blank">
              {{ meetup.name }}
            </a>
          </h5>
          <p class="card-text">{{ meetup.description }}</p>
          <div slot="footer">
            <span class="text-muted">
              ~ {{ meetup.average_per_year }} évènements par an / {{ meetup.meetup_dot_members }} membres
            </span>
          </div>
        </b-card>
      </b-card-group>
    </b-container>
  </section>
</template>

<script>
import shuffle from 'lodash.shuffle'
import meetups from '../assets/meetups.json'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeMeetups',
  computed: {
    ...mapGetters('meetups', {
      meetupsFromVux: 'getMeetupsForHomePage'
    })
  },
  data () {
    return { meetups: shuffle(meetups) }
  },
  mounted () {
    this.$store.dispatch('meetups/getMeetups')
  }
}
</script>

<style scoped>
  .HomeMeetups {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
    background-color: #f5f5f5;
  }
</style>
