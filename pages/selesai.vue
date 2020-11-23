<template>
  <div id="right-side">
    ALHAMDULILLAH!
    Insya Allah kami akan segera menghubungi Anda kapan kelas dimulai.
  </div>
</template>

<script>
import Session from '@/mixins/session'

export default {
  mixins: [Session],
  created() {
    // Check the class type and implementation to
    // decide the finalize words
    console.log("HEY HEY HEY!!!")
    this.words = 'HEY HEY HEY!!!'
  },
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()
  },
  data() {
    return {
      words: ''
    }
  }
}
</script>

<style></style>
