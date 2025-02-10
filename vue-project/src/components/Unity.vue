<template>
  <div class="unity-container">
    <div class="unity-content">
      <h2>A project i made</h2>
      <div class="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/placeholder"
          title="Horror VR Experience"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="game-details">
        <p>
         This is a placeholder for a project that i made
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.unity-container {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #222;
}

.unity-content {
  max-width: 800px;
  margin: 0 auto;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 1.5rem 0;
  border: 3px solid #fff;
  border-radius: 10px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.game-details h3 {
  margin-top: 1rem;
}

.game-details p {
  margin-top: 0.5rem;
}
</style>