<template>
  <promo></promo>
  <categories></categories>
  <section class="products">
    <div class="container product-wrap">
      <h2 class="header-products">Fetured Items</h2>
      <p class="text-products">
        Shop for items based on what we featured in this week
      </p>
      <div class="container product-wrap">
        <ul class="products-list">
          <product-card
            v-for="product of catalog"
            :key="product.id"
            :data="product"
          ></product-card>
        </ul>
      </div>
    </div>
    <div class="center">
      <router-link to="catalog" class="product-link"
        >Browse All Product</router-link
      >
    </div>
  </section>
  <features></features>
</template>

<script>
import Categories from "../components/Categories.vue";
import Promo from "../components/Promo.vue";
import ProductCard from "../components/ProductCard.vue";
import Features from "../components/Features.vue";
export default {
  components: { Promo, Categories, ProductCard, Features },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>

<style>
</style>