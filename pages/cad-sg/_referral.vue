<template>
  <div>Refer success!</div>
</template>

<script>
export default {
  created() {
    localStorage.setItem('referral_code', this.$route.params.referral)

    this.$router.push('/')
  }
}
</script>

<style>

</style>