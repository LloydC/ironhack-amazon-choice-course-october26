<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})
</script>
<template>
    <div class="user">
        <h2>User {{ name }}</h2>
        <p>This is the User email: {{ email }}</p>
    </div>
</template>
    