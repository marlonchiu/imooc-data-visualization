import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Liquidfill from '../views/Liquidfill.vue'
import WordCloud from '../views/WordCloud.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
