<template>
    <div>
      <h2 class="text-center">Members</h2>

       <b-button v-b-modal.modal_members__add>Ajouter un member</b-button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Meetup</th>
            <th>Date de cotisation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <admin-members-line v-for="member of members" v-bind:member="member" />
        </tbody>
      </table>
        <admin-members-add />
    </div>
</template>

<script>
import {getMembers, getCotisationsMembersAsEntities, getMeetupsAsEntities} from '../../firebase'

import AdminMembersAdd from '@/components/admin/Members_Add'
import AdminMembersLine from '@/components/admin/Members_Line'
import AdminMembersUpdateButton from '@/components/admin/Members_UpdateButton'

export default {
  name: 'AdminMembers',
  components: {
    AdminMembersAdd,
    AdminMembersLine,
    AdminMembersUpdateButton
  },
  data () {
    return {
      members: [],
      cotisationsMembersEntities: {},
      meetupsEntities: {}
    }
  },
  mounted () {
    getMembers().then(result => {
      this.members = result
    })
    getCotisationsMembersAsEntities().then(result => {
      this.cotisationsMembersEntities = result
    })
    getMeetupsAsEntities().then(result => {
      this.meetupsEntities = result
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