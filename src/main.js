import "./assets/main.css";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { createI18n } from "vue-i18n";
import * as englishTranslations from "@/translations/en.json";
import * as dutchTranslations from "@/translations/nl.json";
import VueFeather from "vue-feather";
import App from "./App.vue";

const i18n = createI18n({
  locale: "en",
  fallbackLng: "en",
  messages: {
    en: englishTranslations,
    nl: dutchTranslations,
  },
});

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
        top: 80,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

createApp(App)
  .use(router)
  .use(i18n)
  .component(VueFeather.name, VueFeather)
  .mount("#app");
