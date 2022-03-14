<template>
  <div class="reg-form">
    <form action="">
      <h4 class="reg-head-forms">Your Name</h4>
      <input class="reg-form-input" type="text" placeholder="First Name" />
      <input class="reg-form-input" type="text" placeholder="Last Name" />
      <div class="gender">
        <input
          type="radio"
          name="gender"
          id="gender-btn-Male"
          class="gender-btn"
        />
        <label for="gender-btn-Male" class="gender-name">Male</label>
        <input
          type="radio"
          name="gender"
          id="gender-btn-Female"
          class="gender-btn"
        />
        <label for="gender-btn-Female" class="gender-name">Female</label>
      </div>
      <h4 class="reg-head-forms">Login details</h4>
      <input class="reg-form-input" type="text" placeholder="Email" />
      <input class="reg-form-input" type="text" placeholder="Password" />
      <p class="reg-text-paswd">
        Please use 8 or more characters, with at least 1 number and a mixture of
        uppercase and lowercase letters
      </p>
      <button class="reg-form-btn" type="submit">JOIN NOW</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegForm",
};
</script>

<style>
</style>