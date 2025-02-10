<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const showNavbar = ref(false) // set to false to hide nav
</script>

<template>
  <header v-if="showNavbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/redirects">Redirects</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
