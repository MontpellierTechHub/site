<template>
  <header class="Header" :class="['Header--' + theme, { 'Header--fixed': fixed, 'Header--collapsed': collapsed }]">
    <nav :class="['navbar', 'navbar-expand-lg', (fixed || collapsed)? 'navbar-light' : 'navbar-dark', 'bg-transparent']">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/" active-class="active" v-if="fixed || collapsed">
          <img class="Header__logo" :src="logo" alt="Montpellier Tech Hub"/>
        </router-link>
        <div v-if="!fixed && !collapsed"></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_collapse" aria-controls="nav_collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <mth-main-menu v-bind:fixed="fixed"/>
      </div>
    </nav>

<!--    <b-navbar toggleable="md" :type="theme">-->
<!--      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>-->
<!--      <b-navbar-brand :to="{ name:'Home' }" >-->
<!--      </b-navbar-brand>-->
<!--    </b-navbar>-->
  </header>
</template>

<script>
import logoDark from '../assets/logo-dark.svg'
import MthMainMenu from '../components/MainMenu.vue'

export default {
  name: 'HomeHeader',
  components: { MthMainMenu },
  data () {
    return {
      fixed: window.pageYOffset > 0,
      collapsed: window.outerWidth < 768,
      logo: logoDark
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
    transition: background-color 1s ease, box-shadow 1s ease, padding .5s linear;
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
</style>
