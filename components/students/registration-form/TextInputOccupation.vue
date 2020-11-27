<template>
  <div
    class="md:pl-2 md:w-2/3 lg:ml-4 lg:pl-0 form-pendaftaran__select-input form-pendaftaran__with-icons"
  >
    <svg
      id="form-pendaftaran__pen-tool-icon"
      class="form-pendaftaran__icons"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 50.6667L50.6667 32L58.6667 40L40 58.6667L32 50.6667Z"
        stroke="#2D7C66"
        stroke-opacity="0.65"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48 34.6667L44 14.6667L5.33337 5.33333L14.6667 44L34.6667 48L48 34.6667Z"
        stroke="#2D7C66"
        stroke-opacity="0.65"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33337 5.33333L25.5627 25.5627"
        stroke="#2D7C66"
        stroke-opacity="0.65"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3333 34.6667C32.2789 34.6667 34.6667 32.2789 34.6667 29.3333C34.6667 26.3878 32.2789 24 29.3333 24C26.3878 24 24 26.3878 24 29.3333C24 32.2789 26.3878 34.6667 29.3333 34.6667Z"
        stroke="#2D7C66"
        stroke-opacity="0.65"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <label for="pekerjaan">
      <span class="label-text">Pekerjaan:</span>
      <validation-provider rules="empty" name="Pekerjaan" v-slot="{ errors }" class="flex flex-col">
        <select
          id="pekerjaan"
          v-bind="$attrs"
          v-on="inputListeners"
          @change="setJobType"
          @focus="
            liftUpIcon('form-pendaftaran__pen-tool-icon', { degree: '-45-deg' })
          "
          @blur="
            liftDownIcon('form-pendaftaran__pen-tool-icon', { degree: '-45-deg' })
          ">
            <option value="" disabled selected hidden>Silakan pilih</option>
            <option 
              v-for="(job, i) in jobList" 
              :key="i" 
              :value="job.name">
                {{ job.name }}
            </option>
        </select>
        <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold mt-4">{{ errors[0] }}</span>
      </validation-provider>
    </label>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { liftIcons } from '@/mixins/form-icon-animations'
import { model } from '@/mixins/input-text-model'
import session from '@/mixins/session'
import env from '@/services/env'

export default {
  components: {
    ValidationProvider
  },
  mixins: [liftIcons, model, session],
  props: ['value'],
  async fetch() {
    this.jobList = await fetch(env.base_url + '/job-types')
      .then(res => res.json())
  },
  fetchOnServer: true,
  mounted() {
    this.currentSession = this.getSession()

    if (this.currentSession)
      this.candidateInfo = Object.assign(this.candidateInfo, this.currentSession.c)
  },
  data() {
    return {
      currentSession: null,
      candidateInfo: {},
      jobList: null
    }
  },
  methods: {
    setJobType(event) {
      const selectedJob = this.jobList.find(job => job.name === event.target.value);

      this.candidateInfo = Object.assign(this.candidateInfo, { jt: selectedJob.type })
      
      this.currentSession = Object.assign(this.currentSession, { c: this.candidateInfo })

      const cs = JSON.stringify(this.currentSession)

      localStorage.setItem('session', cs);
    }
  }
}
</script>

<style scoped>
#form-pendaftaran__pen-tool-icon {
  top: -10px !important;
}
</style>
