<script setup>
defineProps({
  iconName: String,
  link: String,
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="flex justify-center items-center mx-2 bg-theme h-12 w-12 rounded-full cursor-pointer"
  >
    <vue-feather :type="iconName" stroke="#fff" />
  </a>
</template>

<style scoped></style>
