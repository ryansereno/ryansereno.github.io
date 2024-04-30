import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ryan Sereno",
  description: "A VitePress Site",
  srcDir: "markdown",
  //mpa: true,
  markdown: {
    math: true,
    theme: {
      light: "catppuccin-macchiato",
      dark: "night-owl",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      //{ text: "Home", link: "/" },
      //{ text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      //      {
      //        text: "Examples",
      //        items: [
      //          { text: "Markdown Examples", link: "/markdown-examples" },
      //          { text: "Runtime API Examples", link: "/api-examples" },
      //        ],
      //      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ryansereno" },
      { icon: "twitter", link: "https://twitter.com/ry_serene" },
    ],
    aside: false,
  },
  transformHead({ assets }) {
    const myFontFile = assets.find(
      (file) => /ClassicXtraRound-Medium\.\w+\.ttf/,
    ); // Adjust regex to match .ttf file
    if (myFontFile) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: myFontFile,
            as: "font",
            type: "font/ttf", // Correct MIME type for TTF fonts
            crossorigin: "anonymous", // Set appropriate value for crossorigin
          },
        ],
      ];
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL("../components/ArticleList.vue", import.meta.url),
          ),
        },
      ],
    },
  },
});
