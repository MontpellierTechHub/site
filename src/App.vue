<template>
  <div id="app">
    <b-container>
      <b-row class="mb-4">
        <mth-header/>
      </b-row>
      <b-row class="mb-4">
        <router-view/>
      </b-row>
      <b-row class="mb-4">
        <mth-footer/>
      </b-row>
    </b-container>
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
