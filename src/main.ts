import { createApp } from "vue";
import { createPinia } from "pinia";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import Grid from "./components/GridView.vue";
import Page from "./components/PageView.vue";
import Teaser from "./components/TeaserView.vue";
import Feature from "./components/FeatureView.vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORY_BOOK_KEY,
  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.use(createPinia());
app.use(router);

// ...
app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);

app.mount("#app");
