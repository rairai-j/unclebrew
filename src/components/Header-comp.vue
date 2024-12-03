<template>
  <header class="header">
    <h1>
      <img src="../assets/logo.jpg" alt="Uncle Brew Logo" class="logo" />
      Uncle Brew
    </h1>

    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/Product">Products</RouterLink></li>
        <li><RouterLink to="/Order">Order</RouterLink></li>
        <li v-if="isAuthenticated">
          <!-- Removed direct Logout -->
        </li>
        <li v-else>
          <RouterLink to="/Login">Login</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="user-icon" v-if="isAuthenticated" @click="toggleDropdown">
      <img src="../assets/user.png" alt="User Icon" class="user-avatar" />
      <div v-if="dropdownVisible" class="dropdown-menu">
        <RouterLink to="" class="dropdown-item"></RouterLink>
        <RouterLink to="/Profile" class="dropdown-item">Profile</RouterLink>
        <a href="#" class="dropdown-item" @click="logout">Log out</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')
const dropdownVisible = ref(false)
const router = useRouter()

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const logout = (event) => {
  event.preventDefault()
  localStorage.setItem('isAuthenticated', 'false')
  isAuthenticated.value = false
  alert('You have been logged out successfully.')
  dropdownVisible.value = false
  router.push('/Login')
}

watchEffect(() => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  background-color: #cfb7a1ce;
  font-family: monospace;
  font-size: 20px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Lucida Handwriting', 'Pacifico', cursive;
}

.logo {
  width: 80px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;
}

nav {
  margin-left: auto;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  color: black;
  padding: 0;
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #020101;
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;
}

nav ul li a:hover {
  color: #f86060ce;
  text-decoration: underline;
}

.user-icon {
  margin-left: 1rem;
  position: relative; /* Required for dropdown positioning */
  cursor: pointer;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f86060ce;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  z-index: 10;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #020101;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f86060ce;
  color: white;
}
</style>
