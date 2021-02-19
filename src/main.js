import Vue from 'vue'
import App from './App.vue'
import jQuery from "jquery"
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require("bootstrap")
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"

// Vue.use(bootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
