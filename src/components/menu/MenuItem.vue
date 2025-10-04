<script setup>
defineProps({
  navigationItem: String,
});
</script>

<template>
  <router-link :to="`#${navigationItem}`" class="py-2 px-4">
    {{ navigationItem }}
  </router-link>
</template>

<style scoped></style>
