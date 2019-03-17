<template>
    <div>
      <h2 class="text-center">Meetups</h2>

      <b-button v-b-modal.modal_meetups__add>Ajouter un meetup</b-button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Contact</th>
            <th>Membres</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="meetups && meetups.length > 0">
          <tr v-for="meetup of meetups">
            <td>{{meetup.name}}</td>
            <td>
                <span v-if="meetup.contact_member && membersEntities[meetup.contact_member]">
                    {{membersEntities[meetup.contact_member].name}}
                    {{membersEntities[meetup.contact_member].email}}
                </span>
            </td>
            
            <td></td>
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
import AdminMeetupsAdd from '@/components/admin/Meetups_Add'
import AdminMeetupsUpdateButton from '@/components/admin/Meetups_UpdateButton'

export default {
  name: 'AdminMeetups',
  components: {
    AdminMeetupsAdd,
    AdminMeetupsUpdateButton
  },
  computed: {
    ...mapGetters('entities', {
      meetups: 'getMeetupsArray',
      membersEntities: 'getMembersEntities'
    })
  },
  mounted () {
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