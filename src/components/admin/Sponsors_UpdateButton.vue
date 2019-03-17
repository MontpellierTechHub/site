<template>
    <div>
        <b-button v-b-modal="'modal_sponsors__update' + sponsor.id">Edit</b-button>

        <admin-sponsors-update :sponsor="sponsor" />
     
    </div>
</template>

<script>
import AdminSponsorsUpdate from '@/components/admin/Sponsors_Update'

export default {
  name: 'AdminSponsors_UpdateButton',
  components: {
    AdminSponsorsUpdate
  },
  props: ['sponsor']
}
</script>
