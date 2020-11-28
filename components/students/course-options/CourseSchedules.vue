<template>
  <div class="time-section__schedule-selector">
    <h3 class="schedule-selector__title">Pilihan Kelas</h3>
    <div v-if="options.length > 0">
      <div v-for="option in options" :key="option.id">
        <div v-for="(schedules, index) in option.schedules" :key="index">
          <div
            :class="[
              frequencyClasses,
              selectedSchedule === schedules.id
                ? 'schedule-selector__item__selected'
                : '',
            ]"
          >
            <!-- Options for 3 / 2 times in a week -->
            <template v-if="frequency === 3 || frequency === 2">
              <div
                v-for="(schedule, sci) in schedules.times"
                :key="sci"
                :class="
                  [
                    'item-content cursor-pointer',
                    sci !== schedules.times.length - 1
                      ? 'border-r border-gray-400'
                      : '',
                  ].join(' ')
                "
                @click="setSelectedSchedule(schedules.id, option.id)"
              >
                <div class="item-content__day">{{ schedule.days }}</div>
                <div class="item-content__time">{{ schedule.time }}</div>
              </div>
            </template>

            <!-- Option for once time in a week -->
            <template v-else>
              <div class="item-content" @click="setSelectedSchedule(schedules.id, option.id)">
                <div class="item-content__day">{{ schedules.days }}</div>
                <div class="item-content__time">{{ schedules.time }}</div>
              </div>
            </template>
          </div>
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
  model: {
    prop: 'hidden',
    event: 'click',
  },
  props: ['availableTimes', 'frequency', 'implementation', 'hidden'],
  mounted() {
    console.log(this.availableTimes)
  },
  data() {
    return {
      selectedSchedule: null,
      selectedAvailableTime: null
    }
  },
  computed: {
    options() {
      const at = this.availableTimes
      return at.filter((time) => {
        return (
          time.frequency === this.frequency &&
          time.implementation === this.implementation
        )
      })
    },
    frequencyClasses() {
      return this.frequency === 3 || this.frequency === 2
        ? `schedule-selector__item-freq-${this.frequency} schedule-selector__item`
        : 'flex flex-col schedule-selector__item'
    },
  },
  methods: {
    setSelectedSchedule(schedule_id, available_time_id) {
      this.selectedSchedule = schedule_id
      this.selectedAvailableTime = available_time_id
      this.$emit('click', { schedule_id, available_time_id })
    },
  },
}
</script>
