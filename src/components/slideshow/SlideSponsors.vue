<template>
  <section class="section" data-background-image="/static/images/background-slideshow-header.jpg">
    <h3 class="title">SPONSORS</h3>
    <mth-sponsors class="sponsors-component"/>
  </section>
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
  .section {
    padding: 0 !important;
  }
  .title {
    color: white;
    margin-bottom: 2rem;
  }
  .sponsors-component {
    padding-bottom: 30px;
  }
</style>
