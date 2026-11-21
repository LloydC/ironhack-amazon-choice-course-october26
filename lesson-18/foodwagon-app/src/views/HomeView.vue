<script setup>
import { ref } from 'vue'
import FeaturedRestaurantsSection from '../components/FeaturedRestaurantsSection.vue'
import FlashDealsSection from '../components/FlashDealsSection.vue'
import HeroSection from '../components/HeroSection.vue'
import HowItWorksSection from '../components/HowItWorksSection.vue'
import OrderCtaSection from '../components/OrderCtaSection.vue'
import PopularItemsSection from '../components/PopularItemsSection.vue'
import flashDealsData from '../data/flash-deals.json'
import popularItemsData from '../data/popular-items.json'
import restaurantsData from '../data/restaurants.json'

const flashDeals = ref(flashDealsData)
const popularItems = ref(popularItemsData)
const restaurants = ref(restaurantsData)

</script>

<template>
    <HeroSection />
    <FlashDealsSection :deals="flashDeals" />
    <HowItWorksSection />
    <PopularItemsSection :items="popularItems" />
    <FeaturedRestaurantsSection :restaurants="restaurants" />
    <OrderCtaSection />
</template>