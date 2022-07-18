<template>
    <div>
      <header class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">
          <router-link class="navbar-brand" :to="{ name:'Home' }" active-class="active">
            <img class="logo" :src="logo" alt="Montpellier Tech Hub"/>
          </router-link>

          <div v-if="user" class="nav-wrapper ml-auto d-flex">
            <ul class="navbar-nav ml-auto " v-if="user.isAdmin">
              <li class="nav-item nav-item_text">
                <router-link class="nav-link" :to="{ name:'AdminDashboard' }" active-class="active">Dashboard</router-link>
              </li>
              <li class="nav-item nav-item_text">
                <router-link class="nav-link" :to="{ name:'AdminSponsors' }" active-class="active">Sponsors</router-link>
              </li>
              <li class="nav-item nav-item_text">
                <router-link class="nav-link" :to="{ name:'AdminMembers' }" active-class="active">Members</router-link>
              </li>
              <li class="nav-item nav-item_text">
                <router-link class="nav-link" :to="{ name:'AdminMeetups' }" active-class="active">Meetups</router-link>
              </li>
            </ul>

            <b-dropdown right variant="link" size="lg" no-caret>
              <template #button-content>
                <img class="avatar" :src="user.avatarUrl" :title="user.name" />
              </template>

              <b-dropdown-item v-on:click="signOut">Deconnexion</b-dropdown-item>
            </b-dropdown>

          </div>
        </div>
      </header>
      <div class="main-content">
        <div v-if="!user"><admin-sign-in /></div>
        <div class="text-center" v-if="user && !user.isAdmin">
          Vous n'avez pas les droits pour accéder à l'admin, contactez un membre du bureau de l'association pour arranger ça :)
        </div>

        <div v-if="user && user.isAdmin">
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
import AdminSignIn from './SignIn.vue'

import logo from '../../assets/logo-dark.svg'
import { initAuth, firebaseSignOut } from '../../auth'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminLayout',
  components: {
    AdminSignIn
  },
  computed: {
    logo () {
      return logo
    },
    ...mapGetters('auth', {
      user: 'getConnectedUser'
    })
  },
  methods: {
    signOut (evt) {
      evt.preventDefault()
      firebaseSignOut()
    }
  },
  created () {
    initAuth()
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0 2px 8px -1px rgba(0, 0, 0, .2);
}
.logo {
  margin-left: 20px;
  height: 40px;
}
.avatar {
  height: 40px;
  width: 40px;
  border-radius: 30px;
}
.dropdown-toggle {
  margin-right: 20px;
}

.nav-wrapper {
  align-items: center;
}
.navbar-nav {
  flex-direction: row;
}
.nav-item {
  margin-right: 30px;
}
.nav-item a {
  padding: 5px 5px;
  color: rgba(0,0,0,0.6);
  transition: all 0.5s linear;
  border: 2px solid transparent;
}
.nav-item a:hover {
  color: rgba(0,0,0,1)
}
.nav-item .active {
  color: rgba(0,0,0,1);
  pointer-events: none;
  border: 2px solid #2a76dd;
  border-radius: 4px;
}
.main-content {
  margin: 20px;
}

</style>
