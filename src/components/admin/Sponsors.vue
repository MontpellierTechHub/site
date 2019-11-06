<template>
    <div>
      <div class="page-title">
        <h3>Sponsors</h3>
        <b-button variant="primary" v-b-modal.modal_sponsors__add>
          Ajouter un sponsor
        </b-button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Infos sponsor</th>
            <th>Contact sponsor</th>
            <th>Contact MTH</th>
            <th>Sponsoring</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <admin-sponsors-line v-for="sponsor of sponsors" :sponsor="sponsor" v-bind:key="sponsor.id" />
        </tbody>
      </table>

      <admin-sponsors-add />

    </div>
</template>

<script>
import AdminSponsorsAdd from '@/components/admin/Sponsors_Add'
import AdminSponsorsLine from '@/components/admin/Sponsors_Line'

import { mapGetters } from 'vuex'

export default {
  name: 'AdminSponsors',
  components: {
    AdminSponsorsAdd,
    AdminSponsorsLine
  },
  computed: {
    ...mapGetters('sponsors', {
      sponsors: 'getSponsorsArray'
    })
  },
  mounted () {
    this.$store.dispatch('sponsors/getPrivateDataForSponsors')
    this.$store.dispatch('meetups/getMeetups')
    this.$store.dispatch('members/getMembers')
  }
}
</script>

<style>
  @import './admin.css';
</style>
