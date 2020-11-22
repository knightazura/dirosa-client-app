<template>
  <div id="right-side">
    <div class="form-course-option">
      <!-- Program types -->
      <div class="form-course-option__type-section">
        <div class="type-section__title">
          <h1 class="type-section__title-text">Jenis Kelas</h1>
          <div
            v-if="type.fillStatus"
            class="type-section__title-status"
            @click="type.fillStatus = false"
          >
            Ubah
          </div>
        </div>

        <!-- Form -->
        <div
          :class="
            ['type-section__form', type.fillStatus ? 'hidden' : ''].join(' ')
          "
        >
          <!-- Class type -->
          <div class="type-section__type-class">
            <!-- Klasikal option -->
            <div
              :class="
                [
                  'class-option',
                  type.activeClass === 1 ? 'class-option__active' : '',
                ].join(' ')
              "
              @click="type.activeClass = 1"
            >
              <div
                :class="
                  [
                    'option__check-icon-wrapper',
                    type.activeClass === 1 ? 'option__active' : '',
                  ].join(' ')
                "
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :stroke="type.activeClass === 1 ? '#FFFFFF' : '#1A5543'"
                    d="M13 3.37495L6.125 9.56245L3 6.74995"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Klasikal</p>
            </div>

            <!-- Private option -->
            <div
              :class="
                [
                  'class-option',
                  type.activeClass > 1 ? 'class-option__active' : '',
                ].join(' ')
              "
              @click="type.activeClass = 2"
            >
              <div
                :class="
                  [
                    'option__check-icon-wrapper',
                    type.activeClass > 1 ? 'option__active' : '',
                  ].join(' ')
                "
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :stroke="type.activeClass > 1 ? '#FFFFFF' : '#1A5543'"
                    d="M13 3.37495L6.125 9.56245L3 6.74995"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Private</p>
            </div>
          </div>

          <!-- Classical class information -->
          <transition name="slide-fade">
            <div
              v-if="type.activeClass === 1"
              class="type-section__classical-info"
            >
              <alert-circle-icon
                class="mr-2 text-orange-500"
              ></alert-circle-icon>
              <span>Minimal 5 orang/kelas.</span>
            </div>
          </transition>

          <!-- Private group options -->
          <div
            v-if="type.activeClass > 1"
            class="type-section__private-option-wrapper"
          >
            <!-- Individu option -->
            <div class="private-class-option" @click="type.activeClass = 2">
              <div class="private-class-option__icon-wrapper">
                <div
                  :class="
                    [
                      'option__check-icon-wrapper',
                      type.activeClass === 2 ? 'option__active' : '',
                    ].join(' ')
                  "
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :stroke="type.activeClass === 2 ? '#FFFFFF' : '#1A5543'"
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div class="private-class-option__content">
                <p class="private-class-option__text">Individu</p>
                <p class="private-class-option__description">
                  Biaya Rp 1,750,000
                </p>
              </div>
            </div>

            <!-- Family option -->
            <div class="private-class-option" @click="type.activeClass = 3">
              <div class="private-class-option__icon-wrapper">
                <div
                  :class="
                    [
                      'option__check-icon-wrapper',
                      type.activeClass === 3 ? 'option__active' : '',
                    ].join(' ')
                  "
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :stroke="type.activeClass === 3 ? '#FFFFFF' : '#1A5543'"
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div class="private-class-option__content">
                <p class="private-class-option__text">Keluarga</p>
                <p class="private-class-option__description">
                  Biaya Rp 4,500,000 (maksimal 9 orang)
                </p>
              </div>
            </div>

            <!-- Individu option -->
            <div class="private-class-option" @click="type.activeClass = 4">
              <div class="private-class-option__icon-wrapper">
                <div
                  :class="
                    [
                      'option__check-icon-wrapper',
                      type.activeClass === 4 ? 'option__active' : '',
                    ].join(' ')
                  "
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :stroke="type.activeClass === 4 ? '#FFFFFF' : '#1A5543'"
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div class="private-class-option__content">
                <p class="private-class-option__text">Anak - anak</p>
                <p class="private-class-option__description">
                  Biaya Rp 100,000/bulan
                </p>
              </div>
            </div>
          </div>

          <!-- Class implementation -->
          <div class="type-section__implementation-option-wrapper">
            <h3 class="implementation-option__title">Pelaksanaan</h3>

            <div class="implementation-options">
              <!-- Offline -->
              <div
                :class="
                  [
                    'class-option',
                    type.implementation === 1 ? 'class-option__active' : '',
                  ].join(' ')
                "
                @click="type.implementation = 1"
              >
                <div
                  :class="
                    [
                      'option__check-icon-wrapper',
                      type.implementation === 1 ? 'option__active' : '',
                    ].join(' ')
                  "
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :stroke="
                        type.implementation === 1 ? '#FFFFFF' : '#1A5543'
                      "
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p>Offline</p>
              </div>

              <!-- Online -->
              <div
                :class="
                  [
                    'class-option',
                    type.implementation === 2 ? 'class-option__active' : '',
                  ].join(' ')
                "
                @click="type.implementation = 2"
              >
                <div
                  :class="
                    [
                      'option__check-icon-wrapper',
                      type.implementation === 2 ? 'option__active' : '',
                    ].join(' ')
                  "
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :stroke="
                        type.implementation === 2 ? '#FFFFFF' : '#1A5543'
                      "
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p>Online</p>
              </div>
            </div>
          </div>

          <!-- Class type confirmation -->
          <div class="type-section__program-types-confirmation">
            <button
              class="program-types-confirmation__button"
              @click="getAvailableTime"
            >
              Lanjut
            </button>
          </div>
        </div>

        <!-- Summary -->
        <div v-if="type.fillStatus" class="type-section__summary">
          {{ constants.className[type.activeClass] }}
          -
          {{ constants.implementationName[type.implementation] }}
        </div>
      </div>

      <!-- Learning Schedule -->
      <div class="form-course-option__time-section">
        <div class="time-section__title">
          <h1
            :class="
              [
                'time-section__title-text',
                type.fillStatus ? 'time-section__title-text--active' : '',
              ].join(' ')
            "
          >
            Jadwal Belajar
          </h1>
          <div class="time-section__title-status"></div>
        </div>

        <!-- Form -->
        <div
          v-if="type.fillStatus"
          :class="
            ['time-section__form', !type.fillStatus ? 'hidden' : ''].join(' ')
          "
        >
          <!-- Learning Frequency -->
          <div class="time-section__learning-frequency">
            <!-- Frequency options -->
            <div
              v-for="freq in constants.frequencies"
              :key="freq"
              :class="
                [
                  'class-option frequency-option',
                  freq === time.frequency ? 'class-option__active' : '',
                ].join(' ')
              "
              @click="time.frequency = freq"
            >
              <div
                :class="
                  [
                    'option__check-icon-wrapper',
                    freq === time.frequency ? 'option__active' : '',
                  ].join(' ')
                "
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :stroke="freq === time.frequency ? '#FFFFFF' : '#1A5543'"
                    d="M13 3.37495L6.125 9.56245L3 6.74995"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>{{ freq }} kali/pekan</p>
            </div>
          </div>

          <!-- Schedule selector -->
          <CourseSchedules
            v-model="selected_schedule"
            :availableTimes="availableTimes"
            :frequency="time.frequency"
            :implementation="type.implementation"
          />

          <!-- Register!! -->
          <button
            class="time-section__register-button"
            @click="candidateRegister"
          >
            Daftar
          </button>
        </div>
      </div>

      <!-- <NuxtLink to="/pengisian-biodata">Pengisian Biodata</NuxtLink>
      <NuxtLink to="/selesai">Daftar!</NuxtLink> -->
    </div>
  </div>
</template>

<script>
import Session from '@/mixins/session'
import { AlertCircleIcon } from 'vue-feather-icons'
import ENV from '@/services/env'
import CourseSchedules from '../components/students/course-options/CourseSchedules'

export default {
  components: {
    AlertCircleIcon,
    CourseSchedules,
  },
  mixins: [Session],
  data() {
    return {
      constants: {
        className: {
          1: 'Klasikal',
          2: 'Individu (private)',
          3: 'Keluarga (private)',
          4: 'Anak - anak (private)'
        },
        implementationName: {
          1: 'Offline',
          2: 'Online',
        },
        frequencies: [1, 2, 3],
      },
      type: {
        activeClass: 1, // 1: Klasikal, 2: Individu (Private), 3: Family (Private), 4. Children (Private)
        implementation: 1, // 1: Offline, 2: Online
        fillStatus: false,
      },
      time: {
        frequency: 1,
      },
      selected_schedule: '',
      availableTimes: null,
    }
  },
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()
  },
  methods: {
    async candidateRegister() {
      this.$nuxt.$loading.start()

      const session = this.getSession()
      const formData = {
        candidate_id: session.c,
        schedule_id: this.selected_schedule,
      }

      try {
        const response = await this.$axios.post(
          ENV.participant.joinUrl,
          formData
        )

        if (response.status === 201) {
          this.commitSession({ rg: false, c: null })

          this.$nuxt.$loading.finish()
          this.$nuxt.$router.push('/selesai')
        }
      } catch (e) {}
    },
    async getAvailableTime() {
      this.type.fillStatus = true
      const options = {
        dpdArea: 3175,
        classType: this.type.activeClass,
        implementation: this.type.implementation,
      }
      const url = (!Object.is(this.type.implementation, 2))
        ? `/waktu-tersedia?dpd_area=${options.dpdArea}&ct=${options.classType}&imp=${options.implementation}&fq=${this.time.frequency}`
        : `/waktu-tersedia?ct=${options.classType}&imp=${options.implementation}&fq=${this.time.frequency}`

      try {
        const availableTimes = await this.$axios.get(ENV.base_url + url)
        this.availableTimes = availableTimes.data
      } catch (error) {
        
      }
    },
    setClassType(type) {
      this.type.activeClass = type
    },
  },
  watch: {
    'time.frequency': function (selectedFrequency) {
      this.getAvailableTime()
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/course-option-form.scss';
</style>
