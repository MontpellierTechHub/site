<template>
    <div>
      <header>
        <b-navbar-brand :to="{ name:'Home' }">
          <img class="logo" :src="logo" alt="Montpellier Tech Hub"/>
        </b-navbar-brand>

        <div v-if="user" class="nav-wrapper ml-auto d-flex">
          <b-navbar-nav class="nav" v-if="user.isAdmin">
            <b-nav-item active-class="active" href="/admin">Dashboard</b-nav-item>
            <b-nav-item active-class="active" :to="{ name:'AdminSponsors' }">Sponsors</b-nav-item>
            <b-nav-item active-class="active" :to="{ name:'AdminMembers' }">Members</b-nav-item>
            <b-nav-item active-class="active" :to="{ name:'AdminMeetups' }">Meetups</b-nav-item>
          </b-navbar-nav>
          
           <b-dropdown right variant="link" size="lg" no-caret>
            <template slot="button-content"><img class="avatar" :src="user.avatarUrl" :title="user.name"/></template>

            <b-dropdown-item v-on:click="signOut">Deconnexion</b-dropdown-item>
          </b-dropdown>
          
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
import AdminSignIn from '@/components/admin/SignIn'

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

<style>
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
  color: rgba(0,0,0,0.6);
  transition: color 1s ease;
}
.nav-item a:hover {
  color: rgba(0,0,0,1)
}
.nav-item .active {
  color: rgba(0,0,0,1);
  pointer-events: none;
}
.main-content {
  margin: 20px;
}

</style>