<template>
  <div class="time-section__schedule-selector">
    <h3 class="schedule-selector__title">Pilihan Kelas</h3>
    <div v-if="availableTimes.length > 0">
      <div v-for="availableTime in availableTimes" :key="availableTime.id" class="border-b border-gray-200">
        <div v-if="implementation === 1" class="-mb-2 mt-2 flex flex-row text-xs">
          <div v-if="availableTime.priority && availableTime.total_candidate !== 15" class="flex-shrink bg-green-700 text-white rounded font-bold px-1">Disarankan</div>
          <div v-if="availableTime.total_candidate === 15" class="flex-shrink bg-red-700 text-white rounded font-bold px-1">Penuh</div>
        </div>

        <template v-if="implementation === 1 && availableTime.total_candidate === 15">
          <div :class="[frequencyClasses].join(' ')">
            <div
              v-for="(schedule, sci) in availableTime.schedules"
              :key="sci"
              class="item-content cursor-pointer border-r border-gray-400"
            >
              <div class="text-gray-600 item-content__day">{{ schedule.days }}</div>
              <div class="text-gray-600 item-content__time">{{ schedule.time }}</div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            @click="setSelectedSchedule(availableTime.id)"
            :class="[
              frequencyClasses,
              selectedSchedule === availableTime.id
                ? 'schedule-selector__item__selected'
                : '',
            ]"
          >

            <div
              v-for="(schedule, sci) in availableTime.schedules"
              :key="sci"
              :class="
                [
                  'item-content cursor-pointer',
                  sci !== availableTime.schedules.length - 1
                    ? 'border-r border-gray-400'
                    : '',
                ].join(' ')
              "
            >
              <div class="item-content__day">{{ schedule.days }}</div>
              <div class="item-content__time">{{ schedule.time }}</div>
            </div>

          </div>
        </template>
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
