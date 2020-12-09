<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="form-course-option">
      <!-- Program types -->
      <div class="form-course-option__type-section">
        <div class="type-section__title">
          <h1 :class="[
            'type-section__title-text', 
            type.fillStatus ? 'type-section__finish' : ''
          ].join(' ')">
            Jenis Kelas
          </h1>
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
          <ContentLoader v-if="candidateInfo.jobType === 99">
            <rect x="0" y="0" rx="3" ry="3" width="300" height="40" />
            <rect x="0" y="50" rx="3" ry="3" width="280" height="30" />
          </ContentLoader>
          <template v-else>
            <!-- For jobType = 1 -->
            <template v-if="candidateInfo.jobType === 1">
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
                  <div class="classical-info__price">
                    Mulai dari Rp95.000/bulan
                  </div>
                  <div class="classical-info__class-requirement">
                    <alert-circle-icon
                      size="1.5x"
                      class="mr-2 text-orange-500"
                    ></alert-circle-icon>
                    <span>Minimal 5 orang/kelas.</span>
                  </div>
                </div>
              </transition>

              <!-- Private group options -->
              <div
                v-if="type.activeClass > 1"
                class="type-section__private-option-wrapper"
              >
                <!-- Individu option -->
                <div
                  @click="type.activeClass = 2"
                  :class="
                    [
                      'private-class-option',
                      type.activeClass === 2 ? 'private-class-option__selected' : ''
                    ].join(' ')
                    "
                  >
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
                      Mulai dari Rp1.500.000
                    </p>
                  </div>
                </div>

                <!-- Family option -->
                <div
                  @click="type.activeClass = 3"
                  :class="
                    [
                      'private-class-option',
                      type.activeClass === 3 ? 'private-class-option__selected' : ''
                    ].join(' ')
                    "
                  >
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

                  <div class="private-class-option__content w-full pr-2">
                    <p class="private-class-option__text flex flex-row items-center">
                      <span class="flex-grow">Keluarga</span>
                      <span class="flex-shrink text-xs font-bold bg-orange-600 px-1 rounded text-white">Maks. 9 orang</span>
                    </p>
                    <p class="private-class-option__description">
                      Mulai dari Rp3.750.000
                    </p>
                  </div>
                </div>

                <!-- Individu option -->
                <div
                  @click="type.activeClass = 4"
                  :class="
                    [
                      'private-class-option',
                      type.activeClass === 4 ? 'private-class-option__selected' : ''
                    ].join(' ')
                    "
                  >
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
                      Mulai dari Rp50.000/bulan
                    </p>
                  </div>
                </div>
              </div>
            </template>
            <!-- For jobType = 0 -->
            <div v-else class="type-section__classical-info">
              <div class="p-2 bg-green-100 border border-green-600 rounded shadow mb-2">
                <p>Klasikal</p>
              </div>
              <div class="classical-info__class-requirement">
                <alert-circle-icon
                  size="1.5x"
                  class="mr-2 text-orange-500"
                ></alert-circle-icon>
                <span>Minimal 5 orang/kelas.</span>
              </div>
            </div>

            <!-- Class implementation -->
            <div class="type-section__implementation-option-wrapper">
              <h3 class="implementation-option__title">Pelaksanaan</h3>

              <ContentLoader v-if="candidateInfo.eligibleAddress === 99">
                <rect x="0" y="0" rx="3" ry="3" width="300" height="40" />
                <rect x="0" y="50" rx="3" ry="3" width="280" height="30" />
              </ContentLoader>
              <template v-else>

                <!-- Special for covid-19 outbreak -->
                <template v-if="covid19">
                  <div class="implementation-options implementation-options__online-only">
                    <div class="covid-19-announcement w-full p-2 border border-blue-600 rounded mb-2">
                      <p>Mohon maaf</p>
                      <p>Selama pandemi COVID-19, kegiatan kita hanya dilaksanakan secara online.</p>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <!-- Eligible address | can be offline -->
                  <template v-if="candidateInfo.eligibleAddress">
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
                  </template>

                  <!-- Only online -->
                  <template v-else>
                    <div class="implementation-options implementation-options__online-only">
                      <div class="w-full p-2 bg-green-100 border border-green-600 rounded shadow mb-2">
                        <p>Online</p>
                      </div>
                      <div class="implementation-option__info-outside-area">
                        <alert-circle-icon
                          size="1.5x"
                          class="mr-2 text-orange-500"
                        ></alert-circle-icon>
                        <span>Peserta diluar DKI Jakarta & Depok hanya online</span>
                      </div>
                    </div>
                  </template>
                </template>

              </template>
            </div>

            <!-- Class type confirmation -->
            <div class="type-section__program-types-confirmation">
              <button
                class="program-types-confirmation__button w-full mb-4"
                @click="getAvailableTime"
              >
                Selanjutnya
              </button>
            </div>
          </template>
        </div>

        <!-- Summary -->
        <div v-if="type.fillStatus" class="type-section__summary">
          {{ constants.className[type.activeClass] }}
          -
          {{ constants.implementationName[type.implementation] }}
        </div>
      </div>

      <!-- Learning Schedule -->
      <transition name="slide-up">
        <div v-if="type.fillStatus" class="form-course-option__time-section">
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
                v-for="(freq, fqi) in constants.frequencies"
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
                <p class="flex-grow">{{ freq }} kali/pekan</p>
                <p v-if="candidateInfo.jobType === 1" class="flex-shrink text-sm">{{ constants.prices[type.activeClass][fqi] }}</p>
              </div>
            </div>

            <!-- Schedule selector -->
            <ContentLoader v-if="loading">
              <rect x="0" y="0" rx="3" ry="3" width="300" height="40" />
              <rect x="0" y="50" rx="3" ry="3" width="270" height="40" />
            </ContentLoader>
            <template v-else-if="availableTimes && !loading">
              <CourseSchedules
                v-model="selected_schedule"
                :available-times="availableTimes"
                :frequency="time.frequency"
                :implementation="type.implementation"
              />
            </template>

            <!-- Register!! -->
            <button
              :disabled="!selected_schedule"
              :class="[
                'time-section__register-button',
                !selected_schedule ? 'disabled-button' : 'main-button'
              ].join(' ')"
              @click="join"
            >
              Daftar
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import Session from '@/mixins/session'
import { AlertCircleIcon } from 'vue-feather-icons'
import ENV from '@/services/env'
import CourseSchedules from '../components/students/course-options/CourseSchedules'

const ELIGIBLE_CITIES = [3101, 3171, 3172, 3173, 3174, 3175, 3276]

export default {
  components: {
    ContentLoader,
    AlertCircleIcon,
    CourseSchedules,
  },
  mixins: [Session],
  data() {
    return {
      session: {},
      constants: {
        className: {
          1: 'Klasikal',
          2: 'Individu (private)',
          3: 'Keluarga (private)',
          4: 'Anak - anak (private)',
        },
        implementationName: {
          1: 'Offline',
          2: 'Online',
        },
        frequencies: [1, 2, 3],
        prices: {
          1: ['Rp95.000/bulan', 'Rp125.000/bulan', 'Rp150.000/bulan'],
          2: ['Rp1.500.000', 'Rp1.750.000', 'Rp1.900.000'],
          3: ['Rp3.750.000', 'Rp4.250.000', 'Rp4.500.000'],
          4: ['Rp50.000/bulan', 'Rp80.000/bulan', 'Rp100.000/bulan']
        }
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
      candidateInfo: {
        jobType: 99,
        eligibleAddress: 99 // 99: loading, 1: eligible (true), 2: not-eligible (false)
      },
      loading: false,
      covid19: true
    }
  },
  watch: {
    'time.frequency'(selectedFrequency) {
      this.getAvailableTime()
      this.selected_schedule = ''
    },
  },
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()
    this.session = this.getSession()

    // Check candidate job type
    this.candidateInfo.jobType = parseInt(this.session.c.jt)

    // Check candidate current city
    const candidateCity = parseInt(this.session.c.d_a)
    this.candidateInfo.eligibleAddress = ELIGIBLE_CITIES.some(city => city === candidateCity)

    if (!this.candidateInfo.eligibleAddress || this.covid19)
      this.type.implementation = 2
  },
  methods: {
    setClassType(type) {
      this.type.activeClass = type
    },

    async getAvailableTime() {
      this.loading = true;

      if (!this.type.fillStatus) this.type.fillStatus = true;

      const options = {
        dpdArea: this.session.c.d_a,
        classType: this.type.activeClass,
        implementation: this.type.implementation,
      }
      const url = !Object.is(this.type.implementation, 2)
        ? `${ENV.participant.courseAvailableTime}?dpd_area=${options.dpdArea}&ct=${options.classType}&imp=${options.implementation}&fq=${this.time.frequency}`
        : `${ENV.participant.courseAvailableTime}?ct=${options.classType}&imp=${options.implementation}&fq=${this.time.frequency}`

      try {
        const availableTimes = await this.$axios.get(url)
        this.availableTimes = availableTimes.data
        this.loading = false;
      } catch (error) {
        console.log({ error })
        this.$toast.error(
          'Oops.. Maaf ada kesalahan ketika mengambil data jadwal belajar',
          {
            duration: 4500,
            theme: 'bubble',
            closeOnSwipe: true,
            containerClass: 'mt-2',
            className: 'mx-3 py-2',
            action: {
              text: 'Tutup',
              onClick: (e, toastObject) => toastObject.goAway(0),
            },
          }
        )
      }
    },
    async join() {
      this.$nuxt.$loading.start()

      try {
        const response = await this.$axios.post(ENV.participant.joinUrl, {
          candidate_id: this.session.c.id,
          ...this.selected_schedule,
        })

        // from mixins@Session
        this.commitSession({ j: true })

        this.$nuxt.$loading.finish()
        this.$nuxt.$router.push('/selesai')
      } catch (error) {
        console.log({ error })
        this.$toast.error(
          'Oops.. Maaf ada kesalahan ketika anda ingin mendaftar',
          {
            duration: 4500,
            theme: 'bubble',
            closeOnSwipe: true,
            containerClass: 'mt-2',
            className: 'mx-3 py-2',
            action: {
              text: 'Tutup',
              onClick: (e, toastObject) => toastObject.goAway(0),
            },
          }
        )
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/course-option-form.scss';
</style>
