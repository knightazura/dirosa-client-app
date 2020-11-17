<template>
  <div id="right-side">
    <div class="form-pendaftaran md:w-2/3">
      <FullName v-model="formData.full_name" class="mb-8" />

      <Address v-model="formData.address.street_name" class="mb-8" />

      <div class="form-pendaftaran__select-input form-pendaftaran__area-selector">
        <label for="provinsi">Provinsi</label>
        <select id="provinsi" class="px-1 py-3 rounded" v-model="formData.address.province">
          <option
            v-for="province in provinces"
            :key="province.id"
            :value="province.id"
          >
            {{ province.nama }}
          </option>
        </select>
      </div>

      <div class="flex flex-col md:flex-row">
        <CurrentAge v-model="formData.age" />
        <Occupation v-model="formData.occupation" />
      </div>

      <div class="flex flex-col md:flex-row">
        <EmailAddress v-model="formData.email" />
        <Phonenumber v-model="formData.phone_number" />
      </div>

      <div class="flex flex-row justify-between mt-4">
        <div class="flex-shrink py-2">
          <NuxtLink to="/">Selamat Datang</NuxtLink>
        </div>
        <div
          class="flex flex-shrink bg-red-600 text-white justify-end p-2 cursor-pointer"
          @click="register"
        >
          Pemilihan Waktu Belajar
        </div>
        <!--        <NuxtLink to="/pemilihan-waktu-belajar">-->
        <!--        </NuxtLink>-->
      </div>
    </div>
  </div>
</template>

<script>
import ENV from '@/services/env'
import FormComponents from '~/components/students/registration-form'

export default {
  head() {
    return {
      title: "Daftar belajar membaca Al-Qur'an DIROSA - Rumah Qur'an Wahdah Islamiyah Jakarta",
      meta: [
        { hid: "description", name: "description", content: "Daftar belajar membaca Al-Qur'an untuk orang dewasa metode DIROSA" }
      ]
    }
  },
  components: FormComponents,
  data() {
    return {
      provinces: null,
      formData: {
        address: {
          street_name: '',
        },
      },
    }
  },
  created() {
    this.loadArea()
  },
  methods: {
    async register() {
      this.$nuxt.$loading.start()
      const formData = {
        account: {
          email: 'alfikri.izzuddin@pm.me',
          password: 'rahasia',
        },
        first_name: 'Muhammad Izzuddin',
        last_name: 'Al Fikri',
        address: {
          street_name: 'Jl. Madrasah No.8',
          city: 'Jakarta Selatan',
          district: 'Cilandak',
          sub_district: 'Gandaria Selatan',
          zipcode: 12420,
        },
        age: 29,
        dpd_area: 'Jakarta Selatan',
        phone_number: '082296731729',
        occupation: 'Pegawai Swasta',
      }
      const response = await this.$axios.post(
        ENV.participant.registrationUrl,
        formData
      )
      if (response.status === 201) {
        this.$nuxt.$loading.finish()
        this.$nuxt.$router.push('/pemilihan-waktu-belajar')
      }
    },
    loadArea(name = 'province') {
      this.$axios.get(ENV.area[name]).then((response) => {
        this.provinces = response.data.provinsi
      })
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/registration-form.scss';
</style>
