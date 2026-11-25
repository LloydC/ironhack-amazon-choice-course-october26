<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RestaurantDetail from '../components/RestaurantDetail.vue'
import restaurantsData from '../data/restaurants.json'

const route = useRoute()
console.log('Route params:', route.params) // Log the route parameters for debugging
const router = useRouter()
const isDeleting = ref(false)
const deleteError = ref('')
const restaurant = computed(() =>
  restaurantsData.find((item) => item.id === Number(route.params.id))
)

const deleteRestaurant = async () => {
  if (!window.confirm(`Delete ${restaurant.value.name}?`)) return

  isDeleting.value = true
  deleteError.value = ''

  try {
    const response = await fetch(`/api/restaurants/${route.params.id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      const result = await response.json()
      throw new Error(result.error || 'Unable to delete restaurant')
    }

    router.push('/restaurants')
  } catch (error) {
    deleteError.value = error.message
  } finally {
    isDeleting.value = false
  }
}
</script>

<template>
  <main class="detail-page">
    <div class="page-actions">
      <RouterLink to="/restaurants" class="back-link">← Back to restaurants</RouterLink>
      <div v-if="restaurant" class="restaurant-actions">
        <RouterLink :to="`/restaurants/${restaurant.id}/edit`" class="edit-button">
          Edit
        </RouterLink>
        <button type="button" class="delete-button" :disabled="isDeleting" @click="deleteRestaurant">
          {{ isDeleting ? 'Deleting...' : 'Delete' }}
        </button>
      </div>
    </div>
    <p v-if="deleteError" class="delete-error" role="alert">{{ deleteError }}</p>

    <RestaurantDetail v-if="restaurant" :restaurant="restaurant" />

    <section v-else class="not-found">
      <h1>Restaurant not found</h1>
      <p>No restaurant matches ID {{ route.params.id }}.</p>
      <RouterLink to="/restaurants">View all restaurants</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.detail-page {
  min-height: 70vh;
  padding: 48px 20px 64px;
  background: #fffaf3;
}
.page-actions {
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px;
}
.restaurant-actions { display: flex; gap: 10px; }
.edit-button, .delete-button {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}
.edit-button { color: #212b36; background: #fff; border: 1px solid #dfe3e8; }
.delete-button { color: white; background: #dc2626; }
.delete-button:disabled { cursor: wait; opacity: 0.65; }
.delete-error { max-width: 1180px; margin: 0 auto 16px; color: #dc2626; }
.back-link {
  color: #737b84;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
.back-link:hover { color: #f97316; }
.not-found {
  max-width: 680px;
  margin: 40px auto;
  padding: 48px 24px;
  border-radius: 16px;
  background: white;
  text-align: center;
  box-shadow: 0 12px 40px rgba(33, 43, 54, 0.08);
}
.not-found h1 { margin-top: 0; }
.not-found p { color: #737b84; }
.not-found a {
  display: inline-block;
  margin-top: 12px;
  color: #f97316;
  font-weight: 700;
}
</style>
