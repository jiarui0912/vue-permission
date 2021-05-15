import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule from './modules/LoginModule'
import Permission from './modules/Permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LoginModule,
    Permission
  }
})
