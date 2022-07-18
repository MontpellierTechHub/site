<template>
  <div class="Home">
    <mth-page-banner class="Home__welcome"/>
    <mth-become-member-content />
  </div>
</template>

<script>
import MthPageBanner from '../components/PageBanner.vue'
import MthBecomeMemberContent from '../components/BecomeMemberContent.vue'
export default {
  name: 'BecomeMember',
  components: {
    MthPageBanner,
    MthBecomeMemberContent
  }
}
</script>

<style scoped>
</style>
