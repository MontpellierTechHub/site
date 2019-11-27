<template>
    <div>
        <b-button  size="sm" v-b-modal="'modal_members__update' + member.id">Editer</b-button>

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
}
</script>
