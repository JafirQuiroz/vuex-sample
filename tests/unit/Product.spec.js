import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Product from '../../src/components/Product'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Product.vue', () => {
    var actions = {
        addProduct: jest.fn(),
    }
    let store
    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                products: {
                    namespaced: true,
                    state: {
                        myProducts: [{
                            "userId": 1,
                            "id": 1,
                            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                            }]
                    }
                },
                cart: {
                    namespaced: true,
                    actions
                }
            }
        })
    })

    it('dispatches "addProduct" when click on Add to cart button', () => {
        const wrapper = shallowMount(Product, { store, localVue })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(actions.addProduct).toHaveBeenCalled()
    })
})