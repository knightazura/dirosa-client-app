const BASE_URL = process.env.BACKEND_BASE_URL
const AREA_ADMINISTRATION = process.env.ADMINISTRATION_AREA_API

export default {
  base_url: BASE_URL,
  participant: {
    courseAvailableTime: BASE_URL + process.env.COURSE_AVAILABLE_TIME,
    registrationUrl: BASE_URL + process.env.PARTICIPANT_REGISTRATION_URL,
    joinUrl: BASE_URL + process.env.JOIN_URL,
  },
  area: {
    provinces: AREA_ADMINISTRATION + process.env.PROVINCE_URL,
    cities: AREA_ADMINISTRATION + process.env.CITY_URL,
    districts: AREA_ADMINISTRATION + process.env.DISTRICT_URL,
    subDistricts: AREA_ADMINISTRATION + process.env.SUBDISTRICT_URL,
  },
  cs_number: process.env.CS_NUMBER,
}
