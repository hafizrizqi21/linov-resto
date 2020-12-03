import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartQty: 0
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
    }
  },
  actions: {
  },
  modules: {
  }
})
