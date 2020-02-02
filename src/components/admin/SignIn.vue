<template>
  <div class="text-center">
    <b-button v-on:click="signin">Se connecter avec Google</b-button>
  </div>
</template>

<script>

import { googleSignIn } from '../../auth'
import { mapGetters } from 'vuex'

export default {
  name: 'SignIn',
  methods: {
    signin (evt) {
      evt.preventDefault()
      googleSignIn()
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'getConnectedUser'
    })
  }
}
</script>
