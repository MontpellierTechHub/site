<template>
    <div>
      <div class="form-column">
        <div class="form-column__left">

        <h3 class="form-title">Informations</h3>
          <b-form-input
            class="form"
            type="text"
            v-model="form.name"
            required
            placeholder="Nom du sponsor" />

          <b-form-input
            class="form"
            type="text"
            v-model="form.siret"
            required
            placeholder="SIRET" />

          <b-form-input
            class="form"
            type="text"
            v-model="form.address"
            required
            placeholder="Addresse du siège" />

          <b-form-input
            class="form"
            type="text"
            v-model="form.logo"
            required
            placeholder="Url du logo" />

          <b-form-input
            class="form"
            type="text"
            v-model="form.url_website"
            required
            placeholder="Url du site web" />

          <b-form-select class="form" :options="status" required v-model="form.status" />

        </div>
        <div class="form-column__right">

        <h3 class="form-title">Contact sponsor</h3>
          <b-form-input
            class="form"
            type="text"
            v-model="form.contact.name"
            required
            placeholder="Prénom Nom" />

          <b-form-input
            class="form"
            type="email"
            v-model="form.contact.email"
            required
            placeholder="Email" />

          <b-form-input
            class="form"
            type="text"
            v-model="form.contact.phone"
            placeholder="Téléphone" />

      <h3 class="form-title">Contact MTH</h3>

      <b-form-select
        class="form"
        :options="members"
        required
        v-model="form.contact_member" />

        </div>
      </div>

      <div class="form-column">
        <div class="form-column__left">
        <h3 class="form-title">Sponsoring</h3>
          <div v-if="editing && sponsor">
              <p v-for="cotisation of sponsor.cotisations" v-bind:key="cotisation.id">
              {{cotisation.value}} € <span v-if="meetupsEntities[cotisation.meetup]"> pour {{meetupsEntities[cotisation.meetup].name}}</span> le {{moment(cotisation.created_at).format('DD/MM/YYYY')}}
              </p>
          </div>
          <a v-if="editing && !add_cotisation" v-on:click="add_cotisation = true">Ajouter un paiement</a>

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
              <Datepicker
              class="form"
              inputClassName="datepicker_input"
              placeholder="Date de paiement"
              v-model="form.cotisation.payed_at"></Datepicker>
          </div>
        </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import { mapGetters } from 'vuex'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

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
  }
}
</script>

<style>
@import './admin.css';
</style>
