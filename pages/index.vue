<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="landing-page-container">
      <div class="w-3/4 md:w-1/2 mx-auto">
        <welcome-illustration></welcome-illustration>
      </div>
      <div class="stimulus-section mt-4 mb-2">
        <p class="leading-relaxed mb-2">Bagi anda yang saat ini belum bisa membaca Al-Qur’an atau ingin memperbaiki kualitas bacaan, kami mempunyai solusi untuk anda.</p>
        <p>DIROSA, program belajar membaca Al-Qur’an khusus untuk orang dewasa. Daftarkan diri anda sekarang!</p>
      </div>
      <div class="method-introduction-section my-2">
        <h3 class="method-introduction--title font-bold text-2xl mb-2">Apa itu DIROSA?</h3>
        <p class="leading-relaxed mb-2">DIROSA (Dirasah Orang Dewasa) merupakan metode belajar membaca Al-Qur'an khusus bagi orang dewasa yang belum bisa membaca sama sekali, yang dikelola secara sitematis, berjenjang dan berlangsung terus-menerus. Adapun tujuan Dirosa untuk:
        </p>
        <ol class="list-decimal ml-4 leading-relaxed">
          <li>Memberikan kemampuan kepada peserta (remaja dan orang dewasa) agar mampu membaca Al-Qur’an dengan baik, lancar dan benar sesuai dengan kaidah ilmu tajwid.</li>
          <li>Memberikan pengenalan dan pengajaran tentang dasar – dasar keilmuan islam.</li>
        </ol>
      </div>
      <div class="advantages-section my-2">
        <h3 class="advantages--title font-bold text-2xl mb-2">Keunggulan DIROSA</h3>
        <ol class="list-decimal ml-4 leading-relaxed">
          <li>Dirancang khusus bagi kaum muslimin pemula (pria, wanita, remaja , orang dewasa, lansia, muallaf)</li>
          <li>Metode yang mudah dan cepat (20x pertemuan)</li>
          <li>Pembinaan hingga lancar membaca Al-Qur’an</li>
          <li>Bimbingan materi dasar keislaman</li>
          <li>Sangat cocok bagi pemula maupun yang sudah bisa membaca Al-Qur’an</li>
        </ol>
      </div>
      <NuxtLink class="main-button px-3 p-2 my-2" to="/pengisian-biodata">Daftar Sekarang</NuxtLink>
      <div>&nbsp;</div>
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
