import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/KremLandingPage.vue'
import Legal from '../components/Legal.vue'

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal
    }
  ]
})

export default router