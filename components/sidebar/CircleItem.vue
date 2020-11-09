<template>
  <transition name="no-mode-fade" mode="out-in">
    <CheckCircle v-if="state == 'finish'"
      :class="FINISH_CLASSES" fillColor="#FFEEDD" />

    <circle-icon v-if="state == 'active'"
      size="16"
      :class="ACTIVE_CLASSES">
    </circle-icon>

    <circle-icon v-if="state == 'inactive'"
      size="16"
      :class="INACTIVE_CLASSES">
    </circle-icon>
  </transition>
</template>

<script>
import CheckCircle from '../icons/CheckCircle'
import { CircleIcon } from 'vue-feather-icons'

export default {
  props: {
    state: {
      type: String,
      default: 'inactive',
      required: false
    }
  },
  components: {
    CheckCircle,
    CircleIcon
  },
  data() {
    return {
      ACTIVE_CLASSES  : 'circle-item__active center-point stroke-4',
      FINISH_CLASSES  : 'circle-item__active center-point stroke-4',
      INACTIVE_CLASSES: 'circle-item__inactive center-point stroke-4'
    }
  }
}
</script>

<style scoped>
.stroke-4 {
  stroke-width: 4;
}
.center-point {
  justify-self: center;
  align-self: center;
}
.circle-item__inactive {
  color: #20624F;
}
.circle-item__active {
  color: #FFEEDD;
}
</style>
