<template>
    <div>
      
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="sponsor-name"
        label-for="sponsor-name"
      >
        <b-form-input
          id="sponsor-name"
          type="text"
          v-model="form.name"
          required
          placeholder="Nom du sponsor" />
      </b-form-group>
      <b-form-group
        id="sponsor-siret"
        label-for="sponsor-siret"
      >
        <b-form-input
          id="sponsor-siret"
          type="text"
          v-model="form.siret"
          required
          placeholder="SIRET" />
      </b-form-group>
      <b-form-group
        id="sponsor-address"
        label-for="sponsor-address"
      >
        <b-form-input
          id="sponsor-address"
          type="text"
          v-model="form.address"
          required
          placeholder="Addresse du siège" />
      </b-form-group>
      <b-form-group
        id="sponsor-logo"
        label-for="sponsor-logo"
      >
        <b-form-input
          id="sponsor-logo"
          type="text"
          v-model="form.logo"
          required
          placeholder="Url du logo" />
      </b-form-group>

      <h3>Contact sponsor</h3>
      <b-form-group
        id="sponsor-contact-name"
        label-for="sponsor-contact-name"
      >
        <b-form-input
          id="sponsor-contact-name"
          type="text"
          v-model="form.contact.name"
          required
          placeholder="Prénom Nom" />
      </b-form-group>
      <b-form-group
        id="sponsor-contact-email"
        label-for="sponsor-contact-email"
      >
        <b-form-input
          id="sponsor-contact-email"
          type="email"
          v-model="form.contact.email"
          required
          placeholder="Email" />
      </b-form-group>
      <b-form-group
        id="sponsor-contact-phone"
        label-for="sponsor-contact-phone"
      >
        <b-form-input
          id="sponsor-contact-phone"
          type="text"
          v-model="form.contact.phone"
          required
          placeholder="Téléphone" />
      </b-form-group>


    <h3>Contact MTH</h3>
      
      <b-form-group id="sponsor-contact-mth">
        <b-form-select id="sponsor-contact-mth" :options="members" required v-model="form.contact_member" />
      </b-form-group>

    <h3>Sponsoring</h3>
    
      <b-form-group id="sponsoring-cotisation-status">
        <b-form-select id="sponsoring-cotisation-status" :options="status_list" required v-model="form.cotisation.status" />
      </b-form-group>

      <b-form-group id="sponsoring-cotisation-meetup">
        <b-form-select id="sponsoring-cotisation-meetup" :options="meetups" required v-model="form.cotisation.meetup" />
      </b-form-group>

      <b-form-group id="sponsoring-cotisation-value">
        <b-form-input
          id="sponsor-cotisation-value"
          type="text"
          v-model="form.cotisation.value"
          required
          placeholder="Valeur (en Euros)" />
      </b-form-group>
      <div slot="modal-footer" class="w-100">
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
      
    </div>
</template>

<script>

import {getMeetups, getMembers, addSponsor, addSponsorCotisation} from '../../firebase'
import moment from 'moment'

export default {
  name: 'AdminSponsors_Add',
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
      members: [{ text: 'Sélectionner un membre', value: null }],
      meetups: [{ text: 'Sélectionner un meetup', value: null }],
      show: true
    }
  },
  mounted () {
    getMeetups().then(result => {
      result.map(meetup => this.meetups.push({text: meetup.name, value: meetup.id}))
    })
    getMembers().then(result => {
      result.map(member => this.members.push({text: member.name, value: member.id}))
    })
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
        contact_member: this.form.contact_member
      }
      const cotisation = {
        status: this.form.cotisation.status,
        meetup: this.form.cotisation.meetup,
        value: this.form.cotisation.value,
        created_at: moment().format(),
        updated_at: moment().format()
      }

      addSponsorCotisation(cotisation).then(snapshot => {
        addSponsor({...sponsor, active_cotisation: snapshot.id, cotisations: [snapshot.id]})
      })
        // addSponsor()
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