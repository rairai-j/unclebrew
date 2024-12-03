<template>
  <body>
    <!-- Navbar Section -->
    <!-- <nav class="navbar">
      <h1>EVERYTHING AT 39!!!</h1>
    </nav> -->

    <!-- Milk Tea Section -->
    <section id="milktea" class="product-category">
      <h1>Milk Tea</h1>
      <div class="product-container">
        <div class="product" v-for="mlktea in Milktea" :key="mlktea.id">
          <img :src="mlktea.image" :alt="mlktea.image" />
          <h3>{{ mlktea.name }}</h3>
          <p>${{ mlktea.price }}</p>
          <button class="add-to-cart" data-product="Panda Peal Milk Tea" @click="showmodal(mlktea)">
            Add to Cart
          </button>
        </div>
      </div>
    </section>

    <!-- Coffee Section -->
    <section id="coffee" class="product-category">
      <h1>Coffee</h1>
      <div class="product-container">
        <div class="product" v-for="cfe in Coffee" :key="cfe.id">
          <img :src="cfe.image" :alt="cfe.image" />
          <h3>{{ cfe.name }}</h3>
          <p>${{ cfe.price }}</p>
          <button class="add-to-cart" data-product="Americano Coffee" @click="showmodal(cfe)">
            Add to Cart
          </button>
        </div>
      </div>
    </section>

    <!-- Cone Swirl Section -->
    <section id="sundaeswirl" class="product-category">
      <h1>Sundae Swirl</h1>
      <div class="product-container">
        <div class="product" v-for="ss in sundaeswirl" :key="ss.id">
          <img :src="ss.image" :alt="ss.image" />
          <h3>{{ ss.name }}</h3>
          <p>${{ ss.price }}</p>
          <button class="add-to-cart" data-product="Creamy Vanilla Cone" @click="showmodal(ss)">
            Add to Cart
          </button>
        </div>
      </div>
    </section>

    <section id="coneswirl" class="product-category">
      <h1>Cone Swirl</h1>
      <div class="product-container">
        <div class="product" v-for="cs in coneswirl" :key="cs.id">
          <img :src="cs.image" :alt="cs.image" />
          <h3>{{ cs.name }}</h3>
          <p>${{ cs.price }}</p>
          <button class="add-to-cart" data-product="Creamy Vanilla Cone" @click="showmodal(cs)">
            Add to Cart
          </button>
        </div>
      </div>
      <div v-if="openmodal">
        <OpenProductsModal :product="selectedproduct" @close="offmodal"></OpenProductsModal>
      </div>
    </section>
  </body>
</template>

<script setup>
import { ref } from 'vue'
import OpenProductsModal from '../components/OpenProductsModal.vue'

const Milktea = [
  {
    id: 1,
    name: 'Panda Pearl',
    price: 39,
    image: 'src/assets/pandapearl.jpg',
  },
  {
    id: 2,
    name: 'Okinawa',
    price: 39,
    image: 'src/assets/okinawa.jpg',
  },
  {
    id: 3,
    name: 'Hokkaido',
    price: 39,
    image: 'src/assets/hokkaido.jpg',
  },
  {
    id: 4,
    name: 'Wintermelon',
    price: 39,
    image: 'src/assets/wintermelon.jpg',
  },
]

const Coffee = [
  {
    id: 5,
    name: 'Americano',
    price: 39,
    image: 'src/assets/americano.jpg',
  },
  {
    id: 6,
    name: 'Matcha Latte',
    price: 39,
    image: 'src/assets/matchalatte.jpg',
  },
  {
    id: 7,
    name: 'Spanish Latte',
    price: 39,
    image: 'src/assets/spanishlatte.jpg',
  },
  {
    id: 8,
    name: 'Caramel Macchiato',
    price: 39,
    image: 'src/assets/caramelmacchiato.jpg',
  },
  {
    id: 9,
    name: 'Vanilla Latte',
    price: 39,
    image: 'src/assets/vanillalatte.jpg',
  },
]

const sundaeswirl = [
  {
    id: 10,
    name: 'Cream Vanilla',
    price: 39,
    image: 'src/assets/creamvanilla.jpg',
  },
  {
    id: 11,
    name: 'Coffee Mocha',
    price: 39,
    image: 'src/assets/coffeemocha.jpg',
  },
  {
    id: 12,
    name: 'Milktea',
    price: 39,
    image: 'src/assets/milktea.jpg',
  },
]

const coneswirl = [
  {
    id: 13,
    name: 'Cream Vanilla',
    price: 39,
    image: 'src/assets/creamyvanllacone.jpg',
  },
  {
    id: 14,
    name: 'Coffee Mocha',
    price: 39,
    image: 'src/assets/coffeemochacone.jpg',
  },
  {
    id: 15,
    name: 'Milktea',
    price: 39,
    image: 'src/assets/milkteacone.jpg',
  },
]

const openmodal = ref(false)
const selectedproduct = ref(null)

const showmodal = (product) => {
  openmodal.value = true
  selectedproduct.value = product
}

const offmodal = () => {
  openmodal.value = false
  selectedproduct.value = null
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar styles */
.navbar {
  background-color: #f3e6db;
  padding: 20px 0;
  text-align: center;
}

.navbar h1,
.navbar h2 {
  color: black;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
}

/* Product Category Section */
.product-category {
  padding: 20px;
  background-color: #ffffff;
  margin: 20px 0;
}

.product-category h1 {
  text-align: center;
  color: #070a0c;
  font-family: 'Segoe Script', 'Lobster', cursive;
  font-size: 30px;
}

/* Product Container */
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Individual Product */
.product {
  background-color: #f8f8f8;
  padding: 15px;
  width: 200px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', Times, serif;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product img {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.product img:hover {
  transform: scale(1.05); /* Slightly enlarges the image */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adds a shadow for depth */
}

.product h3 {
  font-size: 20px;
  color: black;
}

.product p {
  color: #e74c3c;
  font-size: 16px;
  font-weight: bold;
}

.product button {
  background-color: #ccaf94;
  color: rgb(46, 41, 41);
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
  font-family: monospace;
  font-weight: bold;
}

.product button:hover {
  background-color: #dfcbb8;
}
</style>
