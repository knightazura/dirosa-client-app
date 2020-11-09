<template>
  <div id="right-side">
    <div class="form-course-option">
      <!-- Program types -->
      <div class="form-course-option__type-section">
        <div class="type-section__title">
          <h1 class="type-section__title-text">Jenis Kelas</h1>
          <div class="type-section__title-status"></div>
        </div>
        <div class="type-section__type-class">

          <!-- Klasikal option -->
          <div @click="type.activeClass = 1" class="class-option">
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
          <div @click="type.activeClass = 2" class="class-option">
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
      </div>

      <!-- Private group options -->
      <div class="form-course-option__private-option-wrapper" v-if="type.activeClass === 2">

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

      <div class="form-course-option__program-types-confirmation">
        <button @click="type.fillStatus = true" class="program-types-confirmation__button">
          Pilih waktu belajar
        </button>
      </div>  

      <!-- Waktu belajar -->
      <div class="form-course-option__time-section">
        <div class="time-section__title">
          <h1
            :class="[
              'time-section__title-text',
              type.fillStatus ? 'time-section__title-text--active' : ''
            ].join(' ')">Waktu Belajar</h1>
          <div class="time-section__title-status"></div>
        </div>
      </div>

      <!-- <NuxtLink to="/pengisian-biodata">Pengisian Biodata</NuxtLink>
      <NuxtLink to="/selesai">Daftar!</NuxtLink> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: {
        activeClass: 1, // 1: Klasikal, 2: Private,
        privateType: 1, // 1: Individu, 2: Family, 3. Children
        fillStatus: false
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/course-option-form.scss';
</style>