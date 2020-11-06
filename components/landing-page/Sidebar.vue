<template>
  <aside id="left-side" class="bg-green-300 md:w-1/3 md:min-h-screen">
    <h1 class="px-5 py-6 font-bold text-xl text-white">Rumah Qur'an Wahdah Islamiyah Jakarta Selatan</h1>
    <div class="text-white px-5 py-2">
      <ul>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[0]" />
          </transition>
          <div class="content-item__text content-item__text__active ml-2">Halaman awal - {{ circleItemState[0] }}</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', activePage == 'pengisian-biodata' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[1]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Formulir biodata - {{ circleItemState[1] }}</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', activePage == 'pemilihan-waktu-belajar' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[2]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Pemilihan kelas - {{ circleItemState[2] }}</div>
          <div class="py-1">
            <div :class="['dashed-line__bottom', activePage == 'selesai' ? 'dashed-line__active' : 'dashed-line__inactive'].join(' ')">
              &nbsp;
            </div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <transition name="no-mode-fade" mode="out-in">
            <CircleItem :state="circleItemState[3]" />
          </transition>
          <div class="content-item__text content-item__text__inactive ml-2">Selesai - {{ circleItemState[3] }}</div>
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
import CircleItem from '../sidebar/CircleItem'
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

        for(let i = 1; i < STEP_STATE.length; i++) {
          if (ROUTE_NAMES[i - 1] !== routeName) {
            state.push(FINISH_STATE)
          } else if (ROUTE_NAMES[i] === routeName) {
            state.push(ACTIVE_STATE)
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

<style scoped>
#left-side {
  display: grid;
  grid-template-rows: minmax(24px, max-content) auto minmax(64px, max-content);
  background-color: #2D7C66;
}

ul {
  list-style: none;
}

.sidebar__content-item {
  display: grid;
  grid-template-columns: 24px auto;
  grid-template-rows: 24px minmax(38px, max-content);
}
.content-item__text {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.content-item__text__active {
  font-weight: 700;
}
.circle-item__active {
  color: #FFEEDD;
}
.content-item__text__inactive {
  color: rgba(255, 255, 255, .6);
}
.circle-item__inactive {
  color: #20624F;
}
.stroke-3 {
  stroke-width: 3;
}
.center-point {
  justify-self: center;
  align-self: center;
}
.dashed-line__bottom {
  width: 4px;
  height: 100%;
  margin: 0 auto;
  transition: all .17s ease-in-out;
}
.dashed-line__active {
  background: repeating-linear-gradient(to bottom,#FFEEDD 0,#FFEEDD 20%,transparent 20%,transparent 40%);
}
.dashed-line__inactive {
  background: repeating-linear-gradient(to bottom,#20624F 0,#20624F 20%,transparent 20%,transparent 40%);
}

.contact-us,
.button-faq {
  align-self: center;
  align-items: center;
}
.contact-us {
  background-color: rgba(26, 85, 67, .66);
  border-top-right-radius: 27px;
  height: 100%;
}
.button-faq button {
  transition: all .35s ease-in-out;
  border-width: 1px;
  border-color: 
    rgba(17, 57, 45, 0.35)
    rgba(17, 57, 45, 0.35)
    rgba(17, 57, 45, 0.66);
  background: radial-gradient(
    114.95% 100% at 50.49% 0%, 
    rgba(255, 255, 255, 0.11) 0%, 
    rgba(255, 255, 255, 0) 100%), #1A5543;
  box-shadow: 
    0px 2px 4px rgba(0, 0, 0, 0.25), 
    inset 0px -1px 2px rgba(0, 0, 0, 0.15), 
    inset 0px 2px 5px rgba(255, 255, 255, 0.07);
  border-radius: 7px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  font-weight: 700;
}
.button-faq button:active {
  background: #1A5543;
}
.button-faq button:hover {
  box-shadow: 
    0px 3px 7px rgba(0, 0, 0, 0.30), 
    inset 0px -1px 2px rgba(0, 0, 0, 0.15), 
    inset 0px 2px 5px rgba(255, 255, 255, 0.07);
}

/* Transition animation classes */
.no-mode-fade-enter-active, .no-mode-fade-leave-active {
  transition: opacity .17s
}
.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}
</style>
