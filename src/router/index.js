import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Novedades from '../views/Novedades.vue'
//import Conatcto from '../views/Contacto.vue'
//import Personajes from '../views/Personajes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/novedades',
    name: 'Novedades',
    component: () => import('../views/Novedades.vue'),
    meta: { title: 'Novedades' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue'),
    meta: { title: 'Contacto' }
  },
  {
    path: '/personajes',
    name: 'Personajes',
    component: () => import('../views/Personajes.vue'),
    meta: { title: 'Personajes' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || "Assassin's Creed";
  });
});

export default router
