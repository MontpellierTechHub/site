<template>
  <div class="Home">
    <mth-page-header class="Home__welcome"/>
    <mth-become-member-content />
  </div>
</template>

<script>
import MthPageHeader from '@/components/PageHeader'
import MthBecomeMemberContent from '@/components/BecomeMemberContent'
export default {
  name: 'BecomeMember',
  components: {
    MthPageHeader,
    MthBecomeMemberContent
  }
}
</script>

<style scoped>
</style>
