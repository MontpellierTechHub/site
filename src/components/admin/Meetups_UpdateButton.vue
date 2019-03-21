<template>
    <div>
        <b-button size="sm" v-b-modal="'modal_meetups__update' + meetup.id">Editer</b-button>

        <admin-meetups-update :meetup="this.meetup" editing />
     
    </div>
</template>

<script>
import AdminMeetupsUpdate from '@/components/admin/Meetups_Update'

export default {
  name: 'AdminMeetups_UpdateButton',
  components: {
    AdminMeetupsUpdate
  },
  props: ['meetup']
}
</script>
