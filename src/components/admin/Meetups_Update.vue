<template>
  <b-modal size="lg" ref="MeetupsAddModalRef" :id="'modal_meetups__update' + this.meetup.id" title="Ajouter un meetup" hide-footer>
    <b-form @submit="onSubmit" @reset="onReset">

      <admin-meetups-form-inputs :form="form" :id="'input_meetups__update' + this.meetup.id"/>

      <div slot="modal-footer" class="w-100">
        <b-button class="float-left" type="button" v-on:click="onDelete" variant="danger">Supprimer</b-button>
        <b-button class="float-right" type="submit" variant="primary">Editer</b-button>
        <b-button class="float-right" type="reset" v-on:click="onReset" variant="default">Annuler</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import AdminMeetupsFormInputs from './Meetups_FormInputs.vue'
import moment from 'moment'

const initialForm = (meetup) => {
  return {
    id: meetup.id,
    name: meetup.name,
    description: meetup.description,
    contact_member: meetup.contact_member,
    last_event_at: meetup.last_event_at,
    logo: meetup.logo,
    twitter_link: meetup.twitter_link,
    average_per_year: meetup.average_per_year,
    meetup_dot_link: meetup.meetup_dot_link,
    meetup_dot_members: meetup.meetup_dot_members,
    meetup_dot_id: meetup.meetup_dot_id,
    status: meetup.status
  }
}

export default {
  name: 'AdminMeetups_Update',
  components: {
    AdminMeetupsFormInputs
  },
  props: ['meetup'],
  data () {
    return {
      form: initialForm(this.meetup)
    }
  },
  mounted () {
    this.$root.$on('bv::modal::show', () => {
      this.form = initialForm(this.meetup)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const meetup = {
        name: this.form.name,
        description: this.form.description,
        logo: this.form.logo,
        contact_member: this.form.contact_member,
        last_event_at: this.form.last_event_at ? moment(this.form.last_event_at).format() : null,
        twitter_link: this.form.twitter_link,
        average_per_year: this.form.average_per_year,
        meetup_dot_link: this.form.meetup_dot_link,
        meetup_dot_members: this.form.meetup_dot_members,
        meetup_dot_id: this.form.meetup_dot_id,
        status: this.form.status
      }
      this.$store.dispatch('meetups/updateMeetup', { ...this.meetup, ...meetup })
      this.form = initialForm(this.meetup)
      this.$refs.MeetupsAddModalRef.hide()
    },
    onDelete (evt) {
      evt.preventDefault()
      this.$store.dispatch('meetups/updateMeetup', { ...this.meetup, deleted_at: moment().format() })
      this.form = initialForm(this.meetup)
      this.$refs.MeetupsAddModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm(this.meetup)
      this.$refs.MeetupsAddModalRef.hide()
    }
  }
}
</script>

<style>
@import './admin.css';
</style>
