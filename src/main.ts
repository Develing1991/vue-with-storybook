import { createApp } from "vue";
import { createPinia } from "pinia";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORU_BOOK_KEY,
  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.use(createPinia());
app.use(router);

app.mount("#app");
