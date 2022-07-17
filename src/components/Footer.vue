<template>
  <footer>
    <b-container>
      <b-row>
        <b-col><img class="footer__logo" :src="logo" alt="Montpellier Tech Hub"/></b-col>
        <b-col cols="8">
          <ul class="list-unstyled">
            <li class="nav-item nav-item_text">
              <router-link class="nav-link" :to="{ name:'Home' }" active-class="active">Accueil</router-link>
            </li>
            <li class="nav-item nav-item_text">
              <router-link class="nav-link" :to="{ name:'BecomeMember' }" active-class="active">Devenir membre</router-link>
            </li>
            <li class="nav-item nav-item_text">
              <router-link class="nav-link" :to="{ name:'Events' }" active-class="active">Evénements</router-link>
            </li>

            <li class="nav-item nav-item_text">
              <router-link class="nav-link" :to="{ name:'Slideshow' }">Slides</router-link>
            </li>

            <li class="nav-item nav-item_text">
              <a class="nav-link" target="_blank"   href="https://docs.google.com/document/d/1mHhKxdeWkU8H6xXzfF85Hgn9x_InXjjFMb-Cl7AOvqg/edit#">Statuts de l'association</a>
            </li>
            <li class="nav-item nav-item_text">
              <a class="nav-link" target="_blank"   href="http://bit.ly/mth-cfp">CFP des meetups</a>
            </li>
            <li class="nav-item nav-item_text">
              <a class="nav-link" target="_blank"   href="mailto:contact@montpellier-techhub.org">Contact</a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <p class="copyright">© {{new Date().getFullYear()}} Montpellier Tech Hub, association loi 1901</p>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import logoLight from '../assets/logo-light.svg'

export default {
  name: 'Footer',
  data () {
    return {
      logo: logoLight
    }
  }
}
</script>

<style scoped>
  footer {
    background-color: black;
    color: grey;
  }
  .footer__logo {
    width: 10rem;
  }
  .row {
    padding: 1rem 0;
  }
  a {
    color: grey;
  }
  a:hover {
    color: white;
  }
  .nav-link {
    padding: 0;
  }
  .copyright {
    font-size: 0.8rem;
  }
</style>
