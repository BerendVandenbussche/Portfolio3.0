<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, watch } from "vue";
import { useBrowserStorage } from "@/composables/useBrowserStorage";
import { useNavigation } from "@/composables/useNavigation";

const { t, locale, availableLocales } = useI18n();
const { getStorageItem, setStorageItem } = useBrowserStorage();
const { isMobileMenuOpen, toggleMobileMenu } = useNavigation();

onMounted(() => {
  const savedLanguage = getStorageItem("preferredLanguage");
  if (savedLanguage) locale.value = savedLanguage;
});

watch(
  () => locale.value,
  () => {
    setStorageItem("preferredLanguage", locale.value);
    if (isMobileMenuOpen) toggleMobileMenu();
  },
);
</script>

<template>
  <select v-model="locale">
    <option v-for="localeOption of availableLocales" :value="localeOption">
      {{ t(`languages.${localeOption}`) }}
    </option>
  </select>
</template>

<style scoped></style>
