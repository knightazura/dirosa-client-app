<template>
  <main id="container">
    <Sidebar />
    <Nuxt />
  </main>
</template>

<script>
import Sidebar from '../components/sidebar';

export default {
  components: {
    Sidebar
  }
}
</script>
