<template>
  <section class="section" data-background-image="/static/images/background-slideshow-header.jpg">
    <h3 class="title">EVENTS</h3>

    <b-row>
      <b-col sm="12" md="6" v-for="event of events" :key="event.id" :href="event.url" target="_blank" class="events">
        <h6 class="meetupName">{{ event.icalName }}</h6>
        <h4 class="eventName">{{ event.title }}</h4>
        <p class="detail"><i class="fa fa-clock fa-3x"></i>{{event.startDate}}</p>
        <p class="detail"><i class="fa fa-map-marker fa-3x"></i>{{event.locationName}}</p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { ical2ApiURL } from '../../constants'
import { DateTime } from 'luxon'

export default {
  name: 'SlideEvents',
  data () {
    return {
      events: [],
      eventsLoaded: false,
    }
  },
  mounted () {
    this.fetchEvents()
  },
  beforeUpdate () {
    this.fetchEvents()
  },
  methods: {
    fetchEvents () {
      if (this.eventsLoaded) return
      fetch(ical2ApiURL)
        .then(async response => {
          const events = await response.json()
          this.events = events.map(event => ({
            ...event,
            locationName: event.location ? event.location.substring(0, event.location.indexOf('(')) : '',
            startDate: DateTime.fromMillis(event.startDate).toLocaleString({
                month: 'long',
              weekday: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
            })
          }))
          console.log(this.events[0])
          this.eventsLoaded = true
        })
    }
  }
}
</script>

<style scoped>
  .section {
    padding: 0 !important;
    height: 100vh;
  }

  .title {
    color: white;
    margin-top: 3rem;
    margin-bottom: 7rem;
  }

  .events {
    text-align: left;
    margin-bottom: 40px;
  }

  .meetupName, .eventName {
    text-transform: none;
    font-weight: 400;
  }
  .meetupName {
    color: #666;
    font-size: 1.8rem;
    font-weight: 200;
    margin-bottom: 0;
  }
  .eventName {
    color: black;
    font-size: 2.2rem;
  }
  .detail {
    font-size: 1.3rem;
    font-weight: 100;
    margin: 5px 0;
  }

  .detail i {
    font-size: 1.5rem;
    margin-right: 10px;
    width: 30px;
  }

</style>
