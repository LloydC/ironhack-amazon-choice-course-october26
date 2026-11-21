<script setup>
defineProps({
  title: {
    type: String,
    default: 'Featured Restaurants',
  },
  showViewAll: {
    type: Boolean,
    default: true,
  },
  restaurants: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="restaurants catalog-section">
    <h2>{{ title }}</h2>
    <div class="restaurant-grid">
      <article
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="restaurant-card"
      >
        <div class="restaurant-image" :style="{ backgroundImage: `url(${restaurant.image})` }">
          <span class="offer">🏷 {{ restaurant.mark }} off</span>
          <span class="speed">⏱ Fast</span>
        </div>
        <div class="restaurant-info">
          <div class="logo" :style="{ background: restaurant.color }">{{ restaurant.logo }}</div>
          <div>
            <h3>{{ restaurant.name }}</h3>
            <p>★ {{ restaurant.rating }}</p>
          </div>
        </div>
        <span class="status" :class="{ open: restaurant.status === 'Open Now', closed: restaurant.status === 'Closed' }">
          {{ restaurant.status }}
        </span>
      </article>
    </div>
    <RouterLink to="/restaurants"><button v-if="showViewAll" class="view-all">View all ›</button></RouterLink>
  </section>
</template>

<style scoped>
.catalog-section { max-width: 1180px; margin: 0 auto; padding: 40px 0 65px; }
.catalog-section h2 { text-align: center; margin: 0 0 35px; }
.restaurant-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.restaurant-image { height: 210px; background-size: cover; background-position: center; border-radius: 12px; position: relative; }
.offer, .speed { color: white; font-size: 11px; font-weight: bold; border-radius: 6px; padding: 7px 9px; position: absolute; top: 12px; }
.offer { left: 12px; background: #f97316; }
.speed { left: 76px; background: #ffb11b; }
.restaurant-info { display: flex; align-items: center; gap: 10px; margin: 12px 0 8px; }
.logo { width: 48px; height: 48px; border-radius: 8px; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.restaurant-info h3 { font-size: 12px; margin: 0 0 6px; }
.restaurant-info p { color: #f97316; font-size: 12px; margin: 0; }
.status { display: inline-block; background: #fff0e7; color: #f97316; border-radius: 7px; padding: 8px 10px; font-size: 11px; font-weight: bold; }
.status.open { background: #edf7de; color: #65a30d; }
.status.closed { background: #fff0e7; color: #f97316; }
.view-all { display: block; margin: 45px auto 0; background: #f9a51b; color: white; padding: 12px 22px; border-radius: 8px; font-weight: bold; }

@media (max-width: 900px) {
  .restaurant-grid { grid-template-columns: repeat(2, 1fr); }
  .catalog-section { margin-left: 20px; margin-right: 20px; }
}

@media (max-width: 600px) {
  .restaurant-grid { grid-template-columns: 1fr 1fr; }
  .restaurant-image { height: 150px; }
}
</style>
