<template>
    <div>
       <h3>Dashboard</h3>
       <div class="d-flex p-2">
        <div class="card mr-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Membres</h5>
            <p class="card-text">{{members.length}}</p>
          </div>
        </div>
        <div class="card mr-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Meetups</h5>
            <p class="card-text">{{meetups.length}}</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Sponsors</h5>
            <p class="card-text">{{sponsors.length}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters('members', {
      members: 'getMembersArray'
    }),
    ...mapGetters('meetups', {
      meetups: 'getMeetupsArray'
    }),
    ...mapGetters('sponsors', {
      sponsors: 'getSponsorsArray'
    })
  },
  mounted () {
    this.$store.dispatch('meetups/getMeetups')
    this.$store.dispatch('members/getMembers')
    this.$store.dispatch('sponsors/getPrivateDataForSponsors')
  }
}
</script>
