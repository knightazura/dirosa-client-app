<template>
  <div id="mobile-header">
    <template v-if="!['index', 'pemilihan-waktu-belajar'].some(routeName => $route.name === routeName)">
      <NuxtLink :to="headerProps.backRoute">
        <arrow-left-icon></arrow-left-icon>
      </NuxtLink>
      <h1 class="pl-3 font-bold flex-grow">{{ headerProps.title }}</h1>
    </template>
    <template v-else>
      <h1 class="mx-auto font-bold">{{ headerProps.title }}</h1>
    </template>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon,
  },
  computed: {
    headerProps() {
      switch (this.$route.name) {
        case 'pengisian-biodata':
          return { title: 'Pengisian Biodata', backRoute: '/' }
        case 'pemilihan-waktu-belajar':
          return { title: 'Kelas & Jadwal Belajar' }
        default:
          return { title: "Rumah Qur'an Wahdah Islamiyah" }
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/mobile-header.scss';
</style>
