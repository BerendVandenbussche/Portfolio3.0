<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const homelabSoftware = [
  {
    name: "Homeassistant",
    icon: "/images/homelab/homeassistant.svg",
  },
  {
    name: "Immich",
    icon: "/images/homelab/immich.svg",
  },
  {
    name: "Ngnix",
    icon: "/images/homelab/ngnix.svg",
  },
  {
    name: "Apache",
    icon: "/images/homelab/apache.svg",
  },
  {
    name: "Certbot",
    icon: "/images/homelab/certbot.svg",
  },
  {
    name: "Cloudflare DDNS",
    icon: "/images/homelab/cloudflareDdns.svg",
  },
  {
    name: "Matter server",
    icon: "/images/homelab/matter.svg",
  },
  {
    name: "Mosquitto MQTT",
    icon: "/images/homelab/mosquitto.svg",
  },
];
</script>

<template>
  <div>
    <h1 class="text-theme">Homelab</h1>
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <div class="flex pb-4">
        <div class="flex items-center pr-2">
          <img
            src="/images/homelab/raspberryPi.svg"
            alt="Raspberry pi logo"
            class="h-6"
          />
        </div>

        <h2>Raspberry pi 4b 8GB</h2>
      </div>

      <div
        class="grid grid-cols-[100px_1fr] md:grid-cols-[200px_1fr] border-solid border-2 border-light w-[60vw] md:max-w-[700px] h-[50vh] rounded-4xl"
      >
        <div class="flex flex-row justify-center items-center -rotate-90">
          <img
            src="/images/technologies/docker.svg"
            alt="Docker logo"
            class="h-6 pr-2"
          />
          <h3>Docker</h3>
        </div>
        <div class="flex justify-center items-center">
          <div
            class="grid grid-cols-3 w-[90%] h-[80%] border-solid border-2 border-light rounded-4xl p-4 gap-4 overflow-y-auto"
          >
            <div
              v-for="software in homelabSoftware"
              class="border-solid border-2 p-2 rounded-xl"
            >
              <h4>{{ software.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
