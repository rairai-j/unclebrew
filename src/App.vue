<template>
  <Headercomp v-if="shownav" />
  <RouterView />
</template>

<script setup>
import Headercomp from './components/Header-comp.vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const shownav = computed(
  () => route.path !== '/Login' && route.path !== '/Signin' && route.path !== '/',
)
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}
main {
  padding: 1rem;
}
button {
  background-color: #6a4c42;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #5a3c32;
}
</style>
