<script setup lang="ts">
defineProps({
  sectionTitle: String,
});
</script>

<template>
  <div :id="sectionTitle" class="min-h-screen p-4">
    <slot></slot>
  </div>
</template>

<style scoped></style>
