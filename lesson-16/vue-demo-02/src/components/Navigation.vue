<script setup>
    import {ref} from 'vue'
    const isLoggedIn = ref(false)
    const food = ref('')

    const props = defineProps({
        msg: {
            type: String,
            required: true
        },
        hello: {
            type: String,
            default: 'Hello, Vue ;) !'
        }
    })
</script>

<template>
    <nav>
        <div class="logo">
            <img src="../assets/img/app-logo.png" alt="Vue logo" />
        </div>

        <div class="delivery-info">
            <p>Delivery to: {{ props.hello }} </p>
        </div>

        <div class="search-bar">
            <input type="text" placeholder="Food" v-model="food"/>
            <button>Login</button>
        </div>
    </nav>
</template>

<style scoped>
 nav {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
 }

</style>
