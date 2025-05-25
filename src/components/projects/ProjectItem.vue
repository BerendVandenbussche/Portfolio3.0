<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  projectName: String,
  projectImage: String,
  projectUrl: String,
  githubUrl: String,
});

const component = computed(() => {
  if (props.projectUrl) return "a";
  return "div";
});
</script>

<template>
  <component
    class="max-w-full md:max-w-[60%] bg-dark h-fit rounded-3xl"
    :is="component"
    :href="projectUrl"
    target="_blank"
  >
    <div
      class="flex justify-between items-center bg-theme p-4 rounded-t-3xl text-white"
    >
      <h3>{{ projectName }}</h3>
      <a v-if="githubUrl" :href="githubUrl" target="_blank">
        <vue-feather type="github" class="stroke-white" />
      </a>
    </div>
    <div class="flex justify-center p-4">
      <img
        class="max-w-[70%]"
        :src="projectImage"
        :alt="`Logo of ${projectName} project`"
      />
    </div>
  </component>
</template>

<style scoped></style>
