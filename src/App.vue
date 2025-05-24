<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";

const navigationItems = ["Home", "About", "Skills", "Homelab", "Contact"];
</script>

<template>
  <router-view>
    <portfolio-section
      :id="navigationItems[0]"
      class="bg-background-darkest text-white"
    >
      <header>
        <nav>
          <ul class="flex justify-center">
            <NavItem
              v-for="navigationItem of navigationItems"
              :title="navigationItem"
            />
          </ul>
        </nav>
      </header>
      <main></main>
    </portfolio-section>
    <portfolio-section
      :id="navigationItems[1]"
      class="bg-background-dark text-white"
    >
    </portfolio-section>
  </router-view>
</template>

<style scoped></style>
