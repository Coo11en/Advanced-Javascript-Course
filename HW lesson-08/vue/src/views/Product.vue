<template>
  <nav-bar></nav-bar>
  <slider></slider>
  <about></about>
  <div class="container product-wrap">
    <ul class="products-list">
      <product-card
        v-for="product of catalog.slice(0, 3)"
        :key="product.id"
        :data="product"
      ></product-card>
    </ul>
  </div>
</template>

<script>
import About from "../components/about.vue";
import NavBar from "../components/NavBar.vue";
import Slider from "../components/Slider.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { NavBar, Slider, About, ProductCard },
  name: "Product",
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>

<style>
</style>