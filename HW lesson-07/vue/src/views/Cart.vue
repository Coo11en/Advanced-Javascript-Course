<template>
  <nav-bar></nav-bar>
  <main class="cart-main container">
    <div class="cart-card">
      <ul class="card-cart-link">
        <cart-main
          v-for="product of cart"
          :key="product.id"
          :data="product"
        ></cart-main>
        <group-btn-cart></group-btn-cart>
      </ul>
    </div>
    <cart-forms></cart-forms>
  </main>
</template>

<script>
import CartForms from "../components/CartForms.vue";
import CartMain from "../components/CartMain.vue";
import GroupBtnCart from "../components/GroupBtnCart.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { CartMain, NavBar, GroupBtnCart, CartForms },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  name: "Cart",
};
</script>

<style>
</style>