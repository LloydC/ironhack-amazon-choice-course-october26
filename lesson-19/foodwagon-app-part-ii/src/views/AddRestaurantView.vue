<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSubmitting = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  mark: '',
  hours: 'Fast',
  rating: '',
  status: 'Open Now',
  color: '#f97316',
  logo: '',
  image: '',
})

const submitRestaurant = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('/api/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!response.ok) {
      const result = await response.json()
      throw new Error(result.error || 'Unable to add restaurant')
    }

    router.push('/restaurants')
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="add-restaurant-page">
    <section class="form-card">
      <p class="eyebrow">Foodwagon restaurants</p>
      <h1>Add a new restaurant</h1>

      <form @submit.prevent="submitRestaurant">
        <label>
          Restaurant name
          <input v-model="form.name" type="text" placeholder="Restaurant name" required />
        </label>

        <div class="form-row">
          <label>
            Offer
            <input v-model="form.mark" type="text" placeholder="20%" required />
          </label>
          <label>
            Delivery time
            <input v-model="form.hours" type="text" placeholder="Fast" required />
          </label>
        </div>

        <div class="form-row">
          <label>
            Rating
            <input v-model="form.rating" type="text" placeholder="46" required />
          </label>
          <label>
            Status
            <select v-model="form.status">
              <option>Open Now</option>
              <option>Opens Tomorrow</option>
              <option>Closed</option>
            </select>
          </label>
        </div>

        <div class="form-row">
          <label>
            Logo text
            <input v-model="form.logo" type="text" placeholder="FW" required />
          </label>
          <label>
            Brand color
            <input v-model="form.color" type="color" required />
          </label>
        </div>

        <label>
          Image URL
          <input v-model="form.image" type="url" placeholder="https://images.unsplash.com/..." required />
        </label>

        <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>

        <div class="form-actions">
          <RouterLink to="/restaurants" class="cancel">Cancel</RouterLink>
          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Adding...' : 'Add restaurant' }}
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
.add-restaurant-page {
  min-height: 70vh;
  padding: 48px 20px;
  background: #fffaf3;
}
.form-card {
  max-width: 680px;
  margin: 0 auto;
  padding: 36px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 40px rgba(33, 43, 54, 0.08);
}
.eyebrow {
  margin: 0 0 8px;
  color: #f97316;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
h1 { margin: 0 0 28px; }
form { display: grid; gap: 18px; }
label { display: grid; gap: 8px; color: #212b36; font-size: 13px; font-weight: 700; }
input, select {
  width: 100%;
  height: 44px;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
  padding: 0 12px;
  background: white;
  color: #212b36;
}
input[type="color"] { padding: 5px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-actions { display: flex; justify-content: flex-end; align-items: center; gap: 12px; }
.form-actions button, .cancel {
  min-height: 42px;
  padding: 11px 18px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
}
.form-actions button { background: #f9a51b; color: white; }
.form-actions button:disabled { cursor: wait; opacity: 0.65; }
.cancel { color: #737b84; background: #f3f4f6; }
.error { margin: 0; color: #dc2626; }

@media (max-width: 600px) {
  .form-card { padding: 24px 18px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
