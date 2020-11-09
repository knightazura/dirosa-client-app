<template>
  <div
    id="right-side"
    class="md:flex md:flex-grow md:justify-center md:items-center"
  >
    <div class="form-pendaftaran md:w-2/3">
      <FullName v-model="formData.full_name" class="mb-8" />
      
      <Address v-model="formData.address" class="mb-8" />
      
      <div class="flex flex-row mb-8">
        <CurrentAge v-model="formData.age" />
        <Occupation v-model="formData.occupation" />
      </div>

      <div class="flex flex-row">
        <EmailAddress v-model="formData.email" />
        <Phonenumber v-model="formData.phone_number" />
      </div>

      <div class="flex flex-row">
        <div class="flex-shrink py-2">
          <NuxtLink to="/">Selamat Datang</NuxtLink>
        </div>
        <div class="flex flex-grow justify-end py-2">
          <NuxtLink to="/pemilihan-waktu-belajar">Pemilihan Waktu Belajar</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponents from '~/components/students/registration-form';

export default {
  components: FormComponents,
  data() {
    return {
      formData: {}
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/registration-form.scss';
</style>