<template>
  <b-collapse id="nav_collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <!-- <b-nav-item exact active-class="active" :to="{ name:'Home' }">Home</b-nav-item> -->
      <!-- <b-nav-item :to="{ name:'Meetups' }">MEETUPS</b-nav-item> -->
      <!-- <b-nav-item :to="{ name:'Sponsors' }">SPONSORS</b-nav-item> -->
      <b-nav-item active-class="active" class="nav-item__last" :to="{ name:'BecomeMember' }">Devenir membre</b-nav-item>
      
      <b-nav-item target="_blank" href="https://twitter.com/MtpTechHub">
        <i class="fa fa-twitter"></i>
        <span class="d-md-none">Twitter</span>
      </b-nav-item>
      <b-nav-item target="_blank" href="https://bit.ly/comm-mtp">
        <i class="fa fa-slack"></i>
        <span class="d-md-none">Slack</span>
      </b-nav-item>
      <b-nav-item target="_blank" href="https://www.youtube.com/channel/UC1ZadBAsgOgD0eo2R3JTgNA">
        <i class="fa fa-youtube"></i>
        <span class="d-md-none">YouTube</span>
      </b-nav-item>
      <b-nav-item target="_blank" href="https://github.com/MontpellierTechHub">
        <i class="fa fa-github"></i>
        <span class="d-md-none">GitHub</span>
      </b-nav-item>
      <b-nav-item target="_blank" href="https://www.linkedin.com/company/11447137/">
        <i class="fa fa-linkedin"></i>
        <span class="d-md-none">LinkedIn</span>
      </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
  export default {
    name: 'MainMenu'
  }
</script>

<style scoped>
  .Header__logo {
    height: 40px;
  } */
  .active {
    opacity: 1;
    pointer-events: none;
  }
  .nav-item__last {
    margin-right: 1rem;
  }

  /* Override Bootstrap */
  .navbar > .navbar-toggler {
    border: none;
    cursor: pointer;
  }
  .navbar > .navbar-brand,
  .navbar .navbar-nav > .nav-item > .nav-link {
    transition: color 1s ease
  }
  .navbar > .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
  }
  .active {
    opacity: 1;
    pointer-events: none;
  }
  .nav-item__last {
    margin-right: 1rem;
  }
</style>
