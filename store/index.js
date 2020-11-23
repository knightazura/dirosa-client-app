export const state = () => ({
  // session
  s: {
    // registered
    rg: false,
    // last page
    lp: 'index',
    // candidate data
    c: null,
  },
})

export const getters = {
  hasBeenRegister(state) {
    return state.s.rg
  },
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
}
