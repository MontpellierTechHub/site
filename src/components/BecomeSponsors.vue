<template>
  <div class="Home">
    <mth-page-banner class="Home__welcome"/>
    <mth-sponsors-pricing class="Sponsors__pricing"/>
    <mth-home-sponsors class="Sponsors_sponsors"/>
  </div>
</template>

<script>
import MthHomeSponsors from './HomeSponsors.vue'
import MthSponsorsPricing from './SponsorsPricing.vue'
import MthPageBanner from './PageBanner.vue'

export default {
  name: 'BecomeSponsors',
  components: {
    MthPageBanner,
    MthSponsorsPricing,
    MthHomeSponsors,
  }
}
</script>

<style scoped>
</style>
