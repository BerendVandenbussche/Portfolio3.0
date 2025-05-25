<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section>
    <div class="w-full h-screen flex justify-center items-center py-12">
      <div class="w-fit">
        <img
          src="/images/MeBlob.png"
          alt="A blue colored blob with a picture of myself"
        />
        <div class="mx-12 -mt-24">
          <h1 class="text-4xl">
            {{ t("home.name") }}<br />
            {{ t("home.surname") }}
          </h1>
          <h2 class="font-normal">{{ t("home.position") }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
