<template>
  <div class="form-pendaftaran__text-input form-pendaftaran__with-icons">
    <svg id="form-pendaftaran__fullname-icon" class="form-pendaftaran__icons"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M74.1878 53.8308L71.5212 49.212C70.1067 46.762 67.7769 44.9743 65.0443 44.2421C62.3117 43.5099 59.4002 43.8932 56.9502 45.3077L38.475 55.9743C36.0251 57.3888 34.2373 59.7186 33.5052 62.4512C32.773 65.1838 33.1563 68.0953 34.5708 70.5453L37.2374 75.1641"
          stroke="#2D7C66"
          stroke-opacity="0.65"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M42.3794 41.4034C47.4812 38.4579 49.2292 31.9343 46.2836 26.8325C43.3381 21.7307 36.8145 19.9827 31.7127 22.9282C26.6109 25.8737 24.8629 32.3974 27.8084 37.4991C30.754 42.6009 37.2776 44.3489 42.3794 41.4034Z"
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
    <label for="nama-lengkap">
      <span class="label-text">Nama Lengkap:</span>
      <validation-provider rules="empty|min_generic_name:3" name="Nama lengkap" v-slot="{ errors }" class="flex flex-col">
        <input id="nama-lengkap"
          v-bind="$attrs"
          v-bind:value="value"
          v-on="inputListeners"
          @focus="liftUpIcon('form-pendaftaran__fullname-icon')"
          @blur="liftDownIcon('form-pendaftaran__fullname-icon')"
          type="text"
          class="text-input" />
          <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold -mb-4">{{ errors[0] }}</span>
        </validation-provider>
    </label>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { liftIcons } from '~/mixins/form-icon-animations';
import { model } from '~/mixins/input-text-model';
export default {
  components: {
    ValidationProvider
  },
  mixins: [
    liftIcons,
    model
  ],
  props: ['value']
}
</script>