<template>
  <b-modal ref="SponsorsAddModalRef" size="lg" @ok="onSubmit" id="modal_sponsors__add" title="Ajouter un sponsor" hide-footer>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <Admin-sponsors-form-inputs :form="form"/>

      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" type="submit" variant="primary">Ajouter</b-button>
        <b-button class="float-right" type="reset" variant="default">Annuler</b-button>
      </div>

    </b-form>
  </b-modal>
</template>

<script>

import moment from 'moment'
import { mapGetters } from 'vuex'
import AdminSponsorsFormInputs from '@/components/admin/Sponsors_FormInputs'

const initialForm = () => {
  return {
    name: '',
    siret: '',
    address: '',
    logo: '',
    contact: {
      name: '',
      email: ''
    },
    url_website: '',
    contact_member: null,
    cotisation: {
      status: null,
      meetup: null,
      value: ''
    },
    status: null
  }
}

export default {
  name: 'AdminSponsors_Add',
  components: {
    AdminSponsorsFormInputs
  },
  computed: {
    ...mapGetters('members', {
      members: 'getMembersOptions'
    }),
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions'
    })
  },
  data () {
    return {
      form: initialForm(),
      status_list: [{ text: 'Sélectionner un status', value: null }, 'Devis envoyé', 'Facture envoyé', 'Payé'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const sponsor = {
        name: this.form.name,
        siret: this.form.siret,
        address: this.form.address,
        logo: this.form.logo,
        contact: {
          name: this.form.contact.name,
          email: this.form.contact.email
        },
        url_website: this.form.url_website,
        contact_member: this.form.contact_member,
        status: this.form.status
      }

      if (this.form.cotisation.value) {
        sponsor.cotisations = [
          {
            status: this.form.cotisation.status,
            meetup: this.form.cotisation.meetup,
            value: this.form.cotisation.value,
            created_at: moment().format(),
            updated_at: moment().format(),
            payed_at: moment(this.form.cotisation.payed_at).format()
          }
        ]
      }
      this.$store.dispatch('sponsors/addSponsor', sponsor)
      this.form = initialForm()
      this.$refs.SponsorsAddModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = initialForm()
      this.$refs.SponsorsAddModalRef.hide()
    }
  }
}
</script>

<style>
@import './admin.css';
</style>
