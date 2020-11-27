<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="landing-page-container">
      <welcome-illustration
        :custom-class="'w-3/4 md:w-1/2'"
      ></welcome-illustration>
      <NuxtLink class="main-button px-3 p-2 mt-4" to="/pengisian-biodata">Daftar Sekarang</NuxtLink>
    </div>
  </div>
</template>

<script>
import ENV from '@/services/env'
import Session from '@/mixins/session'
import WelcomeIllustration from '@/components/landing-page/welcome-illustration'

export default {
  components: {
    WelcomeIllustration,
  },
  mixins: [Session],
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()
  },
}
</script>
