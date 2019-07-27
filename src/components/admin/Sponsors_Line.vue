<template>

    <tr>
        <td>
            <span class="line_bloc__title">{{sponsor.name}}</span>
            <span class="line_bloc__info">{{sponsor.siret}}</span>
            <span class="line_bloc__info">{{sponsor.address}}</span>
        </td>
        <td>
            <span v-if="sponsor.contact">
            <span class="line_bloc__title">{{sponsor.contact.name}}</span>
            <span class="line_bloc__info">{{sponsor.contact.email}}</span>
            <span class="line_bloc__info">{{sponsor.contact.phone}}</span>
            </span>
        </td>
        <td>
            <span v-if="membersEntities[sponsor.contact_member]">{{membersEntities[sponsor.contact_member].name}}</span>
        </td>
        <td :class="{ expired: active_cotisation && moment(active_cotisation.payed_at).isBefore(moment().subtract(1, 'years').format()) }">
            <span v-if="active_cotisation && meetupsEntities[active_cotisation.meetup]">
              <span class="line_bloc__title">{{active_cotisation.status}} - {{active_cotisation.value}} € </span>
              <span v-if="active_cotisation.payed_at">le {{moment(active_cotisation.payed_at).format("DD/MM/YYYY")}}</span>
              <span class="line_bloc__info">{{meetupsEntities[active_cotisation.meetup].name}}</span>
            </span>
        </td>
        <td>
          <admin-sponsors-update-button v-bind:sponsor="sponsor" />
        </td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import AdminSponsorsUpdateButton from '@/components/admin/Sponsors_UpdateButton'

export default {
  name: 'AdminSponsors_Line',
  props: ['sponsor'],
  components: {
    AdminSponsorsUpdateButton
  },
  data () {
    return {
      moment: moment,
      active_cotisation: this.sponsor.cotisations ? this.sponsor.cotisations.slice(0).sort((a, b) => {
        return new Date(b.payed_at) - new Date(a.payed_at)
      })[0] : null
    }
  },
  computed: {
    ...mapGetters('members', {
      membersEntities: 'getMembersEntities'
    }),
    ...mapGetters('meetups', {
      meetupsEntities: 'getMeetupsEntities'
    })
  }
}
</script>

<style>
@import './admin.css';
</style>