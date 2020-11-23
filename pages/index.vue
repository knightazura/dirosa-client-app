<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="landing-page-container">
      <welcome-illustration
        :custom-class="'w-3/4 md:w-1/2'"
      ></welcome-illustration>
      <NuxtLink to="/pengisian-biodata">Pengisian Biodata</NuxtLink>
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
