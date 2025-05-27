<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const currentAge = computed(
  () => new Date().getFullYear() - new Date("02/28/2000").getFullYear(),
);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-24">
    <div>
      <h1 class="text-theme">About me</h1>
      <div class="p-2">
        <p>
          🎂:
          {{ `${t("about.birthday", { currentAge })}` }}
        </p>
        <p>📱: {{ t("about.phone") }}</p>
        <p>
          📧:
          <a class="underline" href="mailto:contact@berendvandenbussche.be">
            contact@berendvandenbussche.be
          </a>
        </p>
        <p>🚘: {{ t("about.drivers-license") }}</p>
        <p>💻: {{ t("about.operating-systems") }}</p>
      </div>
      <div class="pt-12">
        {{ t("about.about-me-text-1") }}<br /><br />
        {{ t("about.about-me-text-2") }}
        <router-link class="underline" to="#Homelab">
          {{ t("about.about-me-link-1") }}
        </router-link>
        <br /><br />
        {{ t("about.about-me-text-3") }}
        <a class="underline" href="https://inuits.eu" target="_blank">
          {{ t("about.about-me-link-2") }}</a
        >.
      </div>
    </div>
    <div class="hidden h-full md:flex items-center overflow-hidden">
      <svg
        class="hover:scale-125 transform-cpu transition-all ease-in-out duration-300"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-theme"
          d="M55.7,-16.9C62,1.3,49.9,26.6,29,42.4C8.1,58.2,-21.7,64.5,-42.2,51.2C-62.8,37.9,-74.2,5,-65.6,-16.2C-57.1,-37.5,-28.5,-47.2,-1.9,-46.5C24.7,-45.9,49.4,-35,55.7,-16.9Z"
          transform="translate(100 100)"
        />
        <text
          x="100"
          y="100"
          text-anchor="middle"
          dominant-baseline="middle"
          class="text-sm fill-white font-bold"
        >
          {{ t("about.hello") }}
          <tspan x="97" dy="1.2em">Berend 👋</tspan>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
