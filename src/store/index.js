import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import getters from './getters.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cart
  },
  getters
})