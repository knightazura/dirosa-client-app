const BASE_URL = process.env.BACKEND_BASE_URL
const AREA_ADMINISTRATION = process.env.ADMINISTRATION_AREA_API

export default {
  participant: {
    registrationUrl: BASE_URL + process.env.PARTICIPANT_REGISTRATION_URL,
  },
  area: {
    provinces: AREA_ADMINISTRATION + process.env.PROVINCE_URL,
    cities: AREA_ADMINISTRATION + process.env.CITY_URL,
    districts: AREA_ADMINISTRATION + process.env.DISTRICT_URL,
    subDistricts: AREA_ADMINISTRATION + process.env.SUBDISTRICT_URL,
  },
}
