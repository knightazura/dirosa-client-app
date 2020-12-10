export default function ({ store }) {
  let setup = false
  if (!setup) {
    store.app.router.beforeEach((to, from, next) => {
      setup = true;
      store.commit('SET_PREVIOUS_ROUTE', from.path);
      next();
    })
  }
}