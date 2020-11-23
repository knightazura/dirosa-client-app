<template>
  <div id="right-side" class="pt-0">
    <div class="grid finish-page">
      <div
        class="finish-page__content flex flex-col justify-center items-center"
      >
        <quran-illustration></quran-illustration>
        <h1 class="finish-page__title">Alhamdulillah</h1>
        <p class="text-center">
          Insya Allah kami akan segera menghubungi Anda kembali melalui email
          dan nomor.
        </p>
        <p class="text-center mt-1">Login untuk melihat status pembelajaran.</p>
        <button class="main-button w-full mt-2 py-2 focus:outline-none">
          Login
        </button>
        <button class="secondary-button w-full" @click="backToHome">
          Halaman Awal
        </button>
      </div>
      <footer class="flex flex-col pb-3 text-xs text-center text-gray-500">
        <span>&copy; Rumah Qur'an Wahdah Islamiyah</span>
        <span>DKI Jakarta & Depok - 2020</span>
      </footer>
    </div>
  </div>
</template>

<script>
import Session from '@/mixins/session'
import QuranIllustration from '@/components/illustrations/QuranFinishPage'

export default {
  components: {
    QuranIllustration,
  },
  mixins: [Session],
  data() {
    return {
      words: '',
    }
  },
  created() {
    // Check the class type and implementation to
    // decide the finalize words
    console.log('HEY HEY HEY!!!')
    this.words = 'HEY HEY HEY!!!'
  },
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()
  },
  methods: {
    backToHome() {
      this.$nuxt.$router.push('/')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fondamento&display=swap');

.finish-page {
  grid-template-rows: calc(100vh - 48px) max-content;
}

.finish-page__title {
  @apply text-2xl font-bold pt-4 mb-2;
  font-family: 'Fondamento', cursive;
}
</style>
