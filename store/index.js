export const state = () => ({
  // session
  s: {
    // registered status
    rg: false,
    // last page
    lp: 'index',
    // candidate data { id: candidate ID, d_a: DPD area related to their address }
    c: {},
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
  },
  // route
  rot: {
    pv: '/'
  },
  // mobile main menu state
  mmms: {
    opened: false
  }
})

export const getters = {
  hasBeenRegister(state) {
    return state.s.rg
  },
  hasBeenJoined(state) {
    return state.s.j
  },
  biographyFormValidated(state) {
    const keys = Object.keys(state.bf)

    return !keys.some(k => state.bg[k] === false)
  },
  previousRoute(state) {
    return state.rot.pv;
  },
  mainMenuOpened(state) {
    return state.mmms.opened;
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
  },
  SET_PREVIOUS_ROUTE(state, payload) {
    localStorage.setItem('pr', payload);
    state.rot.pv = payload;
  },
  OPEN_MAIN_MENU(state, payload) {
    state.mmms.opened = payload;
  }
}

export const actions  = {
  getPreviousRouteFromLS({ commit }) {
    let pvRoute = localStorage.getItem('pr');

    if (pvRoute)
      commit('SET_PREVIOUS_ROUTE', pvRoute);
  }
}
