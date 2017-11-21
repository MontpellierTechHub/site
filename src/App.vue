<template>
  <div id="app">
    <mth-header/>
    <router-view/>
    <mth-footer/>
  </div>
</template>

<script>
import MthFooter from '@/components/Footer'
import MthHeader from '@/components/Header'

export default {
  name: 'App',
  components: { MthFooter, MthHeader }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
