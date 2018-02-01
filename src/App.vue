<template>
  <div id="app" class="App">
    <mth-home-header v-if="$route.path === '/'" class="App__header"/>
    <mth-page-header v-if="$route.path !== '/'" class="App__header"/>
    <router-view class="App__content"/>
    <mth-footer class="App__footer"/>    
  </div>
</template>

<script>
import MthFooter from '@/components/Footer'
import MthHomeHeader from '@/components/HomeHeader'
import MthPageHeader from '@/components/PageHeader'

export default {
  name: 'App',
  components: { MthFooter, MthHomeHeader, MthPageHeader }
}
</script>

<style>
a, a:hover {
  color: #9734A2;
}
</style>
