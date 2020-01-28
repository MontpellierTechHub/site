<template>
    <mth-sponsors class="toto"/>
</template>

<script>
import MthSponsors from '@/components/Sponsors'

export default {
  name: 'SlideSponsors',
  components: {
    MthSponsors
  }
}
</script>

<style scoped>

  .toto >>> img {
    padding: 20px !important;
    border-radius: 4px;
    max-height: 150px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
</style>
