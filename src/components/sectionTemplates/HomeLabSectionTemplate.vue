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
    name: "Nginx",
    icon: "/images/homelab/nginx.svg",
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
    icon: "/images/homelab/cloudflare.svg",
  },
  {
    name: "Matter server",
    icon: "/images/homelab/matter.svg",
  },
  {
    name: "Mosquitto MQTT",
    icon: "/images/homelab/mosquitto.svg",
  },
  {
    name: "Zigbee2MQTT",
    icon: "/images/homelab/zigbee2mqtt.svg",
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
        class="grid grid-cols-[50px_1fr] md:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr] border-solid border-2 w-[60vw] md:max-w-[700px] h-[50vh] rounded-4xl"
      >
        <div class="flex flex-row justify-center items-center -rotate-90">
          <img
            src="/images/technologies/docker.svg"
            alt="Docker logo"
            class="h-6 pr-2"
          />
          <h3>Docker</h3>
        </div>
        <div
          class="flex justify-center items-center max-h-full overflow-y-auto"
        >
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] max-h-[90%] border-solid border-2 rounded-4xl p-4 gap-4 overflow-y-scroll"
          >
            <div
              v-for="software in homelabSoftware"
              class="border-solid border-2 p-2 rounded-xl hover:border-theme"
            >
              <h4 class="pb-2">{{ software.name }}</h4>
              <div class="flex justify-center items-center">
                <img
                  :src="software.icon"
                  :alt="`${software.name} logo`"
                  class="h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
