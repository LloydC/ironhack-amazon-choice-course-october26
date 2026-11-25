<script setup>
import { ref } from 'vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import topCitiesData from './data/top-cities.json'

const topCities = ref(topCitiesData)

const loggedInUser = ref({
  name: 'John Doe',
  avatarUrl: 'https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc',
})
const loggedIn = ref(true)
</script>

<template>
  <SiteHeader :loggedIn="loggedIn" :userName="loggedInUser.name" :avatarUrl="loggedInUser.avatarUrl"   />

  <main>
    <RouterView />
  </main>

  <SiteFooter :cities="topCities" />
</template>

<style>
:root { font-family: Arial, Helvetica, sans-serif; color: #212b36; background: #fff; }
* { box-sizing: border-box; }
body { margin: 0; }
button, input { font: inherit; }
button { cursor: pointer; border: 0; }
</style>
