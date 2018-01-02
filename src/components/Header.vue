<template>
  <header class="Header" :class="['Header--' + theme, { 'Header--fixed': fixed, 'Header--collapsed': collapsed }]">
    <b-navbar toggleable="md" :type="theme">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand :to="{ name:'Home' }">
        <img class="Header__logo" :src="logo" alt="Montpellier Tech Hub"/>
      </b-navbar-brand>
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item :to="{ name:'Home' }">ACCUEIL</b-nav-item> -->
          <!-- <b-nav-item :to="{ name:'Meetups' }">MEETUPS</b-nav-item> -->
          <!-- <b-nav-item :to="{ name:'Sponsors' }">SPONSORS</b-nav-item> -->
          <!-- <b-nav-item :to="{ name:'About' }">À PROPOS</b-nav-item> -->
          <b-nav-item target="_blank" href="https://comm-montpellier-invit.herokuapp.com/">
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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
  import logoDark from '../assets/logo-dark.svg'
  import logoLight from '../assets/logo-light.svg'

  export default {
    name: 'Header',
    data () {
      return {
        fixed: window.pageYOffset > 0,
        collapsed: window.outerWidth < 768
      }
    },
    methods: {
      handleScroll () {
        this.fixed = window.pageYOffset > 0
      },
      handleResize () {
        this.collapsed = window.outerWidth < 768
      }
    },
    computed: {
      theme () {
        return this.fixed || this.collapsed ? 'light' : 'dark'
      },
      logo () {
        return this.fixed || this.collapsed ? logoDark : logoLight
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style scoped>
  .Header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: .75em 0;
    transition: background-color 1s ease, box-shadow 1s ease, padding .25s linear;
    z-index: 1071; /* https://getbootstrap.com/docs/4.0/layout/overview/#z-index */
  }
  .Header.Header--light {
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px -1px rgba(0, 0, 0, .2);
  }
  .Header.Header--dark {
    background-color: transparent;
  }
  .Header.Header--fixed {
    position: fixed;
  }
  .Header.Header--fixed,
  .Header.Header--collapsed {
    padding: 0;
  }

  .Header__logo {
    height: 40px;
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
</style>
