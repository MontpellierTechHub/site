<template>
  <b-collapse id="nav_collapse" is-nav visible="false" class="collapse navbar-collapse justify-content-end" >
    <ul :class="['navbar-nav', 'ml-auto', fixed ? '': '']" >
      <li class="nav-item nav-item_text">
        <router-link class="nav-link" :to="{ name:'BecomeMember' }" active-class="active">Devenir membre</router-link>
      </li>
      <li class="nav-item nav-item_text">
        <router-link class="nav-link" :to="{ name:'Events' }" active-class="active">Evénements</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link"  target="_blank" href="https://twitter.com/MtpTechHub">
          <i class="fa fa-twitter"></i>
          <span class="d-md-none">Twitter</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  target="_blank" href="https://bit.ly/comm-mtp">
          <i class="fa fa-slack"></i>
          <span class="d-md-none">Slack</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  target="_blank" href="https://www.youtube.com/channel/UC1ZadBAsgOgD0eo2R3JTgNA">
          <i class="fa fa-youtube"></i>
          <span class="d-md-none">YouTube</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  target="_blank" href="https://www.linkedin.com/company/11447137/">
          <i class="fa fa-linkedin"></i>
          <span class="d-md-none">LinkedIn</span>
        </a>
      </li>

    </ul>
  </b-collapse>
</template>

<script>

export default {
  name: 'MainMenu',
  props: ['fixed'],
}
</script>

<style scoped>
.Header__logo {
  height: 40px;
}

.active {
  opacity: 1;
  pointer-events: none;
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

.nav-item_text {
  margin-right: 1rem;
}
</style>
