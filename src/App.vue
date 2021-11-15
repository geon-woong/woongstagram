<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="goHome">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="nextPage">Next</li>
    </ul>
    <img src="./assets/wlogo.png" class="logo" />
  </div>
  <Container :post="post" />
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import post from "./data";
import { mapMutations, mapState } from "vuex";
import axios from "axios";
axios
  .get("https://codingapple1.github.io/vue/more1.json")
  .then(function (result) {
    console.log(result);
  });

export default {
  name: "App",
  data() {
    return {
      post,
    };
  },
  components: {
    Container,
  },
  props: {},
  computed: {
    name() {
      return this.$store.state;
    },
    ...mapState(["step", "goHome"]),
    // ...mapState({ 데이터: "post" }),
  },
  methods: {
    ...mapMutations(["한살더하기", "nextPage", "upload"]),
  },
};
</script>

<style>
@import "style.css";
</style>
