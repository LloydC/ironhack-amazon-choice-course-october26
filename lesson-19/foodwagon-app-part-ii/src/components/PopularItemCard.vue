<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const orderNow = () => {
  // Implement order logic here
  console.log(`Ordering item: ${item.name}`);
  alert(`Ordering item: ${item.name}`);
}
</script>

<template>
   <article class="popular-card">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p class="place">⌖ {{ item.place }}</p>
          <strong>{{ item.price }}</strong>
          <button @click="orderNow">Order Now</button>
    </article>
</template>

<style scoped>
.popular-card img { width: 100%; height: 180px; object-fit: cover; border-radius: 12px; }
.popular-card h3 { font-size: 13px; margin: 12px 0 7px; }
.popular-card .place { color: #f97316; font-size: 11px; margin: 0 0 7px; }
.popular-card strong { display: block; font-size: 13px; }
.popular-card button { width: 100%; color: white; background    : #f97316; border-radius: 6px; margin-top: 12px; padding: 10px; font-weight: bold; }

@media (max-width: 600px) {
  .popular-card img { height: 140px; }
}
</style>