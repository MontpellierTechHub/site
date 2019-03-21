<template>
    <div>

      <div class="page-title">
        <h3>Meetups</h3>
        <b-button variant="primary" v-b-modal.modal_meetups__add>Ajouter un meetup</b-button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Contact</th>
            <th>Membres</th>
            <th>Dernier évènement</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="meetups && meetups.length > 0">
          <tr v-for="meetup of meetups">
            <td>{{meetup.name}}</td>
            <td>
            
                <span v-if="meetup.contact_member && membersEntities[meetup.contact_member]">
                  <span class="line_bloc__title">{{membersEntities[meetup.contact_member].name}}</span>
                  <span class="line_bloc__info">{{membersEntities[meetup.contact_member].email}}</span>   
                </span>
            </td>
            <td></td>
            <td :class="{ expired: moment(meetup.last_event_at).isBefore(moment().subtract(3, 'months').format()) }">
              <span v-if="meetup.last_event_at">{{moment(meetup.last_event_at).format("DD/MM/YYYY")}}</span>
            </td>
            <td>
              <admin-meetups-update-button v-bind:meetup="meetup" />
            </td>

          </tr>
        </tbody>
      </table>
      <admin-meetups-add /> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import AdminMeetupsAdd from '@/components/admin/Meetups_Add'
import AdminMeetupsUpdateButton from '@/components/admin/Meetups_UpdateButton'

export default {
  name: 'AdminMeetups',
  components: {
    AdminMeetupsAdd,
    AdminMeetupsUpdateButton
  },
  data () {
    return {
      moment: moment
    }
  },
  computed: {
    ...mapGetters('members', {
      membersEntities: 'getMembersEntities'
    }),
    ...mapGetters('meetups', {
      meetups: 'getMeetupsArray'
    })
  },
  mounted () {
    this.$store.dispatch('meetups/getMeetups')
    this.$store.dispatch('members/getMembers')
  }
}
</script>

<style>
@import './admin.css';
</style>