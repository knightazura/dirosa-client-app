export const state = () => ({
  // session
  s: {
    // registered status
    rg: false,
    // last page
    lp: 'index',
    // candidate data { id: candidate ID, d_a: DPD area related to their address }
    c: null,
    // joined status
    j: false
  },
  // biography form status
  bf: {
    fn: false, // full name
    asn: false, // address street name
    apv: false, // address province
    act: false, // address city
    age: false, // age
    ocp: false, // occupation
    ead: false, // email address
    phn: false // phone number
  }
})

export const getters = {
  hasBeenRegister(state) {
    return state.s.rg
  },
  biographyFormValidated(state) {
    const keys = Object.keys(state.bf)

    return !keys.some(k => state.bg[k] === false)
  }
}

export const mutations = {
  SET_SESSION(state, payload) {
    state.s = Object.assign(state.s, JSON.parse(payload))

    const session = JSON.stringify(state.s)
    localStorage.setItem('session', session)
  },
  CLEAR_SESSION(state) {
    state.s = Object.assign(
      {},
      {
        rg: false,
        lp: 'index',
        c: null,
      }
    )
  },
  VALIDATE_FORM(state, payload) {
    const formName = payload.formName

    state[formName][payload.fieldName] = payload.validationValue
  }
}
