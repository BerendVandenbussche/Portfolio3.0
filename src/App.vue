<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactItem from "@/components/contact/ContactItem.vue";
import HomeSectionTemplate from "@/components/sectionTemplates/HomeSectionTemplate.vue";
import AboutSectionTemplate from "@/components/sectionTemplates/AboutSectionTemplate.vue";
import HomeLabSectionTemplate from "@/components/sectionTemplates/HomeLabSectionTemplate.vue";
import SkillsSectionTemplate from "@/components/sectionTemplates/SkillsSectionTemplate.vue";
import { computed } from "vue";
import Menu from "@/components/menu/Menu.vue";
import { useNavigation } from "@/composables/useNavigation.js";
import Logo from "@/components/Logo.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const { getNavigationItems, toggleMobileMenu, isMobileMenuOpen } =
  useNavigation();
const navigationItems = computed(() => getNavigationItems());
</script>

<template>
  <div class="bg-darkest text-text">
    <header class="fixed top-0 bg-darkest-see-trough w-full z-10">
      <nav class="flex justify-between md:justify-center items-center p-4">
        <Logo />
        <ul class="hidden md:flex justify-center">
          <NavItem
            v-for="navItem in navigationItems"
            :key="navItem"
            :title="navItem"
          />
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        <button
          class="cursor-pointer p-4 md:hidden"
          @click="toggleMobileMenu()"
        >
          <vue-feather type="menu" class="stroke-text" />
        </button>
      </nav>
    </header>
    <transition>
      <Menu v-if="isMobileMenuOpen" />
    </transition>
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
        <SkillsSectionTemplate />
      </template>

      <template v-if="index === 3">
        <HomeLabSectionTemplate />
      </template>
    </portfolio-section>
    <footer class="flex justify-center p-2">
      <contact-item
        icon-name="mail"
        link="mailto:contact@berendvandenbussche.be"
      />
      <contact-item
        icon-name="linkedin"
        link="https://www.linkedin.com/in/berend-vandenbussche-43b19b184/"
      />
      <contact-item
        icon-name="facebook"
        link="https://www.facebook.com/berend.vandenbussche"
      />
      <contact-item
        icon-name="github"
        link="https://github.com/BerendVandenbussche"
      />
    </footer>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>
