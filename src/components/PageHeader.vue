<template>
  <header class="Header" :class="['Header--' + theme, { 'Header--fixed': fixed, 'Header--collapsed': collapsed }]">
    <nav
      :class="['navbar', 'navbar-expand-lg', (fixed || collapsed)? 'navbar-light' : 'navbar-dark', 'bg-transparent']">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/" active-class="active">
          <img class="Header__logo" :src="logo" alt="Montpellier Tech Hub"/>
        </router-link>
        <div v-if="!fixed && !collapsed"></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_collapse"
                aria-controls="nav_collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <mth-main-menu v-bind:fixed="fixed"/>
      </div>
    </nav>
  </header>
</template>

<script>
import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'
import MthMainMenu from '../components/MainMenu.vue'

export default {
  name: 'PageHeader',
  components: { MthMainMenu },
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
</style>
