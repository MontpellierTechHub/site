<template>
  <div class="Home">
    <mth-home-welcome class="Home__welcome"/>
    <mth-home-youtube class="Home__youtube"/>
    <mth-home-sponsors class="Home__sponsors"/>
  </div>
</template>

<script>
import MthHomeSponsors from '@/components/HomeSponsors'
import MthHomeWelcome from '@/components/HomeWelcome'
import MthHomeYoutube from '@/components/HomeYoutube'

export default {
  name: 'Home',
  components: {
    MthHomeSponsors,
    MthHomeWelcome,
    MthHomeYoutube
  }
}
</script>

<style scoped>

</style>
