<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";

export interface Feature {
  icon?: DefaultTheme.FeatureIcon;
  title: string;
  details: string;
  link?: string;
  linkText?: string;
  rel?: string;
  target?: string;
  tags?: string[];
}

const props = defineProps<{
  features: Feature[];
}>();

const categories = {
  "Software and ML": props.features.filter(
    (feature) => feature.tags?.includes("software"),
  ),
  "Poetry and Stories": props.features.filter(
    (feature) => feature.tags?.includes("poetry"),
  ),
  Other: props.features.filter(
    (feature) => feature.tags?.includes("philosophy"),
  ),
};
</script>

<template>
  <div v-for="(articles, category) in categories" :key="category">
    <ul class="items">
      <i :style="{ color: 'gray' }">{{ category }}</i>
      <li v-for="feature in articles" :key="feature.title" class="item">
        <a
          :href="feature.link"
          rel="noreferrer noopener"
          style="display: block; width: 100%"
        >
          {{ feature.title }}
          <!-- Uncomment if you want to display tags as badges -->
          <!-- <Badge v-for="tag in feature.tags" :key="tag" type="tip" :text="tag" /> -->
        </a>
      </li>
    </ul>
    <br />
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.item {
  padding: 2px;
  width: 100%;
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
.item:hover {
  transform: scale(1.005);
  cursor: pointer;
}

.item:hover a {
  color: #337ab7;
  text-decoration: none;
}
</style>
