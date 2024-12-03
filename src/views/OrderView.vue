<template>
  <div class="container">
    <div class="cart-container">
      <h1>ORDER SUMMARY</h1>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="orders.length === 0">
            <td colspan="5" class="no-item">No Item Added</td>
          </tr>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ order.name }}</td>
            <td>₱ {{ order.size }}</td>
            <td>{{ order.quantity }}</td>
            <td>₱ {{ order.totalPrice }}</td>
            <td>
              <button @click="removeOrder(index)" class="remove-order">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="grand-total-label">Grand Total:</td>
            <td class="grand-total">₱ {{ grandTotal }}</td>
            <td>
              <button @click="deleteAllOrders" class="delete-all">Delete All</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="cart-actions">
        <button class="add-items" @click="addItems">Add Items</button>
        <button class="place-order" @click="placeOrder">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const orders = ref([]);

const loadOrders = () => {
  const storedOrders = JSON.parse(localStorage.getItem('orderData')) || [];
  orders.value = Array.isArray(storedOrders) ? storedOrders : [storedOrders];
};

const removeOrder = (index) => {
  orders.value.splice(index, 1);
  localStorage.setItem('orderData', JSON.stringify(orders.value));
};

const deleteAllOrders = () => {
  orders.value = [];
  localStorage.setItem('orderData', JSON.stringify([]));
};

const grandTotal = computed(() => {
  return orders.value.reduce((total, order) => total + order.totalPrice, 0);
});

onMounted(() => {
  loadOrders();
});

const addItems = () => {
  // Your logic to add items
};

const placeOrder = () => {
  // Your logic to place the order
};
</script>

<style scoped>
.container {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.cart-container {
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.cart-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.cart-table .no-item {
  text-align: center;
  color: #888;
  padding: 20px;
  font-style: italic;
}

.cart-table tfoot {
  font-weight: bold;
}

.cart-table .grand-total-label {
  text-align: right;
}

.cart-table .grand-total {
  text-align: center;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.cart-actions .delete-all,
.cart-actions .place-order,
.cart-actions .add-items {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.cart-actions .place-order {
  background-color: #ffb266;
  color: #0f0303;
  margin-left: 10px;
}

.cart-actions .add-items {
  background-color: rgb(97, 204, 97);
  color: #0a0505;
}

.cart-table .delete-all {
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
}

.delete-all:hover {
  background-color: #ff4d4d;
}
</style>
