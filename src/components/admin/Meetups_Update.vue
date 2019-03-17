<template>
  <b-form @submit="onSubmit" @reset="onReset">
      <b-modal ref="MeetupsAddModalRef" :id="'modal_meetups__update' + this.meetup.id" scrollable title="Ajouter un meetup">
    
        <admin-meetups-form-inputs :form="form"/>
   
        
             
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" type="submit" variant="primary">Submit</b-button>
        <b-button class="float-right" type="reset" variant="default">Cancel</b-button>
      </div>
    </b-modal>
    </b-form>

</template>

<script>
import AdminMeetupsFormInputs from '@/components/admin/Meetups_FormInputs'

export default {
  name: 'AdminMeetups_Update',
  components: {
    AdminMeetupsFormInputs
  },
  props: ['meetup'],
  data () {
    return {
      form: {
        name: this.meetup.name,
        description: this.meetup.description,
        contact_member: this.meetup.contact_member,
        display_on_home: this.meetup.display_on_home,
        active: this.meetup.active,
        logo: this.meetup.logo,
        twitter_link: this.meetup.twitter_link,
        average_per_year: this.meetup.average_per_year,
        meetup_dot_link: this.meetup.meetup_dot_link,
        meetup_dot_members: this.meetup.meetup_dot_members,
        meetup_dot_id: this.meetup.meetup_dot_id
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const meetup = {
        name: this.form.name,
        description: this.form.description,
        logo: this.form.logo,
        contact_member: this.form.contact_member,
        display_on_home: this.form.display_on_home,
        active: this.form.active,
        twitter_link: this.form.twitter_link,
        average_per_year: this.form.average_per_year,
        meetup_dot_link: this.form.meetup_dot_link,
        meetup_dot_members: this.form.meetup_dot_members,
        meetup_dot_id: this.form.meetup_dot_id
      }
      this.$store.dispatch('entities/updateMeetup', {...this.meetup, ...meetup})
      this.$refs.MeetupsAddModalRef.hide()
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
