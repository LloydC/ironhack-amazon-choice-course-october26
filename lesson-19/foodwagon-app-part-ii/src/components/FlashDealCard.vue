<script setup>
defineProps({
  deal: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <article class="deal-card">
      <div class="deal-image" :style="{ backgroundImage: `url(${deal.image})`, marginTop: '10px', border: '1px solid #000' }">
        <div class="discount"><strong>{{ deal.discount }}%</strong><span>Off</span></div>
      </div>
      <h3>{{ deal.name }}</h3>
      <p>{{ deal.days }} Days Remaining</p>
    </article>
</template>

<style scoped>  
.deal-image { height: 250px; background-size: cover; background-position: center; border-radius: 12px; position: relative; }
.discount { position: absolute; left: 0; bottom: 0; width: 68px; height: 68px; background: #ffb11b; color: white; border-radius: 0 12px 0 12px; display: flex; align-items: center; justify-content: center; }
.discount strong { font-size: 27px; }
.discount span { font-size: 13px; align-self: flex-end; margin: 0 0 12px 3px; }
.deal-card h3 { margin: 12px 0 8px; font-size: 14px; }
.deal-card p { display: inline-block; background: #fff0e7; color: #ff7442; padding: 8px 10px; border-radius: 6px; margin: 0; font-size: 12px; font-weight: bold; }
</style>