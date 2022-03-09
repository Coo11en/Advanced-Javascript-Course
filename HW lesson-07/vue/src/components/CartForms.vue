<template>
  <div class="cart-forms">
    <form action="" class="cart-form">
      <p class="cart-form-name">SHIPPING ADRESS</p>
      <input
        type="text"
        name=""
        id=""
        class="cart-form-input cart-form-country"
        placeholder="Bangladesh"
        required
      />
      <input
        type="text"
        name=""
        id=""
        class="cart-form-input cart-form-state"
        placeholder="State"
        required
      />
      <input
        type="text"
        name=""
        id=""
        class="cart-form-input cart-form-type"
        placeholder="Postcode / Zip"
        required
      />
      <button class="cart-form-btn">GET A QUOTE</button>
    </form>

    <div class="cart-form-grand">
      <p class="cart-sub">SUB TOTAL $900</p>
      <p class="cart-grand">GRAND TOTAL $900</p>
      <button class="cart-main-btn">PROCEED TO CHECKOUT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartForms",
};
</script>

<style>
</style>