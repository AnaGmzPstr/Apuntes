<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <Nav/>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
