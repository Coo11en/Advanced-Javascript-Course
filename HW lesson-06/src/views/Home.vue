<template>
  <div>
    <section class="products">
      <filter-container></filter-container>
      <div class="container product-wrap">
        <ul class="products-list">
          <product-card></product-card>
        </ul>
        <pagination></pagination>
      </div>
    </section>
  </div>
</template>

<script>
import FilterContainer from "../components/FilterContainer.vue";
import Pagination from "../components/Pagination.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard, Pagination, FilterContainer },
  name: "Home",
};
</script>
