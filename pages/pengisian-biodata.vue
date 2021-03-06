<template>
  <div id="right-side" class="right-side__with-headerbar">
    <div class="form-pendaftaran md:pt-6">
      <ValidationObserver v-slot="{ invalid }">
        <h1 class="hidden md:block form-pendaftaran__title">Biodata</h1>
        <FullName v-model="formData.full_name" />
        
        <Address v-model="formData.address.street_name" />

        <div class="form-pendaftaran__zone-section w-full">
          <!-- Provinsi -->
          <div class="form-pendaftaran__select-input flex-grow lg:w-1/3 lg:pr-2">
            <label for="provinsi">
              <span>Provinsi:</span>
              <validation-provider rules="empty" name="Provinsi" v-slot="{ errors }" class="flex flex-col">
                <select id="provinsi" v-model="formData.address.province">
                  <option
                    v-for="province in provinces"
                    :key="province.id"
                    :value="{ id: province.id, name: province.nama }"
                  >
                    {{ province.nama }}
                  </option>
                </select>
                <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold mt-4">{{ errors[0] }}</span>
              </validation-provider>
            </label>
          </div>

          <!-- Kota -->
          <div class="form-pendaftaran__select-input flex-grow lg:w-1/3 lg:pr-2">
            <label for="kota">
              <span>Kota/Kabupaten:</span>
              <validation-provider rules="empty" name="Kota" v-slot="{ errors }" class="flex flex-col">
                <select id="kota" v-model="formData.address.city">
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="{ id: city.id, name: city.nama }"
                  >
                    {{ city.nama }}
                  </option>
                </select>
                <span v-if="errors.length > 0" class="text-red-600 text-sm font-bold mt-4">{{ errors[0] }}</span>
              </validation-provider>
            </label>
          </div>

          <!-- Kecamatan -->
          <div class="form-pendaftaran__select-input flex-grow lg:w-1/3">
            <label for="kecamatan">
              <span>Kecamatan:</span>
              <select id="kecamatan" v-model="formData.address.district">
                <option
                  v-for="district in districts"
                  :key="district.id"
                  :value="{ id: district.id, name: district.nama }"
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
          <EmailAddress v-model="formData.email" />
          <Phonenumber v-model="formData.phone_number" />
        </div>

        <div class="flex flex-row justify-between md:mt-4">
          <div class="hidden flex-shrink py-2 md:block">
            <NuxtLink to="/">
              <arrow-left-icon></arrow-left-icon>
            </NuxtLink>
          </div>
          <button
            :disabled="invalid"
            :class="[
              'form-pendaftaran__join-button',
              invalid ? 'disabled-button' : 'main-button'
            ].join(' ')"
            @click="register"
          >
            Selanjutnya
          </button>
          <!--        <NuxtLink to="/pemilihan-waktu-belajar">-->
          <!--        </NuxtLink>-->
        </div>
      </ValidationObserver>
      <div>&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ArrowLeftIcon } from 'vue-feather-icons'
import Session from '@/mixins/session'
import ENV from '@/services/env'
import FormComponents from '~/components/students/registration-form'

export default {
  components: {
    ...FormComponents,
    ArrowLeftIcon,
    ValidationProvider,
    ValidationObserver
  },
  mixins: [Session],
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
  mounted() {
    // from mixins@Session
    this.setupCurrentSession()

    this.loadArea()
  },
  methods: {
    async register() {
      this.$nuxt.$loading.start()
      let age = parseInt(this.formData.age)
      this.formData.age = age;

      if (process.browser) {
        let referral_code = localStorage.getItem('referral_code')

        if (referral_code)
          this.formData.referrer = referral_code
      }

      try {
        const response = await this.$axios.post(
          ENV.participant.registrationUrl,
          this.formData
        )
        if (response.status === 201) {
          const currentSession = this.getSession()

          let candidateInfo = Object.assign(
            {
              id: response.data.candidate.id,
              d_a: response.data.candidate.dpd_area,
            },
            currentSession.c
          );

          // from mixins@Session
          this.commitSession({
            rg: true,
            c: candidateInfo,
          })

          this.$nuxt.$loading.finish()
          this.$nuxt.$router.push('/pemilihan-waktu-belajar')
        }
      } catch (error) {
        console.log({ error })
        this.$toast.error(
          'Oops.. Maaf ada kesalahan ketika anda ingin mendaftar',
          {
            duration: 4500,
            theme: 'bubble',
            closeOnSwipe: true,
            containerClass: 'mt-2',
            className: 'mx-3 py-2',
            action: {
              text: 'Tutup',
              onClick: (e, toastObject) => toastObject.goAway(0),
            },
          }
        )
      }
    },

    loadArea(name = 'provinces', place = null) {
      let responseName = 'provinsi'
      const url = place ? ENV.area[name] + place.id : ENV.area[name]

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
  head() {
    return {
      title:
        "Belajar membaca Al-Qur'an metode DIROSA - Rumah Qur'an Wahdah Islamiyah Jakarta",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Belajar membaca Al-Qur'an untuk orang dewasa dengan metode DIROSA",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/registration-form.scss';
</style>
