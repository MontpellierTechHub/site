<template>
  <tr>
        <td>{{member.name}}</td>
        <td>{{member.email}}</td>
        
        <td :class="{ expired: active_cotisation && moment(active_cotisation.created_at).isBefore(moment().subtract(1, 'years').format()) }">
            <span v-if="active_cotisation && meetupsEntities[active_cotisation.meetup]">
            {{meetupsEntities[active_cotisation.meetup].name}} le 
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
    ...mapGetters('meetups', {
      meetupsEntities: 'getMeetupsEntities'
    }),
    active_cotisation () {
      return this.member.cotisations ? this.member.cotisations.slice(0).sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })[0] : null
    }
  },
  data () {
    return {
      moment: moment
    }
  },
  created () {
    this.$store.dispatch('meetups/getMeetups')
  }
}
</script>

<style>
@import './admin.css';
</style>