<template>
    <div>
      <!-- {{formattedMembers}} -->
      <div class="page-title">
        <h3>Members</h3>
        <b-button variant="primary" v-b-modal.modal_members__add>Ajouter un member</b-button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Dernière cotisation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <admin-members-line v-for="member of members" v-bind:member="member" v-bind:key="member.id"/>
        </tbody>
      </table>
        <admin-members-add />
    </div>
</template>

<script>
import AdminMembersAdd from './Members_Add.vue'
import AdminMembersLine from './Members_Line.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'AdminMembers',
  components: {
    AdminMembersAdd,
    AdminMembersLine
  },
  computed: {
    ...mapGetters('members', {
      members: 'getMembersArray'
    })
  },
  created () {
    this.$store.dispatch('members/getMembers')
  }
}
</script>

<style>
@import './admin.css';
</style>
