<template>
  <main id="container">
    <Sidebar />
    <Nuxt />
  </main>
</template>

<script>
import Sidebar from '../components/landing-page/Sidebar';

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
#container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
