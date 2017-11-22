<template>
  <header>
    <b-nav>
      <b-nav-item active>
        <b-link :to="{ name:'Home' } ">Accueil</b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name:'Meetups' } ">Meetups</b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name:'Sponsors' } ">Sponsors</b-link>
      </b-nav-item>
      <b-nav-item>
        <b-link :to="{ name:'About' } ">À propos</b-link>
      </b-nav-item>
    </b-nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>
