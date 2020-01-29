<template>
  <div id="slideshow" class="reveal">
    <div class="slides">
      <SlideLinks/>
      <SlideSponsors/>
      <SlideEvents/>
      <SlideWeNeedYou/>
      <SlideLinks/>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js/reveal'
import SlideLinks from './SlideLinks'
import SlideSponsors from './SlideSponsors'
import SlideEvents from './SlideEvents'
import SlideWeNeedYou from './SlideWeNeedYou'

export default {
  name: 'Slideshow',
  components: {
    SlideLinks,
    SlideSponsors,
    SlideEvents,
    SlideWeNeedYou
  },
  mounted () {
    Reveal.initialize({
      margin: 0.03,
      maxScale: 1.7
    })
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
