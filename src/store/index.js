import Vue from 'vue'
import Vuex from 'vuex'
import loginServices from '../services/loginServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartQty: 0,
    user: {
      email: '',
      accessToken: ''
    }
  },
  mutations: {
    addToCart(state, { qty }) {
      state.cartQty += qty
    },
    removeFromCart(state, { qty }) {
      state.cartQty -= qty
    },
    clearCart(state) {
      state.cartQty = 0
    },
    setUser(state, { user }) {
      console.log(user)
      state.user = user
    },
    LogOut(state) {
      state.user = {
        email: '',
        accessToken: ''
      }
    },
  },
  actions: {
    async Register({ dispatch }, registerData) {
      await loginServices.register(registerData)
      await dispatch('LogIn', registerData)
    },
    async LogIn({ commit }, loginData) {
      let res = await loginServices.login(loginData)
      await commit('setUser', {
        user: {
          email: loginData.email,
          accessToken: res.data.accessToken
        }
      })
    },
    async LogOut({ commit }) {
      let user = null
      commit('logout', user)
    }
  },
  modules: {
  }
})
