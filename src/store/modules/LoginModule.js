export default {
  namespaced: true,
  state: {
    userToken: '',
  },
  mutations: {
    setUser (state, token) {
      state.userToken = token;
      console.log(this);
    }
  },
  actions: {

  },
  getters: {

  }
}