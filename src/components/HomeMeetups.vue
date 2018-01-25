<template>
  <section class="HomeMeetups">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-meetup" aria-hidden="true"></i>
        Les meetups qui nous ont déjà rejoint
      </h2>
      <b-row>
        <b-col class="HomeMeetups__item" sm="6" md="4" lg="3" v-for="meetup of meetups" :key="meetup.name">
          <a :href="meetup.href">
            {{ meetup.name }}
          </a>
          <p>{{ meetup.body }}</p>
        </b-col>
      </b-row>
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
  .HomeMeetups__item {
  }
</style>
