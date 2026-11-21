import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/restaurants', component: RestaurantsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router