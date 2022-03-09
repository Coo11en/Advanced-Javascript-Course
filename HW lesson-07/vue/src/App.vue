<template>
  <div>
    <div class="full">
      <main-header></main-header>
      <router-view></router-view>
    </div>

    <features></features>
    <feedback></feedback>
    <footer-main></footer-main>
  </div>
</template>

<script>
import Features from "./components/Features.vue";
import Feedback from "./components/Feedback.vue";
import FooterMain from "./components/FooterMain.vue";
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    MainHeader,
    Features,
    Feedback,
    FooterMain,
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";
</style>