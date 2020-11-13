const BASE_URL = process.env.BACKEND_BASE_URL
const AREA_ADMINISTRATION = process.env.ADMINISTRATION_AREA_API

export default {
  participant: {
    registrationUrl: BASE_URL + process.env.URL_PARTICIPANT_REGISTRATION,
  },
  area: {
    province: AREA_ADMINISTRATION + process.env.PROVINCE_URL,
    city: AREA_ADMINISTRATION + process.env.CITY_URL,
    district: AREA_ADMINISTRATION + process.env.DISTRICT_URL,
    subDistrict: AREA_ADMINISTRATION + process.env.SUBDISTRICT_URL,
  },
}
