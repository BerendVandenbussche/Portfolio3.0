<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactItem from "@/components/contact/ContactItem.vue";
import HomeSectionTemplate from "@/components/sectionTemplates/HomeSectionTemplate.vue";
import AboutSectionTemplate from "@/components/sectionTemplates/AboutSectionTemplate.vue";

const navigationItems = ["Home", "About", "Skills", "Homelab"];
</script>

<template>
  <div class="bg-darkest text-text">
    <header class="fixed top-0 bg-darkest-see-trough w-full">
      <nav class="flex justify-center items-center p-4">
        <div
          class="relative mr-[2rem] flex justify-center items-center w-12 h-12 rounded-lg bg-theme font-bold text-white"
        >
          <p>BV.</p>
        </div>
        <ul class="flex justify-center">
          <NavItem
            v-for="navItem in navigationItems"
            :key="navItem"
            :title="navItem"
          />
        </ul>
      </nav>
    </header>
    <portfolio-section
      v-for="(navigationItem, index) in navigationItems"
      :key="index"
      :section-title="navigationItem"
      :class="[index % 2 === 0 ? 'bg-darkest' : 'bg-dark', 'text-text']"
    >
      <template v-if="index === 0">
        <HomeSectionTemplate />
      </template>

      <template v-if="index === 1">
        <AboutSectionTemplate />
      </template>

      <template v-if="index === 2">
        <h1 class="text-theme">Skills & projects</h1>
      </template>

      <template v-if="index === 3">
        <h1 class="text-theme">Homelab</h1>
      </template>
    </portfolio-section>
    <footer class="flex justify-center p-2">
      <contact-item icon-name="mail" />
      <contact-item icon-name="linkedin" />
      <contact-item icon-name="facebook" />
      <contact-item icon-name="github" />
    </footer>
  </div>
</template>
