const session = {
  async mounted() {
    let vm = this
    // has been registered?
    this.$store.watch(
      function (state, getters) {
        return getters.hasBeenRegister
      },
      function (newValue) {
        if (newValue && vm.$route.name === 'pengisian-biodata') {
          vm.$nuxt.$router.push('/pemilihan-waktu-belajar')
        }

        if (!newValue && vm.$route.name === 'pemilihan-waktu-belajar') {
          vm.$nuxt.$router.push('/pengisian-biodata')
        }
      },
      {
        immediate: true
      }
    )

    // has been joined?
    this.$store.watch(
      function (state, getters) {
        return getters.hasBeenJoined
      },
      function (newValue) {
        if (
          newValue &&
          (
            vm.$route.name === 'pengisian-biodata' ||
            vm.$route.name === 'pemilihan-waktu-belajar'
          )
        ) {
          vm.$nuxt.$router.push('/selesai')
        }
      },
      {
        immediate: true
      }
    )
  },
  computed: {
    hasBeenJoined() {
      return this.$store.getters['hasBeenJoined'];
    }
  },
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
          j: this.checkSession(session) ? false : session.j,
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
