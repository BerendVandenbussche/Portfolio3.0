import "./assets/main.css";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

const routes = [{ path: "/", component: App }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
