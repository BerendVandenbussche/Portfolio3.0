<script setup lang="ts">
import { computed } from "vue";
import { useNavigation } from "@/composables/useNavigation";
import MenuItem from "@/components/menu/MenuItem.vue";
import Logo from "@/components/Logo.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const { getNavigationItems, toggleMobileMenu } = useNavigation();
const navigationItems = computed(() => getNavigationItems());
</script>

<template>
  <div class="fixed flex flex-col top-0 left-0 h-screen w-[70%] bg-dark z-10">
    <div class="pt-2 pb-4 px-4 cursor-pointer" @click="toggleMobileMenu()">
      <Logo />
    </div>

    <menu-item
      v-for="(navigationItem, index) of navigationItems"
      :class="[index % 2 === 0 ? 'bg-darkest' : 'bg-dark']"
      :navigation-item="navigationItem"
    />
    <language-switcher
      :class="[
        'px-4 mt-auto py-2',
        navigationItems.length % 2 === 0 ? 'bg-darkest' : 'bg-dark',
      ]"
    />
  </div>
</template>

<style scoped></style>
