<script setup>
defineProps({
  deals: {
    type: Array,
    required: true,
  },
})

import FlashDealCard from './FlashDealCard.vue'
</script>

<template>
  <section class="flash-deals">
    <FlashDealCard v-for="deal in deals" :key="deal.id" :deal="deal" />
  </section>
</template>

<style scoped>
.flash-deals { max-width: 1180px; margin: 50px auto 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }


@media (max-width: 900px) {
  .flash-deals { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .flash-deals { grid-template-columns: 1fr 1fr; margin: 50px 16px 0; }
  .deal-image { height: 180px; }
}
</style>
