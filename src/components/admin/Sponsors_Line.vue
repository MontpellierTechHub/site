<template>

    <tr>
        <td>
            <strong>{{sponsor.name}}</strong>
            <p>{{sponsor.siret}}</p>
            <p>{{sponsor.address}}</p>
        </td>
        <td>
            <span v-if="sponsor.contact">
            <strong>{{sponsor.contact.name}}</strong>
            <p>{{sponsor.contact.email}}</p>
            <p>{{sponsor.contact.phone}}</p>
            </span>
        </td>
        <td>
            <span v-if="membersEntities[sponsor.contact_member]">{{membersEntities[sponsor.contact_member].name}}</span>
        </td>
        <td>
            <span v-if="active_cotisation">
            {{active_cotisation.value}} €          
            </span>
        </td>
        <td>
            <span v-if="active_cotisation">
            {{active_cotisation.updated_at}}            
            </span>
        </td>
        <td>
            <span v-if="active_cotisation && meetupsEntities[active_cotisation.meetup]">
            {{meetupsEntities[active_cotisation.meetup].name}}            
            </span>
        </td>
        <td>
          <admin-sponsors-update-button v-bind:sponsor="sponsor" />
        </td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'
import AdminSponsorsUpdateButton from '@/components/admin/Sponsors_UpdateButton'

export default {
  name: 'AdminSponsors_Line',
  props: ['sponsor'],
  components: {
    AdminSponsorsUpdateButton
  },
  computed: {
    ...mapGetters('entities', {
      meetupsEntities: 'getMeetupsEntities',
      membersEntities: 'getMembersEntities'
    })
  },
  data () {
    return {
      active_cotisation: this.sponsor.cotisations.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })[0]
    }
  }
  // mounted () {
  //   getMeetupsAsEntities().then(result => {
  //     this.meetupsEntities = result
  //   })
  //   getMembersAsEntities().then(result => {
  //     this.membersEntities = result
  //   })
  // }
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