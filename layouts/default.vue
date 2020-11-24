<template>
  <main id="container">
    <sidebar></sidebar>
    <mobile-header v-if="!finishJoinedPage"></mobile-header>
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
  computed: {
    finishJoinedPage() {
      return this.$route.name === 'selesai'
    }
  },
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
