<script setup>
defineProps({
  restaurant: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="restaurant-detail">
    <div class="detail-image" :style="{ backgroundImage: `url(${restaurant.image})` }">
      <span class="offer">🏷 {{ restaurant.mark }} off</span>
      <span class="speed">⏱ {{ restaurant.hours }}</span>
    </div>

    <div class="detail-content">
      <div class="title-row">
        <div class="logo" :style="{ background: restaurant.color }">
          {{ restaurant.logo }}
        </div>
        <div>
          <p class="label">Restaurant</p>
          <h1>{{ restaurant.name }}</h1>
        </div>
      </div>

      <dl class="details">
        <div>
          <dt>Restaurant ID</dt>
          <dd>#{{ restaurant.id }}</dd>
        </div>
        <div>
          <dt>Rating</dt>
          <dd>★ {{ restaurant.rating }}</dd>
        </div>
        <div>
          <dt>Discount</dt>
          <dd>{{ restaurant.mark }} off</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{{ restaurant.hours }}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd :class="{ open: restaurant.status === 'Open Now', closed: restaurant.status === 'Closed' }">
            {{ restaurant.status }}
          </dd>
        </div>
        <div>
          <dt>Logo</dt>
          <dd>{{ restaurant.logo }}</dd>
        </div>
        <div>
          <dt>Brand color</dt>
          <dd>
            <span class="color-swatch" :style="{ background: restaurant.color }"></span>
            {{ restaurant.color }}
          </dd>
        </div>
        <div>
          <dt>Image URL</dt>
          <dd class="image-url">{{ restaurant.image }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<style scoped>
.restaurant-detail {
  max-width: 1180px;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  overflow: hidden;
  margin: 0 auto;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 40px rgba(33, 43, 54, 0.1);
}
.detail-image {
  min-height: 520px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.offer, .speed {
  position: absolute;
  top: 20px;
  color: white;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 700;
}
.offer { left: 20px; background: #f97316; }
.speed { left: 110px; background: #ffb11b; }
.detail-content { padding: 42px; }
.title-row { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
.logo {
  width: 64px;
  height: 64px;
  flex: 0 0 auto;
  border-radius: 12px;
  color: white;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 800;
}
.label { margin: 0 0 4px; color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; }
h1 { margin: 0; font-size: clamp(28px, 4vw, 42px); }
.details { display: grid; grid-template-columns: 1fr 1fr; margin: 0; border-top: 1px solid #edf0f2; }
.details div { padding: 16px 8px 16px 0; border-bottom: 1px solid #edf0f2; }
dt { margin-bottom: 6px; color: #737b84; font-size: 12px; }
dd { margin: 0; font-weight: 700; font-size: 14px; }
dd.open { color: #65a30d; }
dd.closed { color: #f97316; }
.color-swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-radius: 50%;
  vertical-align: -1px;
}
.image-url { overflow-wrap: anywhere; color: #737b84; font-size: 12px; }

@media (max-width: 900px) {
  .restaurant-detail { grid-template-columns: 1fr; }
  .detail-image { min-height: 360px; }
}
@media (max-width: 600px) {
  .detail-image { min-height: 260px; }
  .detail-content { padding: 24px 18px; }
  .details { grid-template-columns: 1fr; }
}
</style>
