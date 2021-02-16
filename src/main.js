import Vue from 'vue'
import App from './App.vue'
let Bootstrap = require("bootstrap")
import router from './router'
import store from './store'

import bootstrapVue from "bootstrap-vue"
import "jquery"
import "popper.js"

// window.$ = window.JQuery = require("jquery")

Vue.use(bootstrapVue)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
