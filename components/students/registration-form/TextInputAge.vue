<template>
  <div class="md:w-1/3 form-pendaftaran__text-input form-pendaftaran__with-icons">
    <svg
      id="form-pendaftaran__calendar-icon"
      class="form-pendaftaran__icons"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M49.2119 15.9043L16.8803 34.571C14.3294 36.0437 13.4554 39.3055 14.9281 41.8564L33.5948 74.188C35.0676 76.7389 38.3294 77.6129 40.8803 76.1402L73.2119 57.4735C75.7628 56.0007 76.6368 52.7389 75.164 50.188L56.4974 17.8564C55.0246 15.3055 51.7628 14.4315 49.2119 15.9043Z"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.6169 15.2855L44.9503 24.5231"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.1417 25.9522L26.4751 35.1898"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.2615 51.094L61.8307 27.094"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="64"
            height="64"
            fill="white"
            transform="translate(-0.00012207 32) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>

    <label for="umur">
      <span class="label-text">Umur:</span>
      <input
        id="umur"
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
        @focus="liftUpIcon('form-pendaftaran__calendar-icon')"
        @blur="liftDownIcon('form-pendaftaran__calendar-icon')"
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