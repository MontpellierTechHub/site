<template>
  <section class="HomeMeetups">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-meetup" aria-hidden="true"></i>
        Les meetups qui nous ont déjà rejoint
      </h2>
      <b-card-group columns>
        <b-card v-for="meetup of meetups" :key="meetup.name" tag="article">
          <h5 class="card-title">
            <a :href="meetup.href" target="_blank">
              {{ meetup.name }}
            </a>
          </h5>
          <p class="card-text">{{ meetup.body }}</p>
          <div slot="footer">
            <span class="text-muted">
              ~ {{ meetup.avg_events }} évènements par an / {{ meetup.members }} membres
            </span>
          </div>
        </b-card>
      </b-card-group>
    </b-container>
  </section>
</template>

<script>
import shuffle from 'lodash.shuffle'
import meetups from '@/assets/meetups.json'

export default {
  name: 'HomeMeetups',
  data () {
    return { meetups: shuffle(meetups) }
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
