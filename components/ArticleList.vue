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
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container">
      <ul class="items">
        <li v-for="feature in features" :key="feature.title" class="item">
          <a :href="feature.link" rel="noreferrer">{{ feature.title }}</a>
        </li>
      </ul>
    </div>
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

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: -8px;
}

.item {
  padding: 4px;
  width: 100%;
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
.item:hover {
  transform: scale(1.01);
  cursor: pointer;
}

.item:hover a {
  color: #337ab7;
  text-decoration: none;
}
</style>
