<template>
    <div>
        <div class="card">
            <div class="card-header">
                Cart - total products ({{ total }})
            </div>
            <div class="card-body">
                <div class="card-body" v-for="product in getProducts" :key="product.id">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">{{ product.body }}</p>
                    <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        name: "Cart",
        data() {
            return {

            }
        },
        computed: {
            ...mapState('cart',[
                'getProducts'
            ]),
            ...mapGetters('cart',[
                'total'
            ])
        },
        methods: {
            ...mapActions('cart',[
                'deleteProduct'
            ])
        }
    }
</script>

<style scoped>

</style>