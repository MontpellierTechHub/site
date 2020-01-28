<template>
  <div id="slideshow" class="reveal">
    <div class="slides">
      <SlideLinks/>
      <SlideSponsors/>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js/reveal'
import SlideLinks from './SlideLinks'
import SlideSponsors from './SlideSponsors'

export default {
  name: 'Slideshow',
  components: {
    SlideLinks,
    SlideSponsors
  },
  mounted () {
    Reveal.initialize()
  }
}
</script>

<style scoped>

  @import url('../../../node_modules/reveal.js/css/reset.css');
  @import url('../../../node_modules/reveal.js/css/reveal.css');
  @import url('./revealjs/white-modified.css');

  #slideshow {
    height: 100vh;
  }

</style>
