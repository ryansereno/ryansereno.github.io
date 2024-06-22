<template>
  <div class="hero">
    <p style="line-height: 36px; max-width: 576px; opacity: 0.7">
      I write about software, machine learning
      <img
        style="height: 24px; display: inline; vertical-align: middle"
        src="../markdown/assets/loss-gradient.png"
      />, art
      <img
        style="height: 30px; display: inline; vertical-align: middle"
        src="../markdown/assets/framed-painting.png"
      />,
      <span style="font-family: cursive">poetry,</span>
      and frugality.
    </p>
  </div>
  <ArticleList :features="frontmatter.features" />
</template>

<script setup>
import { useData } from "vitepress";
import ArticleList from "./ArticleList.vue";

const { frontmatter } = useData();
</script>

<style scoped>
.hero {
  font-size: 20px;
  padding-top: 75px;
  padding-bottom: 50px;
  margin: 0 auto;
  max-width: 600px;
  padding: 24px;
}
@media (min-width: 640px) {
  .hero {
    padding-left: 0;
    padding-right: 0;
    font-size: 24px;
  }
}
</style>
