<template>
  <main id="container">
    <sidebar v-if="$device.isDesktop || $device.isTablet"></sidebar>
    <mobile-header v-else></mobile-header>
    <Nuxt />
  </main>
</template>

<script>
import Session from '../mixins/session'
import Sidebar from '../components/sidebar'
import MobileHeader from '../components/mobile-header'

export default {
  components: {
    Sidebar,
    MobileHeader,
  },
  mixins: [Session],
  mounted() {
    // from mixins@Session
    const session = this.getSession()

    if (
      !this.checkSession(session) &&
      session.rg &&
      this.$route.name === 'pengisian-biodata'
    ) {
      this.$nuxt.$router.push('/pemilihan-waktu-belajar')
    }
  },
}
</script>
