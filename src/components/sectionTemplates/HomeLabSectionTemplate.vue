<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div>
    <h1 class="text-theme">Homelab</h1>
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <img
        class="h-[500px] pb-12"
        src="/images/construction.svg"
        alt="Under construction"
      />
      <h2>{{ t("homelab.under-construction") }}</h2>
    </div>
  </div>
</template>

<style scoped></style>
