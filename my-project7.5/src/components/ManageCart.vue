<template>
  <div>
    <h2>Кошик покупок</h2>
    <p v-if="cartItems && cartItems.length === 0" id="wideCart">Кошик порожній</p>
    <ul v-if="cartItems && cartItems.length > 0">
      <li v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" :alt="item.name" width="50" />
        {{ item.name }} - {{ item.price }} грн
        <button @click="removeItem(index)">Видалити</button>
      </li>
    </ul>
    <p v-if="cartItems && cartItems.length > 0" id="totalPricee">Загальна сума: {{ totalPrice }}</p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const cartItems = inject("cartItems", []);
    const totalPrice = inject("totalPrice", 0);
    const removeItem = inject("removeItem", () => {});

    console.log("Injected cartItems:", cartItems); // діагностика

    return { cartItems, totalPrice, removeItem };
  },
};
</script>
<style scoped>
ul{
    list-style: none;
    text-align: center;
    margin: 0 auto;
}
h2{
    text-align:center;
    font-weight: bold;

}
button{
    color: black;
    background-color: red;
    border: 2px solid grey;
    font-weight: bold;
}
#totalPricee{
    text-align: center;
    font-weight:bold;
}
li{
    gap: 30vw;

}
#wideCart{
    text-align:center;
    font-weight:bold;
}
</style>