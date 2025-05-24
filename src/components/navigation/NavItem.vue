<script setup lang="ts">
const props = defineProps({
  title: String
})

</script>

<template>
<li>
  <button class="p-4">{{title}}</button>
</li>
</template>

<style scoped>

</style>