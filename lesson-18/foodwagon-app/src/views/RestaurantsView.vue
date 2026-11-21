<script setup>
import { ref } from 'vue'
import FeaturedRestaurantsSection from '../components/FeaturedRestaurantsSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import restaurantsData from '../data/restaurants.json'
import topCitiesData from '../data/top-cities.json'

const restaurants = ref(restaurantsData)
const topCities = ref(topCitiesData)
</script>

<template>

  <main class="restaurants-page">
    <section class="page-intro">
      <p class="eyebrow">Foodwagon restaurants</p>
      <h1>Find your next favorite meal</h1>
      <p>Explore restaurants near you and discover something delicious.</p>
    </section>

    <FeaturedRestaurantsSection
      title="All Restaurants"
      :restaurants="restaurants"
      :show-view-all="false"
    />
  </main>

  <SiteFooter :cities="topCities" />
</template>

<style scoped>
.restaurants-page {
  min-height: 50vh;
  padding-bottom: 24px;
  background: #fffaf3;
}

.page-intro {
  padding: 48px 20px 20px;
  text-align: center;
}

.page-intro .eyebrow {
  margin: 0 0 10px;
  color: #f97316;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.page-intro h1 {
  margin: 0;
  color: #212b36;
  font-size: clamp(28px, 4vw, 42px);
}

.page-intro > p:last-child {
  margin: 12px 0 0;
  color: #737b84;
}

@media (max-width: 600px) {
  .page-intro {
    padding-top: 36px;
  }
}
</style>
