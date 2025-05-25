<script setup lang="ts">
import { useNavigation } from "@/composables/useNavigation";

defineProps({
  navigationItem: String,
});

const { toggleMobileMenu } = useNavigation();
</script>

<template>
  <router-link
    :to="`#${navigationItem}`"
    class="py-2 px-4"
    @click="toggleMobileMenu()"
  >
    {{ navigationItem }}
  </router-link>
</template>

<style scoped></style>
