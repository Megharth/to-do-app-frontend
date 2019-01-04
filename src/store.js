import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token : ''
    }
  },
  mutations: {
    login(state, token) {
      state.user.token = token
    }
  },
  actions: {

  }
})
