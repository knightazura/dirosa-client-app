<template>
  <div id="right-side" class="right-side__with-headerbar">
    <!-- LOADER -->
    <content-loader
      v-if="loading"
      :width="300"
      :height="150"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="9" rx="0" ry="0" width="300" height="64" /> 
      <rect x="0" y="83" rx="0" ry="0" width="300" height="19" />
    </content-loader>
    <!-- MAIN CONTENT -->
    <template v-else>
      <!-- Candidate status -->
      <div v-if="hasBeenJoined && !Object.is(candidate, null)" class="temporary-joinied-status mb-2">
        <div class="tmpjs-class-info">
          <p v-html="candidate.registration.status_desc" class="font-bold text-center"></p>
        </div>
        <div class="candidate-info">
          <h3 class="font-bold text-xl">{{ candidate.full_name }}</h3>
          <span class="text-sm text-gray-700">{{ candidate.registration.class_type }} ({{ candidate.registration.implementation }})</span>
          <div :class="frequencyClasses">
            <div
              v-for="(schedule, sci) in candidate.selected_schedule"
              :key="sci"
              :class="
                [
                  'item-content cursor-pointer',
                  sci !== candidate.selected_schedule.length - 1
                    ? 'border-r border-gray-400'
                    : '',
                ].join(' ')
              "
            >
              <div class="item-content__day">{{ schedule.days }}</div>
              <div class="item-content__time">{{ schedule.time }}</div>
            </div>
          </div>
        </div>
        <div class="offering-section flex flex-col justify-center">
          <div v-if="candidate.registration.status === 'WL'">
            <p class="mt-4">Ajak teman untuk berbagi kebaikan dan kelas bisa segera dimulai.</p>
            <p class="mt-1">Dapatkan juga gratis biaya "Starter Kit" dengan minimal mengajak dua orang teman ikut belajar.</p>
          </div>
          <div v-else-if="candidate.registration.status === 'SOON'">
            <p class="mt-4">Ajak teman untuk berbagi kebaikan dan dapatkan gratis biaya "Starter Kit" dengan minimal mengajak dua orang teman ikut belajar.</p>
          </div>
          <p class="mt-4 text-center">Bagikan link dibawah</p>
          <p class="mt-1 p-2 bg-orange-200 text-orange-700 font-bold text-center">{{ candidate.referral_url }}</p>
          <nuxt-link to="/cad-sg/nyLw90">Coba</nuxt-link>
        </div>
      </div>

      <!-- Landing page -->
      <div v-if="!hasBeenJoined" class="landing-page-container">
        <div class="w-3/4 md:w-1/2 mx-auto">
          <welcome-illustration></welcome-illustration>
        </div>
        <div class="stimulus-section mt-4 mb-2">
          <p class="leading-relaxed mb-2">Bagi anda yang saat ini belum bisa membaca Al-Qur’an atau ingin memperbaiki kualitas bacaan, kami mempunyai solusi untuk anda.</p>
          <p>DIROSA, program belajar membaca Al-Qur’an khusus untuk orang dewasa. <nuxt-link class="text-green-700" to="/pengisian-biodata">Daftarkan diri anda sekarang!</nuxt-link></p>
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
        <NuxtLink v-if="!hasBeenJoined" class="main-button px-3 p-2 my-2" to="/pengisian-biodata">Daftar Sekarang</NuxtLink>
        <button v-else @click="newRegister" class="main-button px-3 p-2 my-2">Daftar Baru</button>
        <div>&nbsp;</div>
      </div>
    </template>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import ENV from '@/services/env'
import Session from '@/mixins/session'
import WelcomeIllustration from '@/components/landing-page/welcome-illustration'

export default {
  components: {
    ContentLoader,
    WelcomeIllustration,
  },
  mixins: [Session],
  async mounted() {
    // from mixins@Session
    this.setupCurrentSession()

    if (this.hasBeenJoined) {
      const currentSession = this.getSession()
      const candidateInfo = await this.$axios.get(`${ENV.base_url}/cad/${currentSession.c.id}`)

      this.candidate = candidateInfo.data
    }
    this.loading = false
  },
  data() {
    return {
      loading: true,
      candidate: null
    }
  },
  computed: {
    frequencyClasses() {
      if (this.candidate) {
        let frequencies = this.candidate.selected_schedule.length;

        return frequencies === 3 || frequencies === 2
          ? `schedule-selector__item-freq-${frequencies} schedule-selector__item`
          : 'flex flex-col schedule-selector__item'
      } else {
        return ''
      }
    },
  },
  methods: {
    newRegister() {
      // from mixins@Session
      this.clearSession()

      this.$router.push('/pengisian-biodata')
    }
  }
}
</script>

<style lang="scss">
  .schedule-selector__title { @apply font-bold }

  .schedule-selector__item {
    @apply py-1 my-3 border border-gray-400 rounded;
    transition: all .17s ease-in-out;

    .item-content {
      @apply flex flex-col px-1 text-center;

      .item-content__time { @apply text-sm }
    }
  }

  .schedule-selector__item-freq-2 { @apply grid grid-cols-2 }
  .schedule-selector__item-freq-3 { @apply grid grid-cols-3 }
</style>