<script setup>
    defineProps(['title', 'description', 'url']) // defineProps({ title: String, description: String, url: String })
</script>

<template>
  <h4><a :href="url" target="_blank">{{ title }}</a></h4>
  <p>{{ description }}</p>
</template>