<template>
  <div id="mobile-header">
    <div class="main-menu-wrapper">
      <template v-if="backIcon">
        <NuxtLink :to="headerProps.backRoute">
          <arrow-left-icon class="flex-shrink"></arrow-left-icon>
        </NuxtLink>
      </template>
      <h1 :class="[
        'font-bold flex-grow',
        backIcon ? 'pl-3' : ''
      ].join(' ')">
        {{ headerProps.title }}
      </h1>

      <!-- Show more menu icon -->
      <menu-icon v-if="!showMoreMenu" @click="openMenu(!showMoreMenu)" size=".95x" class="flex-shrink"></menu-icon>
      <x-icon v-else size=".95x" @click="openMenu(!showMoreMenu)" class="flex-shrink"></x-icon>
    </div>
    <div :class="['more-menu-wrapper', showMoreMenu ? 'more-menu-wrapper__active' : 'more-menu-wrapper__hidden'].join(' ')">
      <ol>
        <li v-if="$route.name === 'faq'" class="mt-2 py-2 border-t" @click="goTo('/')">Halaman Utama</li>
        <li v-if="$route.name !== 'faq'" class="mt-2 py-2 border-t" @click="goTo('/faq')">FAQ</li>
        <li class="pt-2 border-t">
          <a href="https://wa.me/6282296731729" target="_new">Hubungi Kami</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon,
    MenuIcon,
    XIcon,
  },
  created() {
    if (process.browser)
      this.$store.dispatch('getPreviousRouteFromLS');
  },
  computed: {
    backIcon() {
      return !['index', 'pemilihan-waktu-belajar'].some(routeName => this.$route.name === routeName)
    },
    headerProps() {
      switch (this.$route.name) {
        case 'pengisian-biodata':
          return { title: 'Pengisian Biodata', backRoute: '/' }
        case 'pemilihan-waktu-belajar':
          return { title: 'Kelas & Jadwal Belajar' }
        case 'faq':
          return { title: 'FAQ', backRoute: this.$store.getters['previousRoute'] }
        default:
          return { title: "Rumah Qur'an Wahdah Islamiyah", backRoute: this.$store.getters['previousRoute'] }
      }
    },
    showMoreMenu() {
      return this.$store.getters['mainMenuOpened'];
    }
  },
  methods: {
    goTo(url) {
      this.showMoreMenu = false;
      this.$router.push(url);
    },
    openMenu(state) {
      this.$store.commit('OPEN_MAIN_MENU', state);
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mobile-header.scss';
</style>
