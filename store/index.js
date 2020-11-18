export const state = () => ({
  // session
  s: {
    // registered
    rg: false,
    // last page
    lp: 'index'
  }
})

export const getters = {
  hasBeenRegister(state) {
    return state.s.rg
  }
}

export const mutations = {
  SET_SESSION(state, payload) {
    state.s = Object.assign(state.s, JSON.parse(payload))

    const session = JSON.stringify(state.s)
    localStorage.setItem('session', session)
  },
  REGISTER_SUCCESS(state) {
    state.s.rg = true
  }
}