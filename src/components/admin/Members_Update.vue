<template>
    <b-form @submit="onSubmit">
      <Admin-members-form-inputs :form="form" :member="member" editing="true"/>

        <div class="w-100">
          <b-button class="float-left" type="button" v-on:click="onDelete" variant="danger">Supprimer</b-button>
          <b-button class="float-right" type="submit" variant="primary">Editer !</b-button>
          <b-button class="float-right" type="reset" v-on:click="onReset" variant="default">Annuler</b-button>
        </div>
    </b-form>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import AdminMembersFormInputs from './Members_FormInputs.vue'

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
  mounted () {
      this.form = initialForm(this.member)
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
      })
    },
    onDelete (evt) {
      evt.preventDefault()
      this.$store.dispatch('members/updateMember', { id: this.member.id, deleted_at: moment().format() })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm(this.member)
    }
  }
}
</script>

<style>
@import './admin.css';

</style>
