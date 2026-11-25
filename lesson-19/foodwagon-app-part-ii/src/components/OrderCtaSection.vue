<script setup>
const orderNow = () => {
  // Implement order logic here
  console.log('Proceeding to order');
  alert('Proceeding to order');
}
</script>

<template>
  <section class="cta">
    <img
      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85"
      alt="Fresh salad"
    />
    <div>
      <h2>Are you ready to order with<br />the best deals?</h2>
      <button @click="orderNow">Proceed to order ›</button>
    </div>
    <img
      src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85"
      alt="French fries"
    />
  </section>
</template>

<style scoped>
.cta { height: 280px; background: #ffb11b; display: flex; align-items: center; justify-content: space-between; overflow: hidden; }
.cta img { width: 30%; height: 100%; object-fit: cover; }
.cta div { text-align: center; }
.cta h2 { color: white; font-size: 34px; margin: 0 0 30px; }
.cta button { background: #f97316; color: white; border-radius: 7px; padding: 13px 20px; font-size: 12px; font-weight: bold; }

@media (max-width: 900px) {
  .cta h2 { font-size: 24px; }
}

@media (max-width: 600px) {
  .cta { height: 220px; }
  .cta img { width: 25%; }
  .cta h2 { font-size: 16px; }
  .cta button { padding: 10px; }
}
</style>
