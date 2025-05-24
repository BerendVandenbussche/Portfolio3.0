<script setup>
import NavItem from "@/components/navigation/NavItem.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactItem from "@/components/contact/ContactItem.vue";

const navigationItems = ["Home", "About", "Skills", "Homelab", "Contact"];
</script>

<template>
  <div class="bg-dark">
    <portfolio-section
      v-for="(navigationItem, index) in navigationItems"
      :key="index"
      :section-title="navigationItem"
      :class="[index % 2 === 0 ? 'bg-darkest' : 'bg-dark', 'text-white']"
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
        <section>
          <div class="w-full h-full flex justify-center py-12">
            <div class="w-fit">
              <img
                src="/images/MeBlob.png"
                alt="A blue colored blob with a picture of myself"
              />
              <div class="mx-12 -mt-24">
                <h1 class="text-4xl">
                  Berend<br />
                  Vandenbussche
                </h1>
                <h2 class="font-normal">Frontend developer</h2>
              </div>
            </div>
          </div>
        </section>
      </template>

      <template v-if="index === 1">
        <h1 class="text-theme">About me</h1>
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
