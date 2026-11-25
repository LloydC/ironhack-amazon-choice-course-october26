import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import AddRestaurantView from '../views/AddRestaurantView.vue'
import RestaurantDetailView from '../views/RestaurantDetailView.vue'
import EditRestaurantView from '../views/EditRestaurantView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/restaurants', component: RestaurantsView },
  { path: '/restaurants/:id/edit', component: EditRestaurantView },
  { path: '/restaurants/:id', component: RestaurantDetailView },
  { path: '/add-restaurant', component: AddRestaurantView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router