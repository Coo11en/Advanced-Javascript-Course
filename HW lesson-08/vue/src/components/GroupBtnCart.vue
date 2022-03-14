<template>
  <div class="group-btn-cart">
    <button @click="onDelete" class="btn-cart btn-clear">
      CLEAR SHOPPING CART
    </button>
    <button class="btn-cart btn-continue">CONTINUE SHOPPING</button>
  </div>
</template>

<script>
export default {
  name: "GroupBtnCart",

  methods: {
    onDelete() {
      this.$store.dispatch("removeFromCart", this.data);
    },
  },
};
</script>

<style>
</style>