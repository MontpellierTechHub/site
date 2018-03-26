<template>
  <section class="HomeAbout">
    <b-container>
      <h1 class="text-center">Prochains événements</h1>
      <article>
        <b-list-group>
          <b-list-group-item v-for="event of events" :key="event.eventId" :href="event.link" target="_blank" class="d-flex">
            <div class="event_time-venue">
              <div class="event_time">
                <h5>{{moment(event.plannedAt).format("dddd DD MMMM")}}</h5>
                <span>{{moment(event.plannedAt).format("à HH:mm")}}</span>
              </div>
              <div class="event_venue" v-if="event.venueName">
                <h5>{{event.venueName}}</h5>
                <p>{{event.venueAddress}}</p>
              </div>
            </div>
            <div class="event_details">
              <div class="d-flex w-100 justify-content-between">
                <h6>{{ event.groupName }}</h6>
                <small>{{event.numberOfMembers}} inscrits <span v-if="event.limitOfMembers">(max: {{event.limitOfMembers}})</span></small>
              </div>
              <h4 class="mb-1">{{ event.name }}</h4>
              <p class="mb-1 event_description" v-html="event.description"></p>
            </div>
          </b-list-group-item>
        </b-list-group>
      </article>
      <article>
        <b-button variant="outline-secondary" target="_blank" href="https://techmeetups.fr/">Voir tout l'agenda des meetups du numérique à Montpellier sur <strong>techmeetups.fr</strong></b-button>
      </article>
    </b-container>
  </section>
</template>

<script>
import meetups from '@/assets/meetups.json'
import moment from 'moment'

moment.locale('fr')

export default {
  name: 'EventsContent',
  data () {
    return {
      events: [],
      moment: moment
    }
  },
  mounted () {
    const groupIds = meetups.map(meetup => meetup.meetup_id)
    fetch(`https://techmeetups.fr/api/events?group_ids=${groupIds.join()}`)
      .then(async response => {
        const results = await response.json()
        this.events = results.events
      })
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
