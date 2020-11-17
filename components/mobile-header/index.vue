<template>
  <div id="mobile-header">
    <NuxtLink v-if="$route.name !== 'index'" :to='headerProps.backRoute'>
      <arrow-left-icon></arrow-left-icon>
    </NuxtLink>
    <h1>{{ headerProps.title }}</h1>
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
          break
        case 'pemilihan-waktu-belajar':
          return { title: 'Pemilihan Kelas', backRoute: '/pengisian-biodata' }
          break
        default:
          return { title: "Rumah Qur'an Wahdah Islamiyah" }
          break
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/mobile-header.scss';
</style>
