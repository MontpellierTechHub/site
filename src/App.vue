<template>
  <div id="app" class="App">
    <mth-header class="App__header"/>
    <router-view class="App__content"/>
    <mth-footer class="App__footer"/>
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
a, a:hover {
  color: #9734A2;
}
</style>
