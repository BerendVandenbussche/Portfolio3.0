<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";

const navigationItems = ["Home", "About", "Skills", "Homelab", "Contact"];
</script>

<template>
  <div>
    <portfolio-section
      v-for="(navigationItem, index) in navigationItems"
      :key="index"
      :section-title="navigationItem"
      :class="index % 2 === 0 ? 'bg-darkest text-white' : 'bg-dark text-white'"
    >
      <template v-if="index === 0">
        <header>
          <nav>
            <div
              class="absolute top-2 left-2 flex justify-center items-center w-12 h-12 rounded-lg bg-theme font-bold"
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
        <main></main>
      </template>

      <template v-if="index === 1">
        <h1 class="font-bold text-theme">About me</h1>
      </template>
    </portfolio-section>
    <footer></footer>
  </div>
</template>
