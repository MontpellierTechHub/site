<template>
  <tr>
        <td>{{member.name}}</td>
        <td>{{member.email}}</td>
        
        <td>
            <span v-if="active_cotisation && meetupsEntities[active_cotisation.meetup]">
            {{meetupsEntities[active_cotisation.meetup].name}}
            </span>
        </td>
        
        <td>
            <span v-if="active_cotisation">
              {{moment(active_cotisation.created_at).format("DD/MM/YYYY")}}
            </span>
        </td>
        <td>
        <admin-members-update-button v-bind:member="member" />
        
        </td>
  </tr>
</template>

<script>

import { mapGetters } from 'vuex'

import AdminMembersUpdateButton from '@/components/admin/Members_UpdateButton'
import moment from 'moment'

export default {
  name: 'AdminMembers_Line',
  components: {
    AdminMembersUpdateButton
  },
  props: ['member'],
  computed: {
    ...mapGetters('entities', {
      meetupsEntities: 'getMeetupsEntities'
    })
  },
  data () {
    return {
      moment: moment,
      active_cotisation: this.member.cotisations.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })[0]
    }
  },
  created () {
    this.$store.dispatch('entities/getMeetups')
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