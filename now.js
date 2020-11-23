{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/vercel-builder",
      "config": {}
    }
  ],
  "env": {
    "BACKEND_BASE_URL": "https://dirosa-backend-api.herokuapp.com",
    "ADMINISTRATION_AREA_API": "https://dev.farizdotid.com/api/daerahindonesia",
    "PARTICIPANT_REGISTRATION_URL": "/peserta",
    "JOIN_URL": "/waiting-list",
    "PROVINCE_URL": "/provinsi",
    "CITY_URL": "/kota?id_provinsi=",
    "DISTRICT_URL": "/kecamatan?id_kota=",
    "SUBDISTRICT_URL": "/kelurahan?id_kecamatan=",
  },
}
