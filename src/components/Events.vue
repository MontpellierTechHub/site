<template>
  <div class="Home">
    <mth-page-banner class="Home__welcome"/>
    <mth-events-content />
  </div>
</template>

<script>
import MthPageBanner from '../components/PageBanner.vue'
import MthEventsContent from '../components/EventsContent.vue'
export default {
  name: 'Events',
  components: {
    MthPageBanner,
    MthEventsContent
  },
  mounted () {
    this.$store.dispatch('meetups/getMeetups')
  }
}
</script>

<style scoped>
</style>
