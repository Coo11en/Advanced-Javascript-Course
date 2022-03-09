<template>
  <div>
    <nav-bar></nav-bar>
    <filter-container></filter-container>
    <div class="container product-wrap">
      <ul class="products-list">
        <product-card
          v-for="product of catalog"
          :key="product.id"
          :data="product"
        ></product-card>
      </ul>
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import FilterContainer from "../components/FilterContainer.vue";
import Pagination from "../components/Pagination.vue";
import ProductCard from "../components/ProductCard.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { ProductCard, Pagination, FilterContainer, NavBar },
  name: "Home",
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
  // mounted() {
  //   console.log(this.$store.getters.getCatalog);
  // },
};
</script>
<style lang="sass">
$main-color: #f16d7f
$main-color-std: #ffffff

@mixin text-main
  font-size: 16px
  line-height: 19px

@mixin text-min
  font-size: 14px
  line-height: 17px
</style>
