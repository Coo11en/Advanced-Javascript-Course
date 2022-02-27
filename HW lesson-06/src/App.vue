<template>
  <div>
    <div class="full">
      <main-header></main-header>
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>

    <features></features>
    <feedback></feedback>
    <footer-main></footer-main>
  </div>
  <!-- <script src="./js/main.js"></script> -->
</template>

<script>
import style from "./assets/style/style.scss";
import Features from "./components/Features.vue";
import Feedback from "./components/Feedback.vue";
import FooterMain from "./components/FooterMain.vue";
import Footer from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";
import NavBar from "./components/NavBar.vue";
import Products from "./components/ProductCard.vue";

export default {
  components: {
    MainHeader,
    NavBar,
    Products,
    Features,
    Feedback,
    Footer,
    FooterMain,
  },
};
</script>

<style lang="scss">
</style>