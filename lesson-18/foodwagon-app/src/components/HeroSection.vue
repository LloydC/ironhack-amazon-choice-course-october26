<template>
  <section class="hero">
    <div class="hero-copy">
      <h1>Are you starving?</h1>
      <p>Within a few clicks, find meals that are accessible near you</p>
      <div class="search-card">
        <div class="search-tabs">
          <button class="active">🛵 <b>Delivery</b></button>
          <button>🛍 <b>Pickup</b></button>
        </div>
        <div class="search-row">
          <label>⌖ <input type="text" placeholder="Enter Your Address" /></label>
          <button>⌕ Find Food</button>
        </div>
      </div>
    </div>
    <img
      class="hero-bowl"
      src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=90"
      alt="A bowl of noodles"
    />
  </section>
</template>

<style scoped>
.hero { height: 340px; background: #ffca28; display: flex; align-items: center; justify-content: center; gap: 3%; overflow: hidden; }
.hero-copy { width: 520px; }
.hero h1 { color: white; font-size: 52px; margin: 0 0 8px; line-height: 1; }
.hero-copy > p { margin: 0 0 18px; color: #9a7200; font-size: 14px; }
.hero-bowl { width: 330px; height: 330px; margin-top: 55px; border-radius: 50%; object-fit: cover; box-shadow: 0 12px 30px #95680055; }
.search-card { background: white; width: 460px; border-radius: 10px; box-shadow: 0 8px 20px #d49b1744; overflow: hidden; }
.search-tabs { height: 58px; display: flex; align-items: center; border-bottom: 1px solid #eee; }
.search-tabs button { background: white; color: #777; height: 58px; padding: 0 20px; }
.search-tabs .active { color: #f97316; background: #fff3e8; }
.search-row { display: flex; gap: 10px; padding: 14px; }
.search-row label { flex: 1; background: #f3f4f6; border-radius: 6px; color: #b3b3b3; padding: 10px; }
.search-row input { width: 85%; border: 0; outline: 0; background: transparent; }
.search-row button { background: #f97316; color: white; border-radius: 6px; padding: 10px 16px; font-weight: 700; }

@media (max-width: 900px) {
  .hero { height: auto; padding: 50px 20px; }
  .hero-copy { width: 55%; }
  .hero h1 { font-size: 40px; }
  .hero-bowl { width: 260px; height: 260px; }
  .search-card { width: 100%; }
}

@media (max-width: 600px) {
  .hero { flex-direction: column; text-align: center; }
  .hero-copy { width: 100%; }
  .hero-bowl { width: 220px; height: 220px; margin-top: 20px; }
  .hero h1 { font-size: 36px; }
}
</style>
