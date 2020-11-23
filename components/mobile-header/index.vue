<template>
  <div id="mobile-header">
    <template v-if="$route.name !== 'index'">
      <NuxtLink :to="headerProps.backRoute">
        <arrow-left-icon></arrow-left-icon>
      </NuxtLink>
      <h1 class="pl-3 flex-grow">{{ headerProps.title }}</h1>
    </template>
    <template v-else>
      <h1 class="mx-auto">{{ headerProps.title }}</h1>
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
          return { title: 'Pemilihan Kelas', backRoute: '/pengisian-biodata' }
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
