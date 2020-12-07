<template>
  <aside id="sidebar">
    <h1 class="px-5 py-6 font-bold text-xl text-white">
      Rumah Qur'an Wahdah Islamiyah Jakarta
    </h1>
    <div class="text-white px-5 py-2">
      <ul>
        <li class="sidebar__content-item">
          <CircleItem :state="circleItemState[0]" />
          <div class="content-item__text content-item__text__active ml-2">
            Halaman awal
          </div>
          <div class="py-1">
            <div
              :class="
                [
                  'dashed-line__bottom',
                  circleItemState[0] == 'finish'
                    ? 'dashed-line__active'
                    : 'dashed-line__inactive',
                ].join(' ')
              "
            >
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[1]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">
            Formulir biodata
          </div>
          <div class="py-1">
            <div
              :class="
                [
                  'dashed-line__bottom',
                  circleItemState[1] == 'finish'
                    ? 'dashed-line__active'
                    : 'dashed-line__inactive',
                ].join(' ')
              "
            >
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[2]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">
            Pemilihan kelas
          </div>
          <div class="py-1">
            <div
              :class="
                [
                  'dashed-line__bottom',
                  circleItemState[2] == 'finish'
                    ? 'dashed-line__active'
                    : 'dashed-line__inactive',
                ].join(' ')
              "
            >
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[3]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">
            Selesai
          </div>
        </li>
      </ul>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="contact-us">
        <phone-icon size="21" class="stroke-2 mr-3"></phone-icon> Hubungi Kami
      </div>
      <div class="button-faq">
        <button class="main-button py-2 px-6 focus:outline-none">FAQ</button>
      </div>
    </div>
  </aside>
</template>

<script>
import { CircleIcon, PhoneIcon } from 'vue-feather-icons'
import CheckCircle from '../icons/CheckCircle'
import CircleItem from './CircleItem'

const FINISH_STATE = 'finish'
const ACTIVE_STATE = 'active'
const INACTIVE_STATE = 'inactive'

const STEP_STATE = [
  ACTIVE_STATE,
  INACTIVE_STATE,
  INACTIVE_STATE,
  INACTIVE_STATE,
]
const ROUTE_NAMES = [
  'index',
  'pengisian-biodata',
  'pemilihan-waktu-belajar',
  'selesai',
]

export default {
  components: {
    CheckCircle,
    CircleIcon,
    CircleItem,
    PhoneIcon,
  },
  computed: {
    activePage() {
      return this.$route.name
    },
    circleItemState() {
      const routeName = this.$route.name
      let state = STEP_STATE

      if (routeName != 'index') {
        // first page always finish
        state = [FINISH_STATE]
        let active = false

        for (let i = 1; i < STEP_STATE.length; i++) {
          if (ROUTE_NAMES[i] !== routeName && !active) {
            state.push(FINISH_STATE)
          } else if (ROUTE_NAMES[i] === 'selesai' && routeName === 'selesai') {
            state.push(FINISH_STATE)
            active = false
          } else if (ROUTE_NAMES[i] === routeName) {
            state.push(ACTIVE_STATE)
            active = true
          } else {
            state.push(INACTIVE_STATE)
          }
        }
      }

      return state
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/sidebar.scss';
</style>
