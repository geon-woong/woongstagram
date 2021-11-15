<template>
  <div>
    <div class="" v-if="step == 0">
      <Post :post="post[i]" v-for="(a, i) in post" :key="i" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div class="upload-image"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="upload-image"></div>
      <div class="write">
        <textarea class="write-box">2일떄write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Post,
  },
  props: {
    post: Array,
  },
  computed: {
    name() {
      return this.$store.state;
    },
    ...mapState(["step"]),
  },
  methods: {
    ...mapMutations(["nextPage"]),
  },
};
</script>

<style>
</style>