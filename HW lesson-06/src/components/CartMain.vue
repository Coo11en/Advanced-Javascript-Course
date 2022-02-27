<template>
  <main class="cart-main container">
    <div class="cart-card">
      <ul class="card-cart-link">
        <li class="card-cart-item">
          <img src="img/cart p1.png" alt="product-1" />
          <div class="card-cart-item-list">
            <h3 class="card-cart-item-name">MANGO PEOPLE T-SHIRT</h3>

            <ul class="card-cart-item-desc">
              <li class="cart-text cart-card-price">Price: $300</li>
              <li class="cart-text cart-card-color">Color: Red</li>
              <li class="cart-text cart-card-size">Size: Xl</li>
              <li class="cart-text cart-card-quanttext">
                Quantity: <span class="cart-text cart-card-quant">2</span>
              </li>
            </ul>
            <svg
              class="card-cart-item-close"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
              />
            </svg>
          </div>
        </li>
        <li class="card-cart-item">
          <img src="img/cart p2.png" alt="product-1" />
          <div class="card-cart-item-list">
            <h3 class="card-cart-item-name">MANGO PEOPLE T-SHIRT</h3>

            <ul class="card-cart-item-desc">
              <li class="cart-text cart-card-price">Price: $300</li>
              <li class="cart-text cart-card-color">Color: Red</li>
              <li class="cart-card-size">Size: Xl</li>
              <li class="cart-text cart-card-quanttext">
                Quantity: <span class="cart-text cart-card-quant">2</span>
              </li>
            </ul>
            <svg
              class="card-cart-item-close"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
              />
            </svg>
          </div>
        </li>
        <button class="btn-clear">CLEAR SHOPPING CART</button>
        <button class="btn-continue">CONTINUE SHOPPING</button>
      </ul>
    </div>

    <div class="cart-forms">
      <form action="" class="cart-form">
        <p class="cart-form-name">SHIPPING ADRESS</p>
        <input
          type="text"
          name=""
          id=""
          class="cart-form-input cart-form-country"
        />
        <input
          type="text"
          name=""
          id=""
          class="cart-form-input cart-form-state"
        />
        <input
          type="text"
          name=""
          id=""
          class="cart-form-input cart-form-type"
        />
        <button class="cart-form-btn">GET A QUOTE</button>
      </form>

      <div class="cart-form-grand">
        <p class="cart-sub">SUB TOTAL $900</p>
        <p class="cart-grand">GRAND TOTAL $900</p>
        <button class="cart-main-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "CartMain",
};
</script>

<style>
</style>