<template>
  <div
    class="md:w-1/2 md:pr-1 lg:w-2/3 lg:mr-4 lg:pr-0 form-pendaftaran__text-input form-pendaftaran__with-icons"
  >
    <svg
      id="form-pendaftaran__email-icon"
      class="form-pendaftaran__icons"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M14.5708 35.9332L51.5212 14.5999C54.0616 13.1332 57.34 14.0117 58.8067 16.552L74.8067 44.2648C76.2734 46.8051 75.3949 50.0836 72.8546 51.5503L35.9042 72.8836C33.3638 74.3503 30.0854 73.4718 28.6187 70.9315L12.6187 43.2187C11.152 40.6783 12.0305 37.3999 14.5708 35.9332Z"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.8067 16.552L45.046 46.0511L12.6187 43.2187"
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
            transform="translate(-0.00012207 32.0289) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>

    <label for="email">
      <span class="label-text">Email:</span>
      <validation-provider rules="email" name="Alamat email" v-slot="{ errors }" class="flex flex-col">
        <input
          id="email"
          v-bind="$attrs"
          :value="value"
          type="text"
          class="text-input"
          v-on="inputListeners"
          @focus="liftUpIcon('form-pendaftaran__email-icon')"
          @blur="liftDownIcon('form-pendaftaran__email-icon')"
        />
        <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold -mb-4">{{ errors[0] }}</span>
      </validation-provider>
    </label>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { liftIcons } from '~/mixins/form-icon-animations'
import { model } from '~/mixins/input-text-model'
export default {
  components: {
    ValidationProvider
  },
  mixins: [liftIcons, model],
  props: ['value'],
}
</script>
