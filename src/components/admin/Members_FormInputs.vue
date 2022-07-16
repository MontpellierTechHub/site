<template>
  <div class="form-column">
    <div class="form-column__left">
      <h3 class="form-title">Informations</h3>
      <b-form-input
      class="form"
      type="text"
      v-model="form.name"
      required
      placeholder="Prénom Nom" />

      <b-form-input
      class="form"
      type="email"
      v-model="form.email"
      required
      placeholder="Email" />
    </div>
    <div class="form-column__right">
      <h3 class="form-title">Cotisations</h3>

      <div v-if="member">
          <p v-for="cotisation of member.cotisations" v-bind:key="cotisation.id">
              {{cotisation.value}} € <span v-if="meetupsEntities[cotisation.meetup]"> pour {{meetupsEntities[cotisation.meetup].name}}</span> le {{moment(cotisation.created_at).format('DD/MM/YYYY')}}
          </p>
      </div>

      <span class="link" v-if="!add_cotisation" v-on:click="add_cotisation = true">Ajouter une cotisation</span>

      <div v-if="add_cotisation">
          <b-form-select class="form"  :options="meetups" v-model="form.cotisation.meetup" />
          <b-form-input
          class="form"
          type="text"
          v-model="form.cotisation.value"
          placeholder="Valeur (en Euros)" />


          <Datepicker
          v-model="form.cotisation.date"
          inputClassName="datepicker_input"
          placeholder="Date de paiement" >
          </Datepicker>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment'

export default {
  name: 'AdminMembers_FormInputs',
  components: {
    Datepicker
  },
  props: ['form', 'member', 'editing'],
  computed: {
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  data () {
    return {
      moment: moment,
      add_cotisation: false
    }
  }
}
</script>
