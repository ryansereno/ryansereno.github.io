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

const softwareArticles = props.features.filter(
  (feature) => feature.tags?.includes("software"),
);
const creativeArticles = props.features.filter(
  (feature) => feature.tags?.includes("poetry"),
);
const otherArticles = props.features.filter(
  (feature) => feature.tags?.includes("philosophy"),
);
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container">
      <ul class="items">
        <i style="color: gray">Software and ML</i>
        <li
          v-for="feature in softwareArticles"
          :key="feature.title"
          class="item"
        >
          <a
            :href="feature.link"
            rel="noreferrer"
            style="display: block; width: 100%"
            >{{ feature.title }}
            <!--<Badge v-for="tag in feature.tags" type="tip" :text="tag" />-->
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <ul class="items">
        <i style="color: gray">Poetry and Stories</i>
        <li
          v-for="feature in creativeArticles"
          :key="feature.title"
          class="item"
        >
          <a
            :href="feature.link"
            rel="noreferrer"
            style="display: block; width: 100%"
            >{{ feature.title }}
            <!--<Badge v-for="tag in feature.tags" type="tip" :text="tag" />-->
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <ul class="items">
        <i style="color: gray">Other</i>
        <li v-for="feature in otherArticles" :key="feature.title" class="item">
          <a
            :href="feature.link"
            rel="noreferrer"
            style="display: block; width: 100%"
            >{{ feature.title }}
            <!--<Badge v-for="tag in feature.tags" type="tip" :text="tag" />-->
          </a>
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
  margin-bottom: 24px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: -8px;
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
