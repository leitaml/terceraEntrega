import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bootstrapVue from "bootstrap-vue"
import "popper.js"
import jQuery from "jquery"

window.$ = window.jQuery = require("jquery")

Vue.use(bootstrapVue)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
