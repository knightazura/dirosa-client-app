<template>
  <main id="container">
    <Sidebar v-if="$device.isDesktop || $device.isTablet" />
    <MobileHeader v-else />
    <Nuxt />
  </main>
</template>

<script>
import Session from '../mixins/session';
import Sidebar from '../components/sidebar';
import MobileHeader from '../components/mobile-header';

export default {
  components: {
    Sidebar,
    MobileHeader
  },
  mixins: [Session],
  mounted() {
    // from mixins@Session
    let session = this.getSession()

    if (
      !this.checkSession(session)
      && session.rg 
      && this.$route.name === 'pengisian-biodata'
    ) {
      this.$nuxt.$router.push('/pemilihan-waktu-belajar')
    }
  }
}
</script>
