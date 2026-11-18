<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment(event) {
  count.value++
  alert(`You clicked me ${JSON.stringify(event)} times.`)
}
</script>

<template>
<form action="">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
    <button type="submit" @click="(event)=> { event.preventDefault(); alert('Form submitted!') }">
      Submit
    </button>
</form>

  <button @click="increment">You clicked me {{ count }} times.</button>
</template>