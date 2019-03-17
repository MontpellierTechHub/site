<template>
      <b-modal ref="SponsorsAddModalRef" @ok="onSubmit" id="modal_sponsors__add" scrollable title="Ajouter un sponsor">
      
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
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

      <h3>Contact sponsor</h3>
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
          required
          placeholder="Téléphone" />


      <h3>Contact MTH</h3>
      
      <b-form-select 
        class="form" 
        id="sponsor-contact-mth" 
        :options="members" 
        required 
        v-model="form.contact_member" />

      <h3>Sponsoring</h3>
    
      <b-form-select class="form" id="sponsoring-cotisation-status" :options="status_list" required v-model="form.cotisation.status" />
      
      <b-form-select  class="form" id="sponsoring-cotisation-meetup" :options="meetups" required v-model="form.cotisation.meetup" />

        <b-form-input
          class="form"
          id="sponsor-cotisation-value"
          type="text"
          v-model="form.cotisation.value"
          required
          placeholder="Valeur (en Euros)" />
    </b-form>
      
    </b-modal>
</template>

<script>

import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminSponsors_Add',
  computed: {
    ...mapGetters('entities', {
      members: 'getMembersOptions',
      meetups: 'getMeetupsOptions'
    })
  },
  data () {
    return {
      form: {
        name: '',
        siret: '',
        address: '',
        logo: '',
        contact: {
          name: '',
          email: ''
        },
        contact_member: null,
        cotisation: {
          status: null,
          meetup: null,
          value: ''
        }
      },
      status_list: [{ text: 'Sélectionner un status', value: null }, 'Devis envoyé', 'Facture envoyé', 'Payé'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const sponsor = {
        name: this.form.name,
        siret: this.form.siret,
        address: this.form.address,
        logo: this.form.logo,
        contact: {
          name: this.form.contact.name,
          email: this.form.contact.email
        },
        contact_member: this.form.contact_member,
        cotisations: [{
          status: this.form.cotisation.status,
          meetup: this.form.cotisation.meetup,
          value: this.form.cotisation.value,
          created_at: moment().format(),
          updated_at: moment().format()
        }]
      }
      this.$store.dispatch('entities/addSponsor', sponsor)
      this.$refs.SponsorsAddModalRef.hide()
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