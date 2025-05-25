<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, watch } from "vue";
import { useBrowserStorage } from "@/composables/useBrowserStorage";

const { t, locale, availableLocales } = useI18n();
const { getStorageItem, setStorageItem } = useBrowserStorage();

onMounted(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) locale.value = savedLanguage;
});

watch(
  () => locale.value,
  () => {
    setStorageItem("preferredLanguage", locale.value);
  },
);
</script>

<template>
  <select v-model="locale">
    <option v-for="localeOption of availableLocales" :value="localeOption">
      {{ localeOption }}
    </option>
  </select>
</template>

<style scoped></style>
