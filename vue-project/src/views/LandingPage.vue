<template>
  <div class="landing-page">
    <h1>Hi, I'm Rasmus</h1>
    <p>Im a Software Engineering student at SDU Odense. You can check out my projects and socials below</p>
    <Redirects />
    <InteractiveBackground />
  </div>
</template>

<script setup lang="ts">
import Redirects from '../components/Redirects.vue'
import InteractiveBackground from '../components/InteractiveBackground.vue'
</script>

<style scoped>
.landing-page {
  grid-column: 1 / -1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  color: #fff;
}
</style>