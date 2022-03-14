<template>
  <section class="navbar">
    <div class="container navbar-wrap">
      <h1 class="title-page">REGISTRATION</h1>
    </div>
  </section>
  <div class="container reg-collumn">
    <reg-form></reg-form>
    <reg-about></reg-about>
  </div>
</template>

<script>
import RegAbout from "../components/RegAbout.vue";
import RegForm from "../components/RegForm.vue";
export default {
  components: { RegForm, RegAbout },
  name: "Regisration",
};
</script>

<style>
</style>