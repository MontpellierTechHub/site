<template>
  <section class="HomeAbout">
    <b-container>
      <h1 class="text-center">Prochains événements</h1>

      <div v-if="eventsLoading" class="text-center">
        Chargements des prochains évènements
      </div>
      <div v-if="eventsLoaded && events.length === 0" class="text-center">
        Pas de prochain évènements
      </div>

      <article>
        <b-list-group>
          <b-list-group-item v-for="event of events" :key="event.id" :href="event.url" target="_blank" class="d-flex">
            <div class="event_time-venue">
              <div class="event_time">
                <h5>{{moment(event.startDate).format("dddd DD MMMM")}}</h5>
                <span>{{moment(event.startDate).format("à HH:mm")}}</span>
              </div>
              <div class="event_venue" v-if="event.location">
                <h5>{{event.locationName}}</h5>
                <p>{{event.location}}</p>
              </div>
            </div>
            <div class="event_details">
              <div class="d-flex w-100 justify-content-between">
                <h6>{{ event.icalName }}</h6>
              </div>
              <h4 class="mb-1">{{ event.title }}</h4>
              <p class="mb-1 event_description" v-html="event.description"></p>
            </div>
          </b-list-group-item>
        </b-list-group>
      </article>
      <article>
        <b-button variant="outline-secondary" target="_blank" href="https://ical2api.web.app/o/9Y6UMiuKiWTyu12Sjetn">Voir tout l'agenda des meetups du numérique à Montpellier sur <strong>ical2api.web.app</strong></b-button>
      </article>
    </b-container>
  </section>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { ical2ApiURL } from '../constants'

moment.locale('fr')

export default {
  name: 'EventsContent',
  data () {
    return {
      events: [],
      eventsLoaded: false,
      eventsLoading: false,
      moment: moment
    }
  },
  computed: {
    ...mapGetters('meetups', {
      meetupsId: 'getMeetupsIdFromMeetupCom'
    })
  },
  beforeUpdate () {
    if (this.meetupsId.length > 0 && !this.eventsLoaded) {
      this.fetchEvents()
    }
  },
  mounted () {
    this.fetchEvents()
  },
  methods: {
    fetchEvents () {
      if (this.eventsLoading) return
      this.eventsLoading = true
      fetch(ical2ApiURL)
        .then(async response => {
          const events = await response.json()

          this.events = events.map(event => ({
            ...event,
            locationName: event.location ? event.location.substring(0, event.location.indexOf('(')) : ''
          }))
          this.eventsLoaded = true
          this.eventsLoading = false
        })
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 2rem;
    margin-top: 4rem;
  }
  h4 {
    padding-bottom: 0.5rem;
    color: #9734A2
  }
  article {
    margin-bottom: 6rem;
    text-align: center;
  }
  .list-group-item-action {
    text-align: left;
    border: none;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    -webkit-transition: background-color 200ms linear;
    -moz-transition: background-color 200ms linear;
    -o-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
  .list-group-item-action:focus, .list-group-item-action:hover {
    background: none;
  }

  .event_description { max-height: 300px; overflow: auto; color: #808080 }
  .event_time-venue { width: 20%; margin-right: 2rem; text-align: right }
  .event_time-venue h5 { margin-bottom: 0px; }
  .event_venue { margin-top: 2rem }
  .event_details { width: 80%; }
</style>

<style>
  .event_description img { display: none; }
</style>
