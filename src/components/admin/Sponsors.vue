<template>
    <div>
      <h2 class="text-center">Sponsors</h2>

       <b-button v-b-modal.modal_sponsors__add>Ajouter un sponsor</b-button>
      <table>
        <thead>
          <tr>
            <th rowspan="2">Name</th>
            <th rowspan="2">SIRET</th>
            <th rowspan="2">Addresse</th>
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
          <tr v-for="sponsor of sponsors">
            <td>{{sponsor.name}}</td>
            <td>{{sponsor.siret}}</td>
            <td>{{sponsor.address}}</td>
            <td>
              <span v-if="sponsor.contact">
                <strong>{{sponsor.contact.name}}</strong>
                {{sponsor.contact.email}}
                {{sponsor.contact.phone}}
              </span>
            </td>
            <td>
              <span v-if="membersEntities[sponsor.contact_member]">{{membersEntities[sponsor.contact_member].name}}</span>
            </td>
            <td>
              <span v-if="sponsor.active_cotisation && cotisationsSponsorsEntities[sponsor.active_cotisation]">
                {{cotisationsSponsorsEntities[sponsor.active_cotisation].value}} €          
              </span>
            </td>
            <td>
              <span v-if="sponsor.active_cotisation && cotisationsSponsorsEntities[sponsor.active_cotisation]">
                {{cotisationsSponsorsEntities[sponsor.active_cotisation].updated_at}}            
              </span>
            </td>
            <td>
              <span v-if="sponsor.active_cotisation && cotisationsSponsorsEntities[sponsor.active_cotisation]">
                {{meetupsEntities[cotisationsSponsorsEntities[sponsor.active_cotisation].meetup].name}}            
              </span>
            </td>

          </tr>
        </tbody>
      </table>



      <b-modal id="modal_sponsors__add" scrollable title="Ajouter un sponsor">
        <admin-sponsors-add />
      </b-modal>

      
    </div>
</template>

<script>
import {getSponsors, getCotisationsSponsorsAsEntities, getMeetupsAsEntities, getMembersAsEntities} from '../../firebase'

import AdminSponsorsAdd from '@/components/admin/Sponsors_Add'

export default {
  name: 'AdminSponsors',
  components: {
    AdminSponsorsAdd
  },
  data () {
    return {
      sponsors: [],
      meetupsEntities: {},
      cotisationsSponsorsEntities: {},
      membersEntities: {}
    }
  },
  mounted () {
    getSponsors().then(result => {
      this.sponsors = result
    })
    getCotisationsSponsorsAsEntities().then(result => {
      this.cotisationsSponsorsEntities = result
    })
    getMeetupsAsEntities().then(result => {
      this.meetupsEntities = result
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