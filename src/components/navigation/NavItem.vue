<script setup lang="ts">
defineProps({
  title: String
})

</script>

<template>
<li class="p-4">
  <router-link :to="`#${title}`">{{title}}</router-link>
</li>
</template>

<style scoped>

</style>