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
    },
    doSomething(state) {
        state.name = "async action"
    }
  },
  actions: {
    changeName(context,payload) {
        setTimeout(() => {
            context.commit('changeName',payload)
        },3000)

    },
    /* eslint-disable */
    doSomething({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('doSomething')
                resolve()
            },2000)
        })
    }
  }
})
