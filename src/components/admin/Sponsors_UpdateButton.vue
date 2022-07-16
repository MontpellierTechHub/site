<template>
    <div>
        <b-button size="sm" v-b-modal="'modal_sponsors__update' + sponsor.id">Editer</b-button>

        <admin-sponsors-update :sponsor="sponsor" />

    </div>
</template>

<script>
import AdminSponsorsUpdate from './Sponsors_Update.vue'

export default {
  name: 'AdminSponsors_UpdateButton',
  components: {
    AdminSponsorsUpdate
  },
  props: ['sponsor']
}
</script>
