<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

import PopularItemCard from './PopularItemCard.vue'
</script>

<template>
  <section class="catalog-section">
    <h2>Popular items</h2>
    <div class="carousel">
      <button class="arrow left">‹</button>
      <div class="popular-grid">
        <PopularItemCard v-for="item in items" :key="item.id" :item="item" />
      </div>
      <button class="arrow right">›</button>
    </div>
  </section>
</template>

<style scoped>
.catalog-section { max-width: 1180px; margin: 0 auto; padding: 40px 0 65px; }
.catalog-section h2 { text-align: center; margin: 0 0 35px; }
.carousel { position: relative; }
.popular-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; }
.arrow { position: absolute; z-index: 2; top: 85px; width: 46px; height: 46px; border-radius: 50%; background: #ffb11b; color: white; font-size: 30px; line-height: 40px; }
.arrow.left { left: -24px; }
.arrow.right { right: -24px; }

@media (max-width: 900px) {
  .popular-grid { grid-template-columns: repeat(2, 1fr); }
  .carousel { margin: 0 20px; }
  .catalog-section { margin-left: 20px; margin-right: 20px; }
}

@media (max-width: 600px) {
  .popular-grid { grid-template-columns: 1fr 1fr; }
  .arrow { display: none; }
}
</style>
