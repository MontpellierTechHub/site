<template>
  <b-form @submit="onSubmit" @reset="onReset">
      <b-modal ref="MeetupsAddModalRef" id="modal_meetups__add" scrollable title="Ajouter un meetup">
    
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

   
        
             
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" type="submit" variant="primary">Submit</b-button>
        <b-button class="float-right" type="reset" variant="default">Cancel</b-button>
      </div>
    </b-modal>
    </b-form>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AdminMeetups_Add',
  computed: {
    ...mapGetters('entities', {
      members: 'getMembersOptions'
    })
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        contact_member: null,
        display_on_home: true,
        active: true,
        logo: '',
        twitter_link: '',
        average_per_year: '',
        meetup_dot_link: '',
        meetup_dot_members: '',
        meetup_dot_id: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const meetup = {
        name: this.form.name,
        description: this.form.description,
        logo: this.form.logo,
        contact_member: this.form.contact_member,
        display_on_home: this.form.display_on_home,
        active: this.form.active,
        twitter_link: this.form.twitter_link,
        average_per_year: this.form.average_per_year,
        meetup_dot_link: this.form.meetup_dot_link,
        meetup_dot_members: this.form.meetup_dot_members,
        meetup_dot_id: this.form.meetup_dot_id
      }

      this.$store.dispatch('entities/addMeetup', meetup)
      this.$refs.MeetupsAddModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
@import './admin.css';
</style>
