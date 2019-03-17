<template>

      <b-modal ref="MembersAddModalRef" @ok="onSubmit" id="modal_members__add" scrollable title="Ajouter un membre">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
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


    <h3>Cotisation</h3>
    

      <b-form-group id="member-cotisation-meetup">
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

        <datepicker v-model="form.cotisation.date"></datepicker>

      
    </b-form>
      
      </b-modal>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminMembers_Add',
  components: {
    Datepicker
  },
  computed: {
    ...mapGetters('entities', {
      meetups: 'getMeetupsOptions'
    })
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        cotisation: {
          meetup: null,
          value: '40',
          date: moment().format()
        }
      },
      show: true
    }
  },

  // mounted () {
  //   getMeetups().then(result => {
  //     result.map(meetup => this.meetups.push({text: meetup.name, value: meetup.id}))
  //   })
  // },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const member = {
        name: this.form.name,
        email: this.form.email,
        cotisations: [{
          meetup: this.form.cotisation.meetup,
          value: this.form.cotisation.value,
          created_at: moment(this.form.cotisation.date).format()
        }]
      }

      this.$store.dispatch('entities/addMember', member)
      this.$refs.MembersAddModalRef.hide()
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
