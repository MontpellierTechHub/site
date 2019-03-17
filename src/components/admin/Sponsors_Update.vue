<template>
      <b-modal ref="SponsorsUpdateModalRef" @ok="onSubmit" :id="'modal_sponsors__update' + this.sponsor.id" scrollable title="Ajouter un sponsor">
      
      <b-form @submit="onSubmit" @reset="onReset">
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
    
    <p v-for="cotisation of this.sponsor.cotisations">
        {{cotisation.value}} € <span v-if="meetupsEntities[cotisation.meetup]"> pour {{meetupsEntities[cotisation.meetup].name}}</span> le {{moment(cotisation.created_at).format('DD/MM/YYYY')}} 
    </p>
     <a v-on:click="add_cotisation = true">Ajouter une cotisation</a>

    
    <div v-if="add_cotisation">
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
    <datepicker v-model="form.cotisation.date"></datepicker></div>

      </div>
    </b-form>
      
    </b-modal>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminSponsors_Update',
  components: {
    Datepicker
  },
  props: ['sponsor'],
  computed: {
    ...mapGetters('entities', {
      members: 'getMembersOptions',
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  data () {
    return {
      form: {
        name: this.sponsor.name,
        siret: this.sponsor.siret,
        address: this.sponsor.address,
        logo: this.sponsor.logo,
        contact: {
          name: this.sponsor.contact.name,
          email: this.sponsor.contact.email
        },
        contact_member: this.sponsor.contact_member,
        cotisation: {
          status: null,
          meetup: null,
          value: ''
        }
      },
      status_list: [{ text: 'Sélectionner un status', value: null }, 'Devis envoyé', 'Facture envoyé', 'Payé'],
      add_cotisation: false,
      moment: moment
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const newSponsor = {
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
      if (this.add_cotisation) {
        newSponsor.cotisations = [
          ...this.sponsor.cotisations,
          {
            status: this.form.cotisation.status,
            meetup: this.form.cotisation.meetup,
            value: this.form.cotisation.value,
            created_at: moment().format(),
            updated_at: moment().format()
          }
        ]
      }
      this.$store.dispatch('entities/updateSponsor', {...this.sponsor, ...newSponsor})
      this.$refs.SponsorsUpdateModalRef.hide()
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