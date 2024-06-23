<template>
  <div class="container">
    <div class="hero">
      <p style="line-height: 36px; max-width: 576px">
        I write about software, machine learning
        <img
          style="height: 24px; display: inline; vertical-align: middle"
          alt="loss-gradient"
          src="../markdown/assets/loss-gradient.png"
        />, art
        <img
          style="height: 30px; display: inline; vertical-align: middle"
          alt="framed-painting"
          src="../markdown/assets/framed-painting.png"
        />,
        <span style="font-family: cursive">poetry,</span>
        and frugality.
      </p>
      <p style="font-size: 0.7em; opacity: 0.7; padding-top: 0.7em">
        <i
          >Art, Science, and Software are the true manifestations of the magic
          we dreamed of as children.</i
        >
      </p>
    </div>
    <ArticleList :features="frontmatter.features" />
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import ArticleList from "./ArticleList.vue";

const { frontmatter } = useData();
</script>

<style scoped>
.hero {
  font-size: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
}
.container {
  margin: 0 auto;
  max-width: 600px;
  padding: 0 24px;
}
@media (min-width: 640px) {
  .hero {
    font-size: 24px;
  }
  .container {
    padding: 0 0;
  }
}
</style>
