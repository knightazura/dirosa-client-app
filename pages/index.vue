<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="landing-page-container">
      <welcome-illustration
        :custom-class="'w-3/4 md:w-1/2'"
      ></welcome-illustration>
      <div class="stimulus-section mt-4 mb-2">
        Bagi anda yang saat ini belum bisa membaca Al-Qur’an atau ingin memperbaiki kualitas bacaan anda, kami mempunyai solusi untuk anda. DIROSA, program belajar membaca Al-Qur’an khusus untuk orang dewasa. Daftarkan diri anda segera!
      </div>
      <NuxtLink class="main-button px-3 p-2 my-2" to="/pengisian-biodata">Daftar Sekarang</NuxtLink>
      <div class="method-introduction-section my-2">
        <h3 class="method-introduction--title font-bold text-lg mb-2">Apa itu DIROSA?</h3>
        DIROSA (Dirasah Orang Dewasa) merupakan metode belajar membaca Al-Qur'an khusus bagi orang dewasa (pria wanita; remaja , orang dewasa, kakek nenek, muallaf) yang belum bisa membacanya sama sekali dan pola pembinaan Islam, yang dikelola secara sitematis, berjenjang dan berlangsung terus-menerus. Adapun tujuan Dirosa untuk:
        <ol>
          <li>Memberikan kemampuan kepada pesersa( remaja dan orang dewasa) agar mampu membaca al-Qur’an dengan baik, lancar dan benar sesuai dengan kaidah ilmu tajwid.</li>
          <li>Memberikan pengenalan dan pengajaran tentang dasar – dasar keilmuan islam.</li>
        </ol>
      </div>
      <div class="advantages-section my-2">
        <h3 class="advantages--title font-bold text-lg mb-2">Keunggulan DIROSA</h3>
        <ol class="list-decimal ml-4">
          <li>Dirancang khusus bagi kaum muslimin pemula (pria wanita; remaja , orang dewasa, lansia, muallaf)</li>
          <li>Metode yang mudah dan cepat (20x pertemuan)</li>
          <li>Pembinaan hingga lancar membaca al-Qur’an</li>
          <li>Bimbingan materi dasar keislaman</li>
          <li>Sangat cocok bagi pemula maupun yang sudah bisa membaca al-Qur’an</li>
        </ol>
      </div>
      <NuxtLink class="main-button px-3 p-2 my-2" to="/pengisian-biodata">Daftar Sekarang</NuxtLink>
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
