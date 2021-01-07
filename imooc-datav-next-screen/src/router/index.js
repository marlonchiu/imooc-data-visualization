import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Timeline from '../views/Timeline.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
