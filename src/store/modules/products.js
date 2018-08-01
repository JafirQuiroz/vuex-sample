export const products = {
    namespaced: true,
    state: {
        myProducts: []
    },
    mutations: {
        fetchProducts(state,products) {
            state.myProducts = products
        }
    },
    actions: {
        fetchProducts({commit},products) {
            commit('fetchProducts',products)
        }
    },
    getters: {
        myProducts(state) {
            return state.myProducts
        }
    }
}