<template>
  <div class="form-pendaftaran__text-input form-pendaftaran__with-icons">
    <svg
      id="form-pendaftaran__address-icon"
      class="form-pendaftaran__icons"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M10.3088 44.523L31.6421 81.4734L42.4746 62.9025L66.2831 61.4734L77.1156 42.9025L55.7823 5.95209L44.9498 24.523L21.1413 25.9521L10.3088 44.523Z"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.1412 25.9521L42.4746 62.9025"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.9498 24.523L66.2832 61.4734"
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
            transform="translate(-0.000610352 32) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>

    <label for="alamat">
      <span class="label-text">Alamat:</span>
      <validation-provider rules="empty|min_generic_name:6" name="Alamat" v-slot="{ errors }" class="flex flex-col">
        <input
          id="alamat"
          v-bind="$attrs"
          :value="value"
          type="text"
          class="text-input -mb-4"
          v-on="inputListeners"
          @focus="liftUpIcon('form-pendaftaran__address-icon')"
          @blur="liftDownIcon('form-pendaftaran__address-icon')"
        />
        <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold mt-4">{{ errors[0] }}</span>
      </validation-provider>
    </label>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
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
