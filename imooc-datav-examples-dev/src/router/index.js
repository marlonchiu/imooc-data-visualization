import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Liquidfill from '../views/Liquidfill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: Liquidfill
  }
]

const router = new VueRouter({
  routes
})

export default router
