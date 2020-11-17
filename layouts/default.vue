<template>
  <main id="container">
    <Sidebar v-if="$device.isDesktop || $device.isTablet" />
    <MobileHeader v-else />
    <Nuxt />
  </main>
</template>

<script>
import Sidebar from '../components/sidebar';
import MobileHeader from '../components/mobile-header';

export default {
  components: {
    Sidebar,
    MobileHeader
  }
}
</script>
