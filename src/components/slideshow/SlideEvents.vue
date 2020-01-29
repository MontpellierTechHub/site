<template>
  <section class="section" data-background-image="/static/images/background-slideshow-header.jpg">
    <h3 class="title">EVENTS</h3>

    <b-row>
      <b-col sm="12" md="6" v-for="event of events" :key="event.id" :href="event.url" target="_blank" class="events">
        <h6 class="meetupName">{{ event.icalName }}</h6>
        <h4 class="eventName">{{ event.title }}</h4>
        <p class="detail"><i class="fa fa-clock fa-3x"></i>{{moment(event.startDate).format('dddd DD MMMM à HH:mm')}}</p>
        <p class="detail"><i class="fa fa-map-marker fa-3x"></i>{{event.locationName}}</p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
  import { ical2ApiURL } from '../../constants'
  import moment from 'moment'

  export default {
    name: 'SlideEvents',
    data () {
      return {
        events: [],
        eventsLoaded: false,
        moment: moment
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
              locationName: event.location ? event.location.substring(0, event.location.indexOf('(')) : ''
            }))
            this.events.push({
              id: 'JOAK4p5t50g5j7SIDQc9+event_268035076@meetup.com22',
              icalId: 'JOAK4p5t50g5j7SIDQc9',
              description: 'Montpellier DevOps↵Wednesday, January 29 at 7:00 PM↵↵Meilleurs voeux à tous ! Nous commencerons cette décénie par un sujet sur les unikernels par Arnaud Tourier (https://twitter.com/ltearno) ! Venez déco...↵↵https://www.meetup.com/Montpellier-DevOps/events/268035076/',
              endDate: 1580328000000,
              url: 'https://www.meetup.com/Montpellier-DevOps/events/268035076/',
              icalFileId: 'event_268035076@meetup.com',
              organizationId: '9Y6UMiuKiWTyu12Sjetn',
              title: 'DevOps #9 : Voyage au pays merveilleux des unikernels',
              location: 'Teads - Montpellier (159 Rue de Thor, Montpellier, France 34000)',
              crawldAt: Object,
              icalName: 'DevOps Montpellier',
              durationInMinutes: 120,
              startDate: 1580320800000,
              locationName: 'Teads - Montpellier '
            })

            this.events.push({
              id: 'JOAK4p5t50g5j7SIDQc9+event_268035076@meetup.com33',
              icalId: 'JOAK4p5t50g5j7SIDQc9',
              description: 'Montpellier DevOps↵Wednesday, January 29 at 7:00 PM↵↵Meilleurs voeux à tous ! Nous commencerons cette décénie par un sujet sur les unikernels par Arnaud Tourier (https://twitter.com/ltearno) ! Venez déco...↵↵https://www.meetup.com/Montpellier-DevOps/events/268035076/',
              endDate: 1580328000000,
              url: 'https://www.meetup.com/Montpellier-DevOps/events/268035076/',
              icalFileId: 'event_268035076@meetup.com',
              organizationId: '9Y6UMiuKiWTyu12Sjetn',
              title: 'DevOps #9 : Voyage au pays merveilleux des unikernels',
              location: 'Teads - Montpellier (159 Rue de Thor, Montpellier, France 34000)',
              crawldAt: Object,
              icalName: 'DevOps Montpellier',
              durationInMinutes: 120,
              startDate: 1580320800000,
              locationName: 'Teads - Montpellier '
            })
            console.log(this.events)
            this.eventsLoaded = true
          })
      }
    }
  }
</script>

<style scoped>
  .section {
    padding: 0 !important;
  }

  .title {
    color: white;
    margin-bottom: 6rem;
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
