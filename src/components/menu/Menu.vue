<script setup>
import { computed } from "vue";
import { useNavigation } from "@/composables/useNavigation";
import MenuItem from "@/components/menu/MenuItem.vue";
import Logo from "@/components/Logo.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const { getNavigationItems, toggleMobileMenu } = useNavigation();
const navigationItems = computed(() => getNavigationItems());
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-20" @click="toggleMobileMenu()">
    <div class="flex flex-col h-[100dvh] w-[70%] bg-dark">
      <div class="pt-2 pb-4 px-4 cursor-pointer">
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
  </div>
</template>

<style scoped></style>
