<template>
  <div class="Home">
    <mth-home-welcome class="Home__welcome"/>
    <mth-home-about class="Home__about"/>
    <mth-home-meetups class="Home__meetups"/>
    <mth-home-sponsors class="Home__sponsors"/>
    <mth-home-youtube class="Home__youtube"/>
  </div>
</template>

<script>
import MthHomeAbout from './HomeAbout.vue'
import MthHomeMeetups from './HomeMeetups.vue'
import MthHomeSponsors from './HomeSponsors.vue'
import MthHomeWelcome from './HomeWelcome.vue'
import MthHomeYoutube from './HomeYoutube.vue'

export default {
  name: 'Home',
  components: {
    MthHomeAbout,
    MthHomeMeetups,
    MthHomeSponsors,
    MthHomeWelcome,
    MthHomeYoutube
  }
}
</script>

<style scoped>
</style>
