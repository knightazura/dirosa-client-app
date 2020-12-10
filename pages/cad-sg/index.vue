<template>
  <div>Referral success! Redirect...</div>
</template>

<script>
export default {
  created() {
    if(process.browser)
      localStorage.setItem('referral_code', this.$route.query.rc)

    this.$router.push('/');
  }
}
</script>

<style>

</style>