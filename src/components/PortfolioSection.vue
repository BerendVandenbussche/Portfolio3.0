<script setup>
defineProps({
  sectionTitle: String,
});
</script>

<template>
  <div :id="sectionTitle" class="min-h-screen p-6">
    <slot></slot>
  </div>
</template>

<style scoped></style>
