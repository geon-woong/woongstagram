<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="`background-image:url(${post.userImage})`"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div
      class="post-body"
      :style="`background-image:url(${post.postImage})`"
    ></div>
    <div class="post-content">
      <p>like {{ post.likes }}</p>
      <p>
        <strong>{{ post.userId }}</strong> {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  // computed: {
  //   name() {
  //     return this.$store.state;
  //   },
  //   ...mapState({ 데이터: "post" }),
  // },
  props: {
    post: Array,
  },
};
</script>

<style>
</style>