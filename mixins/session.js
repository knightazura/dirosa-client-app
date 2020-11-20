const session = {
  methods: {
    checkSession(session) {
      return Object.is(session, null)
    },
    getSession() {
      // Get session from localStorage
      const session = localStorage.getItem('session')

      return !this.checkSession(session) ? JSON.parse(session) : null
    },
    setupCurrentSession() {
      const session = this.getSession()

      // Setup current session
      const currentSession = Object.assign(
        this.checkSession(session) ? {} : session,
        {
          rg: this.checkSession(session) ? false : session.rg,
          lp: this.$route.name,
        }
      )

      // Commit to store
      this.commitSession(currentSession)
    },
    commitSession(payload) {
      this.$store.commit('SET_SESSION', JSON.stringify(payload))
    },
    clearSession() {
      this.$store.commit('CLEAR_SESSION')
    },
  },
}

export default session
