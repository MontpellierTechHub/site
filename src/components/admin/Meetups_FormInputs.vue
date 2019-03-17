<template>
  <div>
    
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
            required
            placeholder="Lien vers un logo" />
       
      
        <b-form-select 
          class="form" 
          id="meetup-contact-mth" 
          :options="members" 
          required 
          v-model="form.contact_member" />
        
        <div class="d-flex">
            <b-form-checkbox
                class="form" 
                id="meetup-display_home"
                name="meetup-display_home"
                v-model="form.display_on_home"
                value="true"
                unchecked-value="false"
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
        
        
        <b-form-input
            class="form"
            id="meetup-meetup_twitter"
            type="text"
            v-model="form.twitter_link"
            placeholder="Lien vers twitter" />
        <b-form-input
            class="form"
            id="meetup-average_per_year"
            type="text"
            v-model="form.average_per_year"
            required
            placeholder="Nombre de meetup en moyenne par an" />

        <h3>Meetup.com</h3>
        <b-form-input
            class="form"
            id="meetup-meetup_dot_link"
            type="text"
            v-model="form.meetup_dot_link"
            required
            placeholder="Lien vers Meetup.com" />
        <b-form-input
            class="form"
            id="meetup-meetup_dot_members"
            type="text"
            v-model="form.meetup_dot_members"
            required
            placeholder="Nombre de membres sur meetup.com" />
        <b-form-input
            class="form"
            id="meetup-meetup_dot_id"
            type="text"
            v-model="form.meetup_dot_id"
            required
            placeholder="Meetup.com id" />

      
     </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AdminMeetups_FormInputs',
  computed: {
    ...mapGetters('entities', {
      members: 'getMembersOptions'
    })
  },
  props: ['form']
}
</script>

<style>
@import './admin.css';
</style>
