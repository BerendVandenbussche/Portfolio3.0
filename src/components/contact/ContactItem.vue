<script setup lang="ts">
defineProps({
  iconName: String,
});
</script>

<template>
  <button
    class="flex justify-center items-center mx-2 bg-theme h-12 w-12 rounded-full cursor-pointer"
  >
    <vue-feather :type="iconName" stroke="#fff" />
  </button>
</template>

<style scoped></style>
