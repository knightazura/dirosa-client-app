<template>
  <div>
    <label for="email">
      Alamat email:
      <input v-model="formData.account.email" type="text" />
    </label>

    <label for="password">
      Password:
      <input v-model="formData.account.password" type="text" />
    </label>

    <label for="nama_depan">
      Nama Depan:
      <input v-model="formData.first_name" type="text" />
    </label>

    <label for="nama_belakang">
      Nama Belakang:
      <input v-model="formData.last_name" type="text" />
    </label>

    <label for="street_name">
      Nama Jalan:
      <input v-model="formData.address.street_name" type="text" />
    </label>

    <label for="city">
      Kota:
      <input v-model="formData.address.city" type="text" />
    </label>

    <label for="district">
      Kecamatan:
      <input v-model="formData.address.district" type="text" />
    </label>

    <label for="sub_district">
      Kelurahan:
      <input v-model="formData.address.sub_district" type="text" />
    </label>

    <label for="street_name">
      Kode POS:
      <input v-model="formData.address.zipcode" type="text" />
    </label>

    <label for="age">
      Umur:
      <input v-model="formData.age" type="text" />
    </label>

    <label for="dpd">
      DPD:
      <input v-model="formData.dpd_area" type="text" />
    </label>

    <label for="phone_number">
      No. HP:
      <input v-model="formData.phone_number" type="text" />
    </label>

    <label for="dpd">
      Pekerjaan:
      <input v-model="formData.occupation" type="text" />
    </label>

    <label for="available_time">
      Waktu yang tersedia:
      <input v-model="formData.available_time" type="text" />
    </label>

    <button @click="register">Daftar</button>
    <div v-if="result" class="bg-green-600 p-5">BERHASIL HURRAY!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: false,
      formData: {
        account: {
          email: '',
          password: '',
        },
        first_name: '',
        last_name: '',
        address: {
          street_name: '',
          city: '',
          district: '',
          sub_district: '',
          zipcode: '',
        },
        age: '',
        dpd_area: '',
        phone_number: '',
        occupation: '',
        total_classes: 0,
        available_time: '',
      },
    }
  },
  methods: {
    async register() {
      const response = await this.$axios.post(
        'http://localhost:3030/pengajar',
        this.formData
      )
      if (response) {
        console.log({ response })
        this.result = true
      }
    },
  },
}
</script>

<style scoped></style>
