<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99994 16C12.4182 16 15.9999 12.4183 15.9999 8C15.9999 3.58172 12.4182 0 7.99994 0C3.58166 0 -6.10352e-05 3.58172 -6.10352e-05 8C-6.10352e-05 12.4183 3.58166 16 7.99994 16ZM12.0023 6.99329C12.4128 6.62384 12.446 5.99155 12.0766 5.58104C11.7071 5.17053 11.0748 5.13725 10.6643 5.50671L6.74996 9.02964L5.33559 7.75671C4.92508 7.38725 4.29279 7.42053 3.92333 7.83104C3.55387 8.24154 3.58715 8.87383 3.99766 9.24329L6.08099 11.1183C6.4613 11.4606 7.03862 11.4606 7.41892 11.1183L12.0023 6.99329Z" :fill="fillColor"/>
  </svg>
</template>

<script>
export default {
  props: {
    fillColor: {
      type: String,
      default: '#000000',
      required: false
    }
  }
}
</script>

<style>

</style>