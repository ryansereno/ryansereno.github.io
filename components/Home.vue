<template>
  <div class="container">
    <div class="left-content">
      <div class="hero">
        <p style="line-height: 36px">
          I write about software, machine learning
          <span style="white-space: nowrap">
            <img
              style="height: 24px; display: inline; vertical-align: middle"
              alt="loss-gradient"
              src="../markdown/assets/loss-gradient.png"
            />,
          </span>
          <span style="white-space: nowrap">
            art
            <img
              style="height: 30px; display: inline; vertical-align: middle"
              alt="framed-painting"
              src="../markdown/assets/framed-painting.png"
            />,
          </span>
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
    <div class="right-content">
      <img
        :src="currentImage"
        alt="Painting"
        class="main-painting"
        @click="goToMuseum"
      />
    </div>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { ref, watch, onMounted } from "vue";
import ArticleList from "./ArticleList.vue";
import BearPainting from "../markdown/assets/bear2.png";
import RabbitPainting from "../markdown/assets/rabbit2.png";
import { useRouter } from "vitepress";

const router = useRouter();

function goToMuseum() {
  router.go("/museum");
}

const { frontmatter, isDark } = useData();

const currentImage = ref(RabbitPainting);

watch(
  isDark,
  (newValue) => {
    currentImage.value = newValue ? BearPainting : RabbitPainting;
  },
  { immediate: true },
);

// Ensure correct image on initial client-side render
onMounted(() => {
  currentImage.value = isDark.value ? BearPainting : RabbitPainting;
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  min-height: calc(100vh - 48px); /* Subtract padding from viewport height */
}
.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero {
  font-size: 20px;
  padding-bottom: 24px;
}
.main-painting {
  max-width: 85%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    min-height: auto;
  }
  .right-content {
    order: -1;
    padding: 24px 0;
  }
  .hero {
    font-size: 18px;
  }
}
@media (min-width: 640px) {
  .hero {
    font-size: 24px;
  }
}
</style>
