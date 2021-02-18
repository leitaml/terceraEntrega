import Vue from 'vue'
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);

import App from './App.vue'
let Bootstrap = require("bootstrap")
import router from './router'
import store from './store'


import bootstrapVue from "bootstrap-vue"

import "popper.js"
import JQuery from 'jquery'
window.$ = JQuery





Vue.use(bootstrapVue)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
