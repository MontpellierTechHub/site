<template>
  <b-form @submit="onSubmit" @reset="onReset">
      <b-modal size="lg" @shown="clear" ref="MeetupsAddModalRef" id="modal_meetups__add" title="Ajouter un meetup">
    
        <admin-meetups-form-inputs :form="form"/>
             
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" type="submit" variant="primary">Ajouter</b-button>
        <b-button class="float-right" type="reset" variant="default">Annuler</b-button>
      </div>
    </b-modal>
    </b-form>

</template>

<script>
import AdminMeetupsFormInputs from '@/components/admin/Meetups_FormInputs'
import { mapGetters } from 'vuex'
import moment from 'moment'

const initialForm = () => {
  return {
    name: '',
    description: '',
    contact_member: null,
    last_event_at: null,
    logo: '',
    twitter_link: '',
    average_per_year: '',
    meetup_dot_link: '',
    meetup_dot_members: '',
    meetup_dot_id: '',
    status: null
  }
}

export default {
  name: 'AdminMeetups_Add',
  components: {
    AdminMeetupsFormInputs
  },
  computed: {
    ...mapGetters('members', {
      members: 'getMembersOptions'
    })
  },
  data () {
    return {
      form: initialForm()
    }
  },
  methods: {
    clear () {
      this.form = initialForm()
    },
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

      this.$store.dispatch('meetups/addMeetup', meetup)
      this.form = initialForm()
      this.$refs.MeetupsAddModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm()
      this.$refs.MeetupsAddModalRef.hide()
    }
  }
}
</script>

<style>
@import './admin.css';
</style>
