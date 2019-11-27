<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-modal size="lg" ref="MembersAddModalRef" @ok="onSubmit" id="modal_members__add" title="Ajouter un membre">

      <Admin-members-form-inputs :form="form" />    
      
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" type="submit" variant="primary">Ajouter</b-button>
        <b-button class="float-right" type="reset" variant="default">Annuler</b-button>
      </div>
    </b-modal>
  </b-form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import { mapGetters } from 'vuex'
import AdminMembersFormInputs from '@/components/admin/Members_FormInputs'

const initialForm = () => {
  return {
    name: '',
    email: '',
    cotisation: {
      meetup: null,
      value: 40,
      date: null
    }
  }
}

export default {
  name: 'AdminMembers_Add',
  components: {
    Datepicker,
    AdminMembersFormInputs
  },
  computed: {
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions'
    })
  },
  data () {
    return {
      form: initialForm(),
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const member = {
        name: this.form.name,
        email: this.form.email
      }
      if (this.form.cotisation.meetup) {
        member.cotisations = [
          {
            meetup: this.form.cotisation.meetup,
            value: this.form.cotisation.value,
            created_at: moment(this.form.cotisation.date).format()
          }
        ]
      }

      this.$store.dispatch('members/addMember', member)
      this.form = initialForm()
      this.$refs.MembersAddModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm()
      this.$refs.MembersAddModalRef.hide()
    }
  }
}
</script>
