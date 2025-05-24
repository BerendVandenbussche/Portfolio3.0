<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";

const navigationItems = ["Home", "About", "Skills", "Homelab", "Contact"]
</script>

<template>
  <portfolio-section class="bg-background-darkest text-white">
    <header>
    <nav>
      <ul class="flex justify-center">
        <NavItem v-for="navigationItem of navigationItems" :title="navigationItem"/>

      </ul>
    </nav>

    </header>
    <main>

    </main>
  </portfolio-section>
  <portfolio-section class="bg-background-dark text-white">

  </portfolio-section>


</template>

<style scoped>

</style>
