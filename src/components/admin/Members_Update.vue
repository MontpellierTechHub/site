<template>
    <b-modal size="xl" @ok="onSubmit" ref="modal" :id="'modal_members__update' + this.member.id" scrollable title="Editer un membre">

      <b-form @submit="onSubmit">
      
        <b-form-group
            id="member-contact-name"
            label-for="member-contact-name"
        >
            <b-form-input
            id="member-contact-name"
            type="text"
            v-model="form.name"
            required
            placeholder="Prénom Nom" />
        </b-form-group>
        <b-form-group
            id="member-contact-email"
            label-for="member-contact-email"
        >
            <b-form-input
            id="member-contact-email"
            type="email"
            v-model="form.email"
            required
            placeholder="Email" />
        </b-form-group>

        <h3>Cotisations</h3>
        <p v-for="cotisation of this.member.cotisations">
            {{cotisation.value}} € <span v-if="meetupsEntities[cotisation.meetup]"> pour {{meetupsEntities[cotisation.meetup].name}}</span> le {{moment(cotisation.created_at).format('DD/MM/YYYY')}} 
        </p>

        <a v-on:click="add_cotisation = true">Ajouter une cotisation</a>

      <div v-if="add_cotisation"><b-form-group id="member-cotisation-meetup">
        <b-form-select id="member-cotisation-meetup" :options="meetups" required v-model="form.cotisation.meetup" />
      </b-form-group>

      <b-form-group id="member-cotisation-value">
        <b-form-input
          id="member-cotisation-value"
          type="text"
          v-model="form.cotisation.value"
          required
          placeholder="Valeur (en Euros)" />
      </b-form-group>

        <datepicker v-model="form.cotisation.date"></datepicker></div>


      </b-form>
    </b-modal>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminMembers_Update',
  components: {
    Datepicker
  },
  props: ['member'],

  computed: {
    ...mapGetters('entities', {
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  data () {
    return {
      form: {
        name: this.member.name,
        email: this.member.email,
        cotisation: {
          meetup: '',
          date: '',
          value: ''
        }
      },
      moment: moment,
      add_cotisation: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const newMember = {
        name: this.form.name,
        email: this.form.email
      }
      if (this.add_cotisation) {
        newMember.cotisations = [
          ...this.member.cotisations,
          {
            meetup: this.form.cotisation.meetup,
            value: this.form.cotisation.value,
            created_at: moment(this.form.cotisation.date).format()
          }
        ]
      }

      this.$store.dispatch('entities/updateMember', {...this.member, ...newMember})
      this.$nextTick(() => {
        this.add_cotisation = false
        this.$refs.modal.hide()
      })
    }
  }
}
</script>
