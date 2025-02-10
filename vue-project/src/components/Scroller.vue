<template>
  <div class="scroller">
    <section class="hero" :style="{ opacity: heroOpacity }">
      <slot name="hero"></slot>
    </section>
    <section class="new-panel" :style="{ opacity: newPanelOpacity }">
      <slot name="panel"></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrollY = ref(0)
const fadeDistance = 300

function updateScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', updateScroll))
onUnmounted(() => window.removeEventListener('scroll', updateScroll))

const heroOpacity = computed(() => Math.max(0, 1 - scrollY.value / fadeDistance))
const newPanelOpacity = computed(() => {
  const calculated = (scrollY.value - fadeDistance) / fadeDistance
  return calculated >= 0 ? Math.min(calculated, 1) : 0
})
</script>

<style scoped>
.scroller {
  overflow-x: hidden;
}

.hero,
.new-panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  transition: opacity 0.3s ease-out;
  color: #fff;
  padding: 2rem;
  height: 100vh;
}

.hero {
  background: transparent;
}

.new-panel {
  background-color: #333;
}
</style>