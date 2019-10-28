<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-modal size="lg" ref="SponsorsUpdateModalRef" @ok="onSubmit" :id="'modal_sponsors__update' + this.sponsor.id" title="Editer un sponsor">

      <Admin-sponsors-form-inputs :form="form" :sponsor="this.sponsor" editing="true"/>

      <div slot="modal-footer" class="w-100">
        <b-button class="float-left" type="button" v-on:click="onDelete" variant="danger">Supprimer</b-button>
        <b-button class="float-right" type="submit" variant="primary">Editer</b-button>
        <b-button class="float-right" type="reset" variant="default">Annuler</b-button>
      </div>
    </b-modal>
  </b-form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import { mapGetters } from 'vuex'
import AdminSponsorsFormInputs from '@/components/admin/Sponsors_FormInputs'

const initialForm = (sponsor) => {
  return {
    name: sponsor.name,
    siret: sponsor.siret,
    address: sponsor.address,
    logo: sponsor.logo,
    contact: {
      name: sponsor.contact.name,
      email: sponsor.contact.email
    },
    url_website: sponsor.url_website,
    contact_member: sponsor.contact_member,
    cotisation: {
      status: null,
      meetup: null,
      value: '',
      payed_at: ''
    },
    status: sponsor.status
  }
}

export default {
  name: 'AdminSponsors_Update',
  components: {
    Datepicker,
    AdminSponsorsFormInputs
  },
  props: ['sponsor'],
  computed: {
    ...mapGetters('members', {
      members: 'getMembersOptions'
    }),
    ...mapGetters('meetups', {
      meetups: 'getMeetupsOptions',
      meetupsEntities: 'getMeetupsEntities'
    }),
    form: function () {
      return initialForm(this.sponsor)
    }
  },
  data () {
    return {
      status_list: [{ text: 'Sélectionner un status', value: null }, 'Devis envoyé', 'Facture envoyé', 'Payé'],
      add_cotisation: false,
      moment: moment
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const newSponsor = {
        name: this.form.name,
        siret: this.form.siret,
        address: this.form.address,
        logo: this.form.logo,
        url_website: this.form.url_website,
        contact: {
          name: this.form.contact.name,
          email: this.form.contact.email
        },
        contact_member: this.form.contact_member,
        status: this.form.status
      }
      if (this.form.cotisation.value) {
        newSponsor.cotisations = [
          ...this.sponsor.cotisations.slice(0),
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
      this.$store.dispatch('sponsors/updateSponsor', {...this.sponsor, ...newSponsor})
      this.$refs.SponsorsUpdateModalRef.hide()
    },
    onDelete (evt) {
      evt.preventDefault()
      this.$store.dispatch('sponsors/updateSponsor', {...this.sponsor, deleted_at: moment().format()})
      this.$refs.SponsorsUpdateModalRef.hide()
    },
    onReset (evt) {
      evt.preventDefault()
      this.$refs.SponsorsUpdateModalRef.hide()
    }
  }
}
</script>
