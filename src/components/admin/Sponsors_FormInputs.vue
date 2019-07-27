<template>
    <div>
      <div class="form-column">
        <div class="form-column__left">

        <h3 class="form-title">Informations</h3>
          <b-form-input
            class="form"
            id="sponsor-name"
            type="text"
            v-model="form.name"
            required
            placeholder="Nom du sponsor" />
        
          <b-form-input
            class="form"
            id="sponsor-siret"
            type="text"
            v-model="form.siret"
            required
            placeholder="SIRET" />

          <b-form-input
            class="form"
            id="sponsor-address"
            type="text"
            v-model="form.address"
            required
            placeholder="Addresse du siège" />
            
          <b-form-input
            class="form"
            id="sponsor-logo"
            type="text"
            v-model="form.logo"
            required
            placeholder="Url du logo" />

        <div>

          <ul>
    <!-- <li v-for="file in files">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li> -->
  </ul>
  
        </div>



          <b-form-input
            class="form"
            id="sponsor-logo"
            type="text"
            v-model="form.url_website"
            required
            placeholder="Url du site web" />
          
          <b-form-select class="form" id="sponsor-status" :options="status" required v-model="form.status" />

        </div>
        <div class="form-column__right">

        <h3 class="form-title">Contact sponsor</h3>
          <b-form-input
            class="form"
            id="sponsor-contact-name"
            type="text"
            v-model="form.contact.name"
            required
            placeholder="Prénom Nom" />

          <b-form-input
            class="form"
            id="sponsor-contact-email"
            type="email"
            v-model="form.contact.email"
            required
            placeholder="Email" />
            
          <b-form-input
            class="form"
            id="sponsor-contact-phone"
            type="text"
            v-model="form.contact.phone"
            placeholder="Téléphone" />

      <h3 class="form-title">Contact MTH</h3>
      
      <b-form-select 
        class="form" 
        id="sponsor-contact-mth" 
        :options="members" 
        required 
        v-model="form.contact_member" />

        </div>
      </div>

      <div class="form-column">
        <div class="form-column__left">
        <h3 class="form-title">Sponsoring</h3>
          <div v-if="editing && sponsor">
              <p v-for="cotisation of sponsor.cotisations">
              {{cotisation.value}} € <span v-if="meetupsEntities[cotisation.meetup]"> pour {{meetupsEntities[cotisation.meetup].name}}</span> le {{moment(cotisation.created_at).format('DD/MM/YYYY')}} 
              </p>
          </div>
          <a v-if="editing && !add_cotisation" v-on:click="add_cotisation = true">Ajouter une cotisation</a>

      
          <div v-if="!editing || (editing && add_cotisation)">
              <b-form-select class="form" id="sponsoring-cotisation-status" :options="cotisation_status_list" required v-model="form.cotisation.status" />
              <b-form-select class="form" id="sponsoring-cotisation-meetup" :options="meetups" required v-model="form.cotisation.meetup" />
              <b-form-input
              class="form"
              id="sponsor-cotisation-value"
              type="text"
              v-model="form.cotisation.value"
              required
              placeholder="Valeur (en Euros)" />
              <datepicker 
              class="form" 
              input-class="datepicker_input" 
              placeholder="Date de paiement" 
              v-model="form.cotisation.payed_at"></datepicker>
          </div>
        </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'AdminSponsors_FormInputs',
  components: {
    Datepicker
  },
  computed: {
    ...mapGetters('members', {
      members: 'getMembersOptions'
    }),
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  props: ['form', 'sponsor', 'editing'],
  data () {
    return {
      files: [],
      moment: moment,
      cotisation_status_list: [{ text: 'Sélectionner un status', value: null }, 'Devis envoyé', 'Facture envoyé', 'Payé'],
      add_cotisation: false,
      status: [
        { text: 'Sélectionner un status', value: null },
        { text: 'Actif', value: 'active' },
        { text: 'Inactif', value: 'inactive' }
      ]
    }
  },
  methods: {
    inputFile: function (newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // Get response data
        console.log('response', newFile.response)
        if (newFile.xhr) {
          //  Get the response status code
          console.log('status', newFile.xhr.status)
        }
      }
    },
    inputFilter: function (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
      }

      // Create a blob field
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    }
  }
}
</script>


<style>
@import './admin.css';
</style>