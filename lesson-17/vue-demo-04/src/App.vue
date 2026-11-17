<script setup>
import { ref } from 'vue'
const seen = ref(false) // { value: false }
const type = ref('D') // { value: 'A' }
const items = ref([{ message: "Foo" }, { message: "Bar" }]);

</script>

<template>
  <h1>You did it!</h1>
  <p v-if="seen">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <div v-if="Math.random() > 0.5">
    Now you see me
  </div>
  <div v-else>
    Now you don't
  </div>

  <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

<ul>
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
</template>

<style scoped></style>
