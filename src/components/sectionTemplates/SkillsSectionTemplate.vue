<script setup lang="ts">
import { BubbleUi } from "vue-bubble-ui";
import ProjectItem from "@/components/projects/ProjectItem.vue";

const options = {
  size: 200,
  minSize: 75,
  gutter: 14,
  numCols: 4,
  fringeWidth: 200,
  yRadius: 200,
  xRadius: 200,
  cornerRadius: 100,
  showGuides: false,
  compact: true,
  gravitation: 0,
};

const technologies = [
  {
    name: "Vue",
    backgroundColor: "#0f607f",
    textColor: "white",
  },
  {
    name: "Docker",
    backgroundColor: "#5daaf6",
    textColor: "white",
  },
  {
    name: "Typescript",
    backgroundColor: "#1181c4",
    textColor: "white",
  },
  {
    name: "Python",
    backgroundColor: "#4ca2e2",
    textColor: "white",
  },
  {
    name: "Swift",
    backgroundColor: "#184b89",
    textColor: "white",
  },
  {
    name: "Graphql",
    backgroundColor: "#138fd7",
    textColor: "white",
  },
  {
    name: "Tailwind",
    backgroundColor: "#015b84",
    textColor: "white",
  },
  {
    name: "React",
    backgroundColor: "#124f73",
    textColor: "white",
  },
  {
    name: "Html",
    backgroundColor: "#1c6579",
    textColor: "white",
  },
  {
    name: "Css",
    backgroundColor: "#3f92d2",
    textColor: "white",
  },
];
</script>

<template>
  <div>
    <h1 class="text-theme pb-4">Skills & projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-24">
      <div class="w-full pb-4 h-[50vh] md:h-screen">
        <bubble-ui :items="technologies" :options="options">
          <template #item="{ item, bubble }">
            <div
              class="technologyBubble"
              :style="{ backgroundColor: `${item.backgroundColor}d0` }"
            >
              <div
                class="technologyContainer"
                :style="{ opacity: bubble.bubbleSize }"
              >
                <img
                  :src="`/images/technologies/${item.name.toLowerCase()}.svg`"
                  :alt="`${item.name} logo`"
                />
                <p class="technologyName" :style="{ color: item.textColor }">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </template>
        </bubble-ui>
      </div>
      <ProjectItem
        project-name="Elody"
        project-image="/images/projects/elody.svg"
        project-url="https://elody.eu"
      />
    </div>
  </div>
</template>

<style scoped>
.technologyBubble {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  height: 200px;
  transition: opacity 0.1s ease;
}

.technologyBubble:hover {
  opacity: 0.5;
}

.technologyContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.1s ease;
  pointer-events: none;
}

.technologyName {
  text-align: center;
  font-size: 14pt;
  margin: 0 0 6px 0;
  font-weight: 1000;
  max-width: 150px;
}

img {
  width: 50px;
  margin-bottom: 10px;
}
</style>
