<template>
  <div>Refer success!</div>
</template>

<script>
export default {
  created() {
    if(process.browser)
      localStorage.setItem('referral_code', this.$route.params.referral)

    this.$router.push('/')
  }
}
</script>

<style>

</style>