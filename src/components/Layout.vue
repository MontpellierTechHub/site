<template>
 <div id="app" class="App">
    <mth-home-header v-if="$route.path === '/'" class="App__header"/>
    <mth-page-header v-if="$route.path !== '/'" class="App__header"/>
    <router-view class="App__content"/>
    <mth-footer class="App__footer"/>
  </div>
</template>

<script>
import MthFooter from '../components/Footer.vue'
import MthHomeHeader from '../components/HomeHeader.vue'
import MthPageHeader from '../components/PageHeader.vue'

export default {
  name: 'Layout',
  components: { MthFooter, MthHomeHeader, MthPageHeader }
}
</script>

<style scoped>
</style>
