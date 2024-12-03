<template>
  <body>
    <div class="container">
      <div class="left-section">
        <h3>Everything at 39!</h3>
        <h1>UNCLE BREW</h1>
        <p>COFFEE | MILKTEA | ICE CREAM</p>
        <button class="signup-btn" @click="goToSignUp">Sign Up</button>
      </div>
      <div class="right-section">
        <form class="login-form" @submit.prevent="login">
          <h2>Login</h2>
          <div class="input-group">
            <input type="text" v-model="username" placeholder="username" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="password" required />
          </div>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <!-- Display error message -->
          <button class="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const login = () => {
  errorMessage.value = ''

  const storedUser = JSON.parse(localStorage.getItem('user')) || []

  const user = storedUser.find(
    (credentials) =>
      credentials.username === username.value && credentials.password === password.value,
  )

  if (user) {
    localStorage.setItem('isAuthenticated', 'true') // Store authentication status
    alert(`Welcome ${user.username}`)
    router.push('/')
  } else {
    errorMessage.value = 'Account does not exist. Please sign up.' // Show error message
  }
}

const goToSignUp = () => {
  router.push('/Signin')
}
</script>

<style scoped>
/* Your existing styles */
body {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  background-color: #ffffff;
}

.container {
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 1;
  background-color: #ccaf94;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.left-section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
}

.left-section h1 {
  font-size: 40px;
  color: black;
}

.left-section p {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  color: black;
}

.signup-btn {
  background-color: transparent;
  border: 1px solid #140707;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.signup-btn:hover {
  background-color: rgb(231, 196, 168);
  color: #0e0606;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-image: url(../assets/coffee.avif);
  background-size: cover; /* Adjust size to cover the entire section */
  background-position: center;
  background-repeat: no-repeat;
}

.login-form {
  border: 2px solid #663f3f;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #000000;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 2px solid #663f3f;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;
}

.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
}

.remember-me input {
  margin-right: 10px;
}

.login-btn {
  background-color: #834343;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Times New Roman', Times, serif;
}

.login-btn:hover {
  background-color: #5e2c2c;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
