import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap'
import BMap2 from '../views/BMap2'
import BMap3 from '../views/BMap3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: BMap2
  },
  {
    path: '/bmap3',
    name: 'BMap3',
    component: BMap3
  }
]

const router = new VueRouter({
  routes
})

export default router
