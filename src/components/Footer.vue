<template>
  <footer>
    <b-container>
      <b-row>
        <b-col><img class="footer__logo" :src="logo" alt="Montpellier Tech Hub"/></b-col>
        <b-col cols="8">
          <ul class="list-unstyled">
            <li><b-nav-item :to="{ name: 'Home' }">Accueil</b-nav-item></li>
            <li><b-nav-item :to="{ name: 'BecomeMember' }">Devenir membre</b-nav-item></li>
            <li><b-nav-item :to="{ name: 'Events' }">Evénements</b-nav-item></li>
            <li><b-nav-item target="_blank" href="https://docs.google.com/document/d/1mHhKxdeWkU8H6xXzfF85Hgn9x_InXjjFMb-Cl7AOvqg/edit#">Statuts de l'association</b-nav-item></li>
            <li><b-nav-item href="mailto:contact@montpellier-techhub.org">Contact</b-nav-item></li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <p class="copyright">© 2018 Montpellier Tech Hub, association loi 1901</p>
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
