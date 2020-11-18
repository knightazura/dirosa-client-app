<template>
  <div id="right-side">
    <div class="form-pendaftaran md:w-2/3">
      <FullName v-model="formData.full_name" class="mb-8" />

      <Address v-model="formData.address.street_name" />

      <div class="form-pendaftaran__zone-section w-full">
        <div class="form-pendaftaran__select-input md:mr-4 md:flex-grow">
          <label for="provinsi">
            <span>Provinsi:</span>
            <select
              id="provinsi"
              v-model="formData.address.province"
            >
              <option
                v-for="province in provinces"
                :key="province.id"
                :value="province.id"
              >
                {{ province.nama }}
              </option>
            </select>
          </label>
        </div>

        <!-- Kota -->
        <div class="form-pendaftaran__select-input md:mr-4 md:flex-grow">
          <label for="kota">
            <span>Kota/Kabupaten:</span>
            <select id="kota" v-model="formData.address.city">
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.nama }}
              </option>
            </select>
          </label>
        </div>

        <!-- Kecamatan -->
        <div class="form-pendaftaran__select-input md:flex-grow">
          <label for="kecamatan">
            <span>Kecamatan:</span>
            <select
              id="kecamatan"
              v-model="formData.address.district"
            >
              <option
                v-for="district in districts"
                :key="district.id"
                :value="{id: district.id, name: district.nama}"
              >
                {{ district.nama }}
              </option>
            </select>
          </label>
        </div>
      </div>

      <div class="flex flex-col md:flex-row">
        <CurrentAge v-model="formData.age" />
        <Occupation v-model="formData.occupation" />
      </div>

      <div class="flex flex-col md:flex-row">
        <EmailAddress v-model="formData.account.email" />
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
      cities: null,
      districts: null,
      formData: {
        account: {},
        address: {
          street_name: '',
        },
      },
    }
  },
  watch: {
    'formData.address.province'(newProvince) {
      this.loadArea('cities', newProvince)
    },
    'formData.address.city'(newCity) {
      this.loadArea('districts', newCity)
    },
  },
  created() {
    this.loadArea()
  },
  methods: {
    async register() {
      this.formData.account.password = 'dirosa_' + this.formData.phone_number
      console.log(this.formData)
      this.$nuxt.$loading.start()
      const response = await this.$axios.post(
        ENV.participant.registrationUrl,
        this.formData
      )
      if (response.status === 201) {
        this.$nuxt.$loading.finish()
        this.$nuxt.$router.push('/pemilihan-waktu-belajar')
      }
    },
    loadArea(name = 'provinces', id = null) {
      let responseName = 'provinsi'
      const url = id ? ENV.area[name] + id : ENV.area[name]

      switch (name) {
        case 'cities':
          responseName = 'kota_kabupaten'
          break
        case 'districts':
          responseName = 'kecamatan'
          break
        case 'subDistricts':
          responseName = 'kabupaten'
          break
      }
      this.$axios.get(url).then((response) => {
        this[name] = response.data[responseName]
      })
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/registration-form.scss';
</style>
