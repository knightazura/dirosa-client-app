<template>
  <div class="time-section__schedule-selector">
    <div v-if="options.length > 0">
      <h3 class="font-bold">Pilihan Kelas</h3>
      <div v-for="(schedules, index) in options[0].schedules" :key="index">
        <div :class="frequencyClasses">

          <!-- Options for 3 / 2 times in a week -->
          <template v-if="frequency === 3 || frequency === 2">
            <div
              v-for="(schedule, sci) in schedules.times"
              :key="sci"
              :class="[
                'flex flex-col text-center',
                sci !== (schedules.times.length - 1) ? 'border-r border-gray-500' : ''
              ].join(' ')"
              @click="setSelectedSchedule(schedules.id)">
              <div class="day">{{ schedule.days }}</div>
              <div class="time">{{ schedule.time }}</div>
            </div>
          </template>

          <!-- Option for once time in a week -->
          <template v-else>
            <div @click="setSelectedSchedule(schedules.id)">
              <div class="day">{{ schedules.days }}</div>
              <div class="time">{{ schedules.time }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-else class="time-section__schedule-selector schedule--full">
      <p>Mohon maaf. Semua kelas sudah penuh.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['frequency', 'implementation', 'hidden'],
  model: {
    prop: 'hidden',
    event: 'click'
  },
  data() {
    return {
      available_time: [
        {
            frequency: 3,
            implementation: 2, // 2 means online
            schedules: [
              {
                id: 'fe881ba9-c2cc-4065-b235-1035b21f0abb',
                times: [
                  { days: "Senin", time: "06.00 - 07.00" },
                  { days: "Rabu", time: "14.00 - 15.00" },
                  { days: "Kamis", time: "14.00 - 15.00" }
                ]
              },
              {
                id: 'ffa6eb3e-7822-4415-98f6-135ab13e5bfb',
                times: [
                  { days: "Selasa", time: "08.00 - 09.00" },
                  { days: "Jum'at", time: "14.00 - 15.00" },
                  { days: "Sabtu", time: "08.00 - 09.00" }
                ]
              }
            ]
        },
        {
            frequency: 1,
            implementation: 1, // 1 means offline
            schedules: [
                { id: '61b95f7a-e4ee-4d67-af46-4a1fdbb6fce8', days: "Senin", time: "06.00 - 07.00" },
                { id: 'ca543bf8-e546-47f9-9362-f95d5985dcff', days: "Selasa", time: "08.00 - 09.00" },
                { id: 'b5473d02-984f-47f4-8b22-d394b7fb77fa', days: "Rabu", time: "08.00 - 09.00" }
            ]
        }
      ]
    }
  },
  computed: {
    options() {
      let at = this.available_time
      return at.filter(time => {
        return time.frequency === this.frequency && time.implementation === this.implementation
      })
    },
    frequencyClasses() {
      return (this.frequency === 3 || this.frequency === 2)
        ? `grid grid-cols-${this.frequency} px-3 py-1 my-3 border border-green-600 rounded`
        : 'flex flex-col px-3 py-1 my-3 border border-green-600 rounded'
    }
  },
  methods: {
    setSelectedSchedule(id) {
      this.$emit('click', id)
    }
  }
}
</script>