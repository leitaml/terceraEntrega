import Vue from 'vue'
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);

import App from './App.vue'
let Bootstrap = require("bootstrap")
import router from './router'
import store from './store'

import bootstrapVue from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(bootstrapVue)
Vue.config.productionTip = false

Vue.directive('focusBackgroundColor', {
  bind: function (el) {
        el.style.backgroundColor = '#ccf2ff';
      if (!el.focus()) {
        el.style.backgroundColor = '#ffb3b3';
      }
  },
})

Vue.filter('capitalize', function (value) {
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('edad', function (value) {
  return value + " años";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
