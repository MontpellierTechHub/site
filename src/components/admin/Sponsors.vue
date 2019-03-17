<template>
    <div>
      <h2 class="text-center">Sponsors</h2>

       <b-button v-b-modal.modal_sponsors__add>Ajouter un sponsor</b-button>
      <table>
        <thead>
          <tr>
            <th rowspan="2">Infos</th>
            <th rowspan="2">Contact sponsor</th>
            <th rowspan="2">Contact MTH</th>
            <th colspan="3">Sponsoring</th>
          </tr>
          <tr>
            <th>Valeur</th>
            <th>Date</th>
            <th>Meetup</th>
          </tr>
        </thead>
        <tbody>
          <admin-sponsors-line v-for="sponsor of sponsors" :sponsor="sponsor" />
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
    ...mapGetters('entities', {
      sponsors: 'getSponsorsArray'
    })
  },
  mounted () {
    this.$store.dispatch('entities/getSponsors')
    this.$store.dispatch('entities/getMeetups')
    this.$store.dispatch('entities/getMembers')
  }
}
</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}
</style>