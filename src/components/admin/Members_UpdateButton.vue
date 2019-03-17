<template>
    <div>
        <b-button v-b-modal="'modal_members__update' + member.id">Edit</b-button>

        <admin-members-update :member="this.member" />
     
    </div>
</template>

<script>
import AdminMembersUpdate from '@/components/admin/Members_Update'

export default {
  name: 'AdminMembers_UpdateButton',
  components: {
    AdminMembersUpdate
  },
  props: ['member']
//   data () {
//     return {
//       member: this.member
//     }
//   }
}
</script>
