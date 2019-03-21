<template>
  <div class="form-column">
    <div class="form-column__left">
      <h3 class="form-title">Informations</h3>
    
      <b-form-input
          class="form"
          id="meetup-name"
          type="text"
          v-model="form.name"
          required
          placeholder="Name" />
      
      <b-form-textarea
          class="form"
          id="meetup-description"
          v-model="form.description"
          placeholder="Description de 3 lignes du meetup "
          rows="3"
          max-rows="6"/>

      <b-form-input
          class="form"
          id="meetup-logo"
          type="text"
          v-model="form.logo"
          placeholder="Lien vers un logo" />

      <div class="d-flex">
          <b-form-checkbox
              class="form checkbox" 
              id="meetup-display_home"
              name="meetup-display_home"
              v-model="form.display_on_home"
              >
                  Afficher sur la page d'accueil
              </b-form-checkbox>
          <b-form-checkbox
              class="form" 
              id="meetup-active"
              name="meetup-active"
              v-model="form.active"
              value="true"
              unchecked-value="false"
              >
                  Meetup actif
              </b-form-checkbox>
      </div>

      <h3 class="form-title">Représentant</h3>
      <b-form-select 
        class="form" 
        id="meetup-contact-mth" 
        :options="members" 
        required 
        v-model="form.contact_member" />

    </div>
    <div class="form-column__right">  
      <h3 class="form-title">Statistiques</h3>
      <b-form-input
          class="form"
          id="meetup-average_per_year"
          type="text"
          v-model="form.average_per_year"
          placeholder="Nombre d'évènement en moyenne par an" />
      <datepicker 
        class="form" 
        name="last-event" 
        input-class="datepicker_input" 
        placeholder="Date du dernier évènement" 
        v-model="form.last_event_at"></datepicker>

      <h3 class="form-title">Social</h3>
      <b-form-input
          class="form"
          id="meetup-meetup_twitter"
          type="text"
          v-model="form.twitter_link"
          placeholder="Url twitter" />
      <b-form-input
          class="form"
          id="meetup-meetup_dot_link"
          type="text"
          v-model="form.meetup_dot_link"
          placeholder="Url Meetup.com" />
      <b-form-input
          class="form"
          id="meetup-meetup_dot_members"
          type="text"
          v-model="form.meetup_dot_members"
          placeholder="Nombre de membres sur meetup.com" />
      <b-form-input
          class="form"
          id="meetup-meetup_dot_id"
          type="text"
          v-model="form.meetup_dot_id"
          placeholder="Meetup.com id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'AdminMeetups_FormInputs',
  components: {
    Datepicker
  },
  computed: {
    ...mapGetters('members', {
      members: 'getMembersOptions'
    })
  },
  props: ['form']
}
</script>

<style>
@import './admin.css';
</style>
