<template>
  <div class="form-column">
    <div class="form-column__left">
      <h3 class="form-title">Informations</h3>

      <b-form-input
          class="form"
          type="text"
          v-model="form.name"
          required
          placeholder="Name" />

      <b-form-textarea
          class="form"
          v-model="form.description"
          placeholder="Description de 3 lignes du meetup "
          rows="6"
          max-rows="6"/>
      Logo
      <b-form-input
          class="form"
          type="text"
          v-model="form.logo"
          placeholder="Lien vers un logo" />
      Status
      <b-form-select
        class="form"
        :options="status"
        required
        v-model="form.status" />

      <h3 class="form-title">Représentant</h3>
      <b-form-select
        class="form"
        :options="members"
        v-model="form.contact_member" />

    </div>
    <div class="form-column__right">
      <h3 class="form-title">Statistiques</h3>
      Nombre d'évènement en moyenne par an
      <b-form-input
          class="form"
          type="text"
          v-model="form.average_per_year"
          placeholder="Nombre d'évènement en moyenne par an" />
      Date du dernier évènement
      <Datepicker
        class="form"
        name="last-event"
        inputClassName="datepicker_input"
        placeholder="Date du dernier évènement"
        v-model="form.last_event_at"></Datepicker>

      <h3 class="form-title">Social</h3>
      Twitter
      <b-form-input
          class="form"
          type="text"
          v-model="form.twitter_link"
          placeholder="Url twitter" />
      Meetup.com url
      <b-form-input
          class="form"
          type="text"
          v-model="form.meetup_dot_link"
          placeholder="Url Meetup.com" />
      Nombre de membres sur meetup.com
      <b-form-input
          class="form"
          type="text"
          v-model="form.meetup_dot_members"
          placeholder="Nombre de membres sur meetup.com" />
      Meetup.com id
      <b-form-input
          class="form"
          type="text"
          v-model="form.meetup_dot_id"
          placeholder="Meetup.com id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

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
  data () {
    return {
      status: [
        { text: 'Sélectionner un status', value: null },
        { text: 'Actif', value: 'active' },
        { text: 'Inactif', value: 'inactive' },
        { text: 'En attente de validation', value: 'pending_validation' },
        { text: 'En attente de cotisation', value: 'pending_cotisation' }
      ]
    }
  },
  props: ['form']
}
</script>

<style>
@import './admin.css';
</style>
