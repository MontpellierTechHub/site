<template>
  <b-form @submit="onSubmit">
    <b-modal size="lg" @ok="onSubmit" ref="modal" :id="'modal_members__update' + this.member.id" title="Editer un membre">
      <Admin-members-form-inputs :form="form" :member="this.member" editing="true"/>

      <div slot="modal-footer" class="w-100">
        <b-button class="float-left" type="button" v-on:click="onDelete" variant="danger">Supprimer</b-button>
        <b-button class="float-right" type="submit" variant="primary">Editer</b-button>
        <b-button class="float-right" type="reset" v-on:click="onReset" variant="default">Annuler</b-button>
      </div>
    </b-modal>
  </b-form>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import AdminMembersFormInputs from '@/components/admin/Members_FormInputs'

const initialForm = (member) => {
  return {
    name: member.name,
    email: member.email,
    cotisation: {
      meetup: null,
      value: 40,
      date: null
    }
  }
}

export default {
  name: 'AdminMembers_Update',
  components: {
    AdminMembersFormInputs
  },
  props: ['member'],

  computed: {
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  data () {
    return {
      form: initialForm(this.member),
      moment: moment,
      add_cotisation: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const newMember = {
        name: this.form.name,
        email: this.form.email,
        cotisations: this.member.cotisations ? this.member.cotisations.slice(0) : []
      }
      if (this.form.cotisation.meetup) {
        newMember.cotisations.push(
          {
            meetup: this.form.cotisation.meetup,
            value: this.form.cotisation.value,
            created_at: moment(this.form.cotisation.date).format()
          })
      }

      this.$store.dispatch('members/updateMember', { id: this.member.id, ...newMember })
      this.$nextTick(() => {
        this.form = initialForm(this.member)
        this.add_cotisation = false
        this.$refs.modal.hide()
      })
    },
    onDelete (evt) {
      evt.preventDefault()
      this.$store.dispatch('members/updateMember', { id: this.member.id, deleted_at: moment().format() })
      this.$refs.modal.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm(this.member)
      this.$refs.modal.hide()
    }
  }
}
</script>
