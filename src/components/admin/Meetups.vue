<template>
    <div>
      <h2 class="text-center">Meetups</h2>

       <b-button v-b-modal.modal_sponsors__add>Ajouter un sponsor</b-button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Contact</th>
            <th>Membres</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="meetup of meetups">
            <td>{{meetup.name}}</td>
            <td>
                <span v-if="meetup.contact_member">
                    {{membersEntities[meetup.contact_member].name}}
                    {{membersEntities[meetup.contact_member].email}}
                </span>
            </td>
            
            <td></td>
            <td></td>

          </tr>
        </tbody>
      </table>



      <b-modal id="modal_sponsors__add" scrollable title="Ajouter un sponsor">
        <admin-sponsors-add />
      </b-modal>

      
    </div>
</template>

<script>
import {getMeetups, getMembersAsEntities} from '../../firebase'

import AdminSponsorsAdd from '@/components/admin/Sponsors_Add'

export default {
  name: 'AdminMeetups',
  components: {
    AdminSponsorsAdd
  },
  data () {
    return {
      meetups: [],
      membersEntities: {}
    }
  },
  mounted () {
    getMeetups().then(result => {
      this.meetups = result
    })
    getMembersAsEntities().then(result => {
      this.membersEntities = result
    })
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