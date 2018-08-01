export const cart = {
    namespaced: true,
    state: {
        getProducts: []
    },
    mutations: {
        addProduct(state,product) {
            state.getProducts.push(product)
        },
        deleteProduct(state,id) {
            state.getProducts = state.getProducts.filter(product => product.id !== id )
        }
    },
    actions: {
        addProduct({commit},product) {
            commit('addProduct',product)
        },
        deleteProduct({commit},id) {
            commit('deleteProduct',id)
        }
    },
    getters: {
        total: state => {
            return state.getProducts.length
        }
    }
}