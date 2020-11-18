<template>
  <div id="right-side">
    <div class="form-course-option">
      <!-- Program types -->
      <div class="form-course-option__type-section">
        <div class="type-section__title">
          <h1 class="type-section__title-text">Jenis Kelas</h1>
          <div
            v-if="type.fillStatus"
            @click="type.fillStatus = false"
            class="type-section__title-status">
              Ubah
          </div>
        </div>

        <!-- Form -->
        <div
          :class="[
            'type-section__form',
            type.fillStatus ? 'hidden' : ''
          ].join(' ')">

            <!-- Class type -->
            <div class="type-section__type-class">

              <!-- Klasikal option -->
              <div
                @click="type.activeClass = 1"
                :class="[
                  'class-option',
                  type.activeClass === 1 ? 'class-option__active' : ''
                ].join(' ')">

                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.activeClass === 1 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.activeClass === 1 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                  <p>Klasikal</p>
              </div>

              <!-- Private option -->
              <div
                @click="type.activeClass = 2" 
                :class="[
                  'class-option',
                  type.activeClass === 2 ? 'class-option__active' : ''
                ].join(' ')">
                
                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.activeClass === 2 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.activeClass === 2 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                  <p>Private</p>
              </div>

            </div>

            <!-- Classical class information -->
            <transition name="slide-fade">
              <div v-if="type.activeClass === 1" class="type-section__classical-info">
                <alert-circle-icon class="mr-2 text-orange-500"></alert-circle-icon>
                <span>Minimal 5 orang/kelas.</span>
              </div>
            </transition>

            <!-- Private group options -->
            <div class="type-section__private-option-wrapper" v-if="type.activeClass === 2">

              <!-- Individu option -->
              <div @click="type.privateType = 1" class="private-class-option">
                <div class="private-class-option__icon-wrapper">
                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.privateType === 1 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.privateType === 1 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                </div>

                <div class="private-class-option__content">
                  <p class="private-class-option__text">Individu</p>
                  <p class="private-class-option__description">Biaya Rp 1,750,000</p>
                </div>
              </div>

              <!-- Family option -->
              <div @click="type.privateType = 2" class="private-class-option">
                <div class="private-class-option__icon-wrapper">
                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.privateType === 2 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.privateType === 2 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                </div>

                <div class="private-class-option__content">
                  <p class="private-class-option__text">Keluarga</p>
                  <p class="private-class-option__description">Biaya Rp 4,500,000 (maksimal 9 orang)</p>
                </div>
              </div>

              <!-- Individu option -->
              <div @click="type.privateType = 3" class="private-class-option">
                <div class="private-class-option__icon-wrapper">
                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.privateType === 3 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.privateType === 3 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                </div>

                <div class="private-class-option__content">
                  <p class="private-class-option__text">Anak - anak</p>
                  <p class="private-class-option__description">Biaya Rp 100,000/bulan</p>
                </div>
              </div>

            </div>

            <!-- Class implementation -->
            <div class="type-section__implementation-option-wrapper">
              <h3 class="implementation-option__title">Pelaksanaan</h3>

              <div class="implementation-options">
                
                <!-- Offline -->
                <div
                  @click="type.implementation = 1"
                  :class="[
                    'class-option',
                    type.implementation === 1 ? 'class-option__active' : ''
                  ].join(' ')">

                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.implementation === 1 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.implementation === 1 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                  <p>Offline</p>
                </div>

                <!-- Online -->
                <div
                  @click="type.implementation = 2"
                  :class="[
                    'class-option',
                    type.implementation === 2 ? 'class-option__active' : ''
                  ].join(' ')">

                  <div
                    :class="[
                      'option__check-icon-wrapper', 
                      type.implementation === 2 ? 'option__active' : ''
                    ].join(' ')">

                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :stroke="type.implementation === 2 ? '#FFFFFF' : '#1A5543'"
                        d="M13 3.37495L6.125 9.56245L3 6.74995"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>

                  </div>
                  <p>Online</p>
                </div>

              </div>
            </div>

            <!-- Class type confirmation -->
            <div class="type-section__program-types-confirmation">
              <button @click="type.fillStatus = true" class="program-types-confirmation__button">
                Lanjut
              </button>
            </div>

        </div>

        <!-- Summary -->
        <div v-if="type.fillStatus" class="type-section__summary">
          {{ constants.className[type.activeClass] }} 
          <span v-if="type.activeClass === 2">
            ({{ constants.privateTypeName[type.privateType] }})
          </span> -
          {{ constants.implementationName[type.implementation] }}
        </div>
      </div>

      <!-- Learning Schedule -->
      <div class="form-course-option__time-section">
        <div class="time-section__title">
          <h1
            :class="[
              'time-section__title-text',
              type.fillStatus ? 'time-section__title-text--active' : ''
            ].join(' ')">Jadwal Belajar</h1>
          <div class="time-section__title-status"></div>
        </div>

        <!-- Form -->
        <div
          :class="[
            'time-section__form',
            !type.fillStatus ? 'hidden' : ''
          ].join(' ')">
          
          <!-- Learning Frequency -->
          <div class="time-section__learning-frequency">

            <!-- Frequency options -->
            <div v-for="freq in constants.frequencies"
              :key="freq"
              :class="[
                'class-option frequency-option',
                freq === time.frequency ? 'class-option__active' : ''
              ].join(' ')"
              @click="time.frequency = freq">

                <div
                  :class="[
                    'option__check-icon-wrapper', 
                    freq === time.frequency ? 'option__active' : ''
                  ].join(' ')">

                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :stroke="freq === time.frequency ? '#FFFFFF' : '#1A5543'"
                      d="M13 3.37495L6.125 9.56245L3 6.74995"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                  </svg>

                </div>
                <p>{{ freq }} kali/pekan</p>
            </div>

          </div>

        </div>
      </div>

      <!-- <NuxtLink to="/pengisian-biodata">Pengisian Biodata</NuxtLink>
      <NuxtLink to="/selesai">Daftar!</NuxtLink> -->
    </div>
  </div>
</template>

<script>
import { AlertCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    AlertCircleIcon
  },
  data() {
    return {
      constants: {
        className: {
          1: 'Klasikal',
          2: 'Private'
        },
        privateTypeName: {
          1: 'Individu',
          2: 'Keluarga',
          3: 'Anak - anak'
        },
        implementationName: {
          1: 'Offline',
          2: 'Online'
        },
        frequencies: [1, 2, 3]
      },
      type: {
        activeClass: 1,    // 1: Klasikal, 2: Private,
        privateType: 1,    // 1: Individu, 2: Family, 3. Children
        implementation: 1, // 1: Offline, 2: Online
        fillStatus: false
      },
      time: {
        frequency: 1
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/course-option-form.scss';
</style>