<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="container">
      <div class="form-section">
        <h1>{{ props.product.name }}</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="size">Size:</label>
            <select id="size" v-model="size">
              <option value="">None</option>
              <option :value="39">Small</option>
              <option :value="50">Medium</option>
              <option :value="70">Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <select id="quantity" v-model="quantity">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <div class="addons-group">
            <label for="addons">Add-ons:</label>
            <select id="addons" v-model="addons">
              <option :value="0">None</option>
              <option :value="15">Coffee Jelly (+₱15)</option>
              <option :value="15">Pearl (+₱15)</option>
              <option :value="15">Ice Cream Float (+₱15)</option>
            </select>
          </div>

          <div class="price">Total Price: ₱{{ totalPrice }}</div>

          <div class="buttons">
            <button type="button" class="cancel" @click="resetForm">Cancel</button>
            <button type="submit" class="submit">Submit</button>
          </div>
        </form>
      </div>

      <div class="image-section">
        <img :src="product.image" :alt="product.image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close', 'submit'])

const size = ref('')
const quantity = ref(1)
const addons = ref(0)

const totalPrice = computed(() => {
  return (Number(size.value) + Number(addons.value)) * quantity.value
})

const closeModal = () => {
  emit('close')
}

const resetForm = () => {
  size.value = ''
  quantity.value = 1
  addons.value = 0
}

const submitForm = () => {
  const formData = {
    name: props.product.name,
    price: Number(size.value) + Number(addons.value),
    size: size.value,
    quantity: quantity.value,
    addons: addons.value,
    totalPrice: totalPrice.value,
  }

  // Retrieve existing orders from local storage, or initialize an empty array
  const storedOrders = JSON.parse(localStorage.getItem('orderData')) || []
  // Append new order
  storedOrders.push(formData)
  // Save updated orders to local storage
  localStorage.setItem('orderData', JSON.stringify(storedOrders))

  emit('submit', formData)
  resetForm()
  closeModal()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.container {
  background-color: #fff9f5;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(139, 69, 19, 0.15);
  padding: 30px;
  width: 800px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1001;
}

.form-section {
  flex: 1;
}

h1 {
  color: #8b4513;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  width: 95%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

select,
input[type='number'] {
  width: 100%;
  padding: 12px;
  border: 2px solid #d4a88c;
  border-radius: 8px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.1em;
  transition: border-color 0.3s ease;
  background-color: #fff9f5;
}

select:focus,
input[type='number']:focus {
  outline: none;
  border-color: #8b4513;
}

.price {
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  color: #6f4e37;
  position: relative;
  padding-bottom: 8px;
}

.price::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, transparent, #6f4e37);
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 20px;
}

button {
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.1em;
  transition: all 0.3s ease;
}

.cancel {
  background-color: #f0f0f0;
  color: #666;
}

.submit {
  background-color: #8b4513;
  color: #fff;
}

.cancel:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.submit:hover {
  background-color: #a0522d;
  transform: translateY(-2px);
}

.image-section {
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.image-section img {
  width: 22vw;
  height: 40vh;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.image-section img:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.addons-group {
  margin-bottom: 15px;
  width: 95%;
}

.addons-group select {
  width: 100%;
}
</style>
