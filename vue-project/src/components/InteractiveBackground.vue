<template>
    <canvas ref="canvas" class="interactive-bg"></canvas>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const canvas = ref<HTMLCanvasElement | null>(null)
  let ctx: CanvasRenderingContext2D | null = null
  let animationFrameId: number
  
  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
  }
  
  const particles: Particle[] = []
  const config = {
    particleCount: 100,
    maxDistance: 150,
    mouseRadius: 200,
  }
  
  let mouse = { x: null as number | null, y: null as number | null }
  
  function initParticles() {
    particles.length = 0
    if (!canvas.value) return
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.value.width,
        y: Math.random() * canvas.value.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      })
    }
  }
  
  function handleMouseMove(e: MouseEvent) {
    if (!canvas.value) return
    const rect = canvas.value.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }
  
  function animate() {
    if (!ctx || !canvas.value) return
  
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
    // update and draw particles
    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
  
      if (p.x < 0 || p.x > canvas.value!.width) p.vx = -p.vx
      if (p.y < 0 || p.y > canvas.value!.height) p.vy = -p.vy
  
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, 2, 0, Math.PI * 2)
      ctx!.fillStyle = '#fff'
      ctx!.fill()
    })
  
    // draw lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.hypot(dx, dy)
        if (dist < config.maxDistance) {
          // only draw the line if one of the particles is near the mouse
          if (mouse.x !== null && mouse.y !== null) {
            const d1 = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y)
            const d2 = Math.hypot(particles[j].x - mouse.x, particles[j].y - mouse.y)
            if (d1 < config.mouseRadius || d2 < config.mouseRadius) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / config.maxDistance})`
              ctx.stroke()
            }
          }
        }
      }
    }
  
    animationFrameId = requestAnimationFrame(animate)
  }
  
  onMounted(() => {
    if (!canvas.value) return
  
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    ctx = canvas.value.getContext('2d')
    initParticles()
    window.addEventListener('mousemove', handleMouseMove)
    animate()
  
    window.addEventListener('resize', () => {
      if (canvas.value) {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
        initParticles()
      }
    })
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(animationFrameId)
  })
  </script>
  
  <style scoped>
  .interactive-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #000;
  }
  </style>