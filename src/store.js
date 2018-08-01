import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    name: 'This is a name'
  },
  mutations: {
    increment(state) {
        state.counter++
    },
    changeName(state, payload) {
        state.name = payload
    }
  },
  actions: {

  }
})
