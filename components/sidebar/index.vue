<template>
  <aside id="sidebar" class="bg-green-300 md:w-1/3 md:min-h-screen">
    <h1 class="px-5 py-6 font-bold text-xl text-white">Rumah Qur'an Wahdah Islamiyah Jakarta Selatan</h1>
    <div class="text-white px-5 py-2">
      <ul>
        <li class="sidebar__content-item">
          <CircleItem :state="circleItemState[0]" />
          <div class="content-item__text content-item__text__active ml-2">Halaman awal</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', circleItemState[0] == 'finish' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[1]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Formulir biodata</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', circleItemState[1] == 'finish' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[2]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Pemilihan kelas</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', circleItemState[2] == 'finish' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[3]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Selesai</div>
        </li>
      </ul>
    </div>
    <div class="flex flex-row">
      <div class="contact-us text-white w-2/3 flex flex-row pl-5">
        <phone-icon size="21" class="stroke-2 mr-3"></phone-icon> Hubungi Kami
      </div>
      <div class="button-faq w-1/3 flex justify-center">
        <button class="py-2 px-6 bg-yellow-300 text-white focus:outline-none">FAQ</button>
      </div>
    </div>
  </aside>
</template>

<script>
import CheckCircle from '../icons/CheckCircle'
import CircleItem from './CircleItem'
import { CircleIcon, PhoneIcon } from 'vue-feather-icons'

const FINISH_STATE = 'finish';
const ACTIVE_STATE = 'active';
const INACTIVE_STATE = 'inactive';

const STEP_STATE = [
  ACTIVE_STATE,
  INACTIVE_STATE,
  INACTIVE_STATE,
  INACTIVE_STATE
]
const ROUTE_NAMES = [
  "index",
  "pengisian-biodata",
  "pemilihan-waktu-belajar",
  "selesai"
]

export default {
  components: {
    CheckCircle,
    CircleIcon,
    CircleItem,
    PhoneIcon
  },
  computed: {
    activePage() {
      return this.$route.name;
    },
    circleItemState() {
      let routeName = this.$route.name;
      let state = STEP_STATE;

      if (routeName != "index") {
        // first page always finish
        state = [FINISH_STATE];
        let active = false;

        for(let i = 1; i < STEP_STATE.length; i++) {
          if (ROUTE_NAMES[i] !== routeName && !active) {
            state.push(FINISH_STATE)
          } else if (ROUTE_NAMES[i] === routeName) {
            state.push(ACTIVE_STATE)
            active = true;
          } else {
            state.push(INACTIVE_STATE)
          }
        }
      }

      return state;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/sidebar.scss';
</style>
