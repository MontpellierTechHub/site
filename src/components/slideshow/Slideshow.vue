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
import SlideLinks from './SlideLinks.vue'
import SlideSponsors from './SlideSponsors.vue'
import SlideEvents from './SlideEvents.vue'
import SlideWeNeedYou from './SlideWeNeedYou.vue'

const cssFiles = ['/static/revealjs/css/reset.css', '/static/revealjs/css/reveal.css', '/static/revealjs/css/theme-white-modified.css']

export default {
  name: 'Slideshow',
  components: {
    SlideLinks,
    SlideSponsors,
    SlideEvents,
    SlideWeNeedYou
  },
  beforeCreate () {
    cssFiles.forEach(filePath => {
      const css = document.createElement('link')
      css.href = css.id = filePath
      css.rel = 'stylesheet'
      document.head.appendChild(css)
    })
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
  #slideshow {
    height: 100vh;
  }

</style>
