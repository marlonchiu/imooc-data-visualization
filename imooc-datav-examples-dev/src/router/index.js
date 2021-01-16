import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Liquidfill from '../views/Liquidfill.vue'
import WordCloud from '../views/WordCloud.vue'
import BMap from '../views/BMap.vue'
import BMapCoolFly from '../views/BMapCoolFly.vue'
import BMapECharts from '../views/BMapECharts.vue'
import BMapFly from '../views/BMapFly.vue'
import BMapShape from '../views/BMapShape.vue'

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
  },
  {
    path: '/wordcloud',
    name: 'WordCloud',
    component: WordCloud
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/bmapcoolfly',
    name: 'BMapCoolFly',
    component: BMapCoolFly
  },
  {
    path: '/bmapecharts',
    name: 'BMapECharts',
    component: BMapECharts
  },
  {
    path: '/bmapfly',
    name: 'BMapFly',
    component: BMapFly
  },
  {
    path: '/bmapshape',
    name: 'BMapShape',
    component: BMapShape
  }
]

const router = new VueRouter({
  routes
})

export default router
