<template>
  <tr>
    <td>{{ member.name }}</td>
    <td>{{ member.email }}</td>

    <td
      :class="{ expired: active_cotisation && moment(active_cotisation.created_at).isBefore(moment().subtract(1, 'years').format()) }">
            <span v-if="active_cotisation && meetupsEntities[active_cotisation.meetup]">
            {{ meetupsEntities[active_cotisation.meetup].name }} le
              {{ moment(active_cotisation.created_at).format('DD/MM/YYYY') }}
            </span>
    </td>
    <td>
      <b-button size="sm" v @click="open = !open">Editer</b-button>
    </td>
  </tr>
  <tr  v-if="open">
    <td colspan="3">
      <admin-members-update v-bind:member="member"/>
    </td>
  </tr>
</template>

<script>

import { mapGetters } from 'vuex'

import AdminMembersUpdate from './Members_Update.vue'
import moment from 'moment'

export default {
  name: 'AdminMembers_Line',
  components: {
    AdminMembersUpdate
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
      moment: moment,
      open: false
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
