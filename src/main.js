// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import Datepicker from '@vuepic/vue-datepicker';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import '@vuepic/vue-datepicker/dist/main.css'
import './assets/main.css'

createApp(App)
  .use(router)
  .use(store)
  .use(BootstrapVue)
  .component('Datepicker', Datepicker)
  .mount('#app')
