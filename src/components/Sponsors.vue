<template>
  <ul class="sponsor-list">
    <li class="sponsor-list__item"
        is="mth-sponsor"
        v-for="sponsor of sponsors"
        :key="sponsor.name"
        :sponsor="sponsor">
    </li>
  </ul>
</template>

<script>
import shuffle from 'lodash.shuffle'
import sponsors from '@/assets/sponsors.json'
import MthSponsor from '@/components/Sponsor'

export default {
  name: 'Sponsors',
  components: { MthSponsor },
  data () {
    return { sponsors: shuffle(sponsors) }
  }
}
</script>

<style scoped>

</style>
