<template>
  <div
    class="md:w-1/3 form-pendaftaran__text-input form-pendaftaran__with-icons"
  >
    <svg
      id="form-pendaftaran__smartphone-icon"
      class="form-pendaftaran__icons"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M41.9264 13.9521L18.8324 27.2855C16.2815 28.7582 15.4075 32.02 16.8803 34.5709L38.2136 71.5214C39.6864 74.0722 42.9482 74.9462 45.4991 73.4735L68.5931 60.1402C71.144 58.6674 72.018 55.4056 70.5452 52.8547L49.2119 15.9043C47.7391 13.3534 44.4773 12.4794 41.9264 13.9521Z"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M52.7128 59.3013L52.7359 59.2879"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.0258 30.5346L38.985 24.7846"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="64"
            height="64"
            fill="white"
            transform="translate(0 32) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>

    <label for="nomor-hp">
      <span class="label-text">No. Handphone:</span>
      <input
        id="nomor-hp"
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
        @focus="liftUpIcon('form-pendaftaran__smartphone-icon')"
        @blur="liftDownIcon('form-pendaftaran__smartphone-icon')"
        type="text"
        class="text-input"
      />
    </label>
  </div>
</template>

<script>
import { liftIcons } from '~/mixins/form-icon-animations'
import { model } from '~/mixins/input-text-model'
export default {
  mixins: [liftIcons, model],
  props: ['value'],
}
</script>