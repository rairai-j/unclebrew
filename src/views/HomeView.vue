<template>
  <div class="home-container">
    <div class="hero-section">
      <h2 class="title">Cold, Smooth & Tasty</h2>
      <p class="subtitle">COFFEE | MILKTEA | ICE CREAM</p>
      <button class="cta-button" @click="productmenuloc">Order Now</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const productmenuloc = () => {
  router.push('/Product')
}
</script>

<style scoped>
/* Move the root variables to App.vue or a global CSS file */

.home-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background: url('../assets/home.jpg') no-repeat center center;
  background-size: cover;
}

.hero-section {
  text-align: center;
  max-width: 80vw;
  margin: 0 auto;
  margin-left: 100px;
}

.title {
  font-size: 8vh;
  font-weight: 700;
  margin-bottom: 2vh;
  color: rgb(248, 221, 221);
  text-shadow: 0.15vw 0.15vw 0.3vw rgba(14, 197, 84, 0.1);
}

.subtitle {
  font-size: 3vh;
  letter-spacing: 0.2em;
  color: rgb(248, 230, 230);
  font-weight: bold;
  margin-bottom: 3vh;
  text-shadow: 0.15vw 0.15vw 0.3vw rgba(0, 0, 0, 0.1);
}

.cta-button {
  font-size: 2.5vh;
  padding: 1.5vh 3vw;
  background-color: rgb(247, 206, 153);
  color: rgb(59, 54, 54);
  border: none;
  border-radius: 2vw;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-2px);
  background-color: rgb(236, 183, 112);
}

/* Responsive design */
@media (max-width: 768px) {
  .title {
    font-size: 6vh;
  }

  .subtitle {
    font-size: 3vh;
  }

  .cta-button {
    font-size: 2vh;
    padding: 1.2vh 2.4vw;
  }
}
</style>
