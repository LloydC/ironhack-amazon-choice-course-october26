<script setup>
defineProps({
  loggedIn: {
    type: Boolean,
    default: false,
  },
  userName: {
    type: String,
    default: 'User',
  },
  avatarUrl: {
    type: String,
    default: 'https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc',
  },
})

const logout = () => {
  // Implement logout logic here
  console.log('User logged out');
  alert('User logged out');
}
</script>

<template>
  <header class="header">
   <RouterLink to="/" class="brand">
      <span class="brand-icon">🍴</span>
      <span>foodwagon</span>
    </RouterLink>
    <div class="delivery">
      <b>Deliver to:</b> <span>📍</span> Current Location
      <strong>Mohammadpur Bus Stand, Dhaka</strong>
    </div>
    <nav class="nav-actions">
      <a href="#">⌕ <strong>Search Food</strong></a>
      <!-- <form class="search-form" @submit.prevent>
        <input type="text" placeholder="Search food..." />
        <button type="submit">Search</button>
      </form> -->
      <div v-if="loggedIn" class="user-profile">
        <img v-if="avatarUrl" class="avatar" :src="avatarUrl" :alt="`${userName}'s avatar`" />
        <span v-else class="avatar avatar-placeholder" aria-hidden="true">👤</span>
        <span class="user-name">{{ userName }}</span>
        <button @click="logout" class="logout">Logout</button>
      </div>
      <button v-else class="login">👤 Login</button>
    </nav>
  </header>
</template>

<style scoped>
.header { height: 64px; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; padding: 0 7%; background: white; }
.brand { color: #f5a623; font-weight: 800; font-size: 20px; text-decoration: none; }
.brand-icon { color: #f97316; margin-right: 8px; }
.delivery { text-align: center; font-size: 12px; }
.delivery span { color: #f97316; }
.delivery strong { margin-left: 6px; }
.nav-actions { display: flex; justify-content: flex-end; gap: 20px; align-items: center; }
.nav-actions a { color: #212b36; text-decoration: none; font-size: 12px; }
.nav-actions a::first-letter { color: #f97316; }
.login { color: #f5a623; background: #fff8e8; border-radius: 6px; padding: 10px 14px; font-weight: 700; box-shadow: 0 2px 8px #f4d79b55; }
.user-profile { display: flex; align-items: center; gap: 8px; }
.avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.avatar-placeholder { display: grid; place-items: center; background: #fff8e8; }
.user-name { font-size: 12px; font-weight: 700; }

@media (max-width: 900px) {
  .header { grid-template-columns: 1fr auto; }
  .delivery { display: none; }
}

@media (max-width: 600px) {
  .header { padding: 0 16px; }
  .nav-actions a { display: none; }
}
</style>
