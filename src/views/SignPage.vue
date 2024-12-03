<template>
  <body>
    <div class="form-container">
      <form @submit.prevent="register">
        <h2>Register</h2>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" placeholder="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="email@example.com" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="password" required />
        </div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <button type="submit" class="create">Create Account</button>
      </form>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

let user = []

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.'
  }
  const existingUsers = JSON.parse(localStorage.getItem('user')) || []
  if (existingUsers.some((u) => u.email === email)) {
    return 'Email is already registered. Use another email.'
  }
  return ''
}

const validateUsername = (username) => {
  if (username.length < 6) {
    return 'Username must be at least 6 characters long.'
  }
  if (/[^a-zA-Z0-9]/.test(username)) {
    return 'Username must not contain spaces or special characters.'
  }
  const existingUsers = JSON.parse(localStorage.getItem('user')) || []
  if (existingUsers.some((u) => u.username === username)) {
    return 'Username is already taken. Choose another one.'
  }
  return ''
}

const validatePassword = (password) => {
  if (password.length < 6) {
    return 'Password must be at least 6 characters long.'
  }
  if (!/[A-Z!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must include at least one uppercase letter or special character.'
  }
  if (/\s/.test(password)) {
    return 'Password must not contain spaces.'
  }
  return ''
}

const register = () => {
  errorMessage.value =
    validateUsername(username.value) ||
    validateEmail(email.value) ||
    validatePassword(password.value)

  if (errorMessage.value) {
    return
  }

  user = JSON.parse(localStorage.getItem('user')) || []

  user.push({
    username: username.value,
    email: email.value,
    password: password.value,
  })

  localStorage.setItem('user', JSON.stringify(user))
  alert('User registered successfully')
  router.push('/Login') // Redirect to login after registration
}
</script>

<style scoped>
/* Your existing styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  background: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  border: 1px solid #1b0f0f;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-family: 'Times New Roman', Times, serif;
}

.form-group {
  margin-bottom: 15px;
  font-family: 'Times New Roman', Times, serif;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='submit'] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #1b0f0f;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}

.create {
  width: 265px;
  height: 40px;
  background: #e97b77e7;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  color: black;
  font-size: medium;
  font-family: 'Times New Roman', Times, serif;
}

.create:hover,
.create:focus {
  box-shadow: 0 0 10px rgba(255, 78, 78, 0.808);
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
