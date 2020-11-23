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
