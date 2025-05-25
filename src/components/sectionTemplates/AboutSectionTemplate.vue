<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-24">
    <div>
      <h1 class="text-theme">About me</h1>
      <div class="p-2">
        <p>🎂: 28 februari 2000</p>
        <p>📱: +32 468 23 90 99</p>
        <p>
          📧:
          <a class="underline" href="mailto:contact@berendvandenbussche.be"
            >contact@berendvandenbussche.be</a
          >
        </p>
        <p>🚘: B license</p>
        <p>💻: MacOS & EndeavourOS</p>
      </div>
      <div class="pt-12">
        My journey in tech began in high school, where I explored Multimedia,
        gaining proficiency in the Adobe software suite and foundational HTML &
        CSS. I then pursued a Bachelor's degree in Media and Communication
        Technologies at Howest, specializing in Web & App Development. While
        this program prepared me as a full-stack developer, my primary passion
        and expertise lie in frontend development. That said, I'm always keen to
        expand my skillset and am open to learning new technologies.<br /><br />
        Speaking of passions, it might seem contradictory given my general
        disdain for traditional printers, but 3D printing is a serious hobby of
        mine! Beyond printing, I also enjoy managing my homelab, which includes
        a Raspberry Pi running Home Assistant, Immich and some other open source
        projects. Find more details about my homelab
        <router-link class="underline" to="#Homelab">here.</router-link>
        <br /><br />
        Currently, I'm applying this passion as an Open Source Consultant -
        Frontend Developer at
        <a class="underline" href="https://inuits.eu" target="_blank">Inuits</a
        >.
      </div>
    </div>
    <div class="hidden h-full md:flex items-center overflow-hidden">
      <svg
        class="hover:scale-125 transform-cpu transition-all ease-in-out duration-300"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-theme"
          d="M55.7,-16.9C62,1.3,49.9,26.6,29,42.4C8.1,58.2,-21.7,64.5,-42.2,51.2C-62.8,37.9,-74.2,5,-65.6,-16.2C-57.1,-37.5,-28.5,-47.2,-1.9,-46.5C24.7,-45.9,49.4,-35,55.7,-16.9Z"
          transform="translate(100 100)"
        />
        <text
          x="100"
          y="100"
          text-anchor="middle"
          dominant-baseline="middle"
          class="text-sm fill-white font-bold"
        >
          Hello, I am
          <tspan x="97" dy="1.2em">Berend 👋</tspan>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
