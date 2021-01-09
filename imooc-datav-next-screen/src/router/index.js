import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Timeline from '../views/Timeline.vue'
import Map from '../views/Map.vue'
import Earth from '../views/Earth.vue'

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
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
