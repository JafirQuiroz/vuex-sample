<template>
    <div>
        <div class="card">
            <div class="card-header">
               {{ captitle }}
            </div>
            <div class="card-body" v-for="product in myProducts" :key="product.id">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.body }}</p>
                <button @click="addProduct(product)" class="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Product",
        data() {
          return {
            cardTitle: 'products'
          }
        },
        computed: {
            captitle() {
                return this.cardTitle.replace(/^\w/, c => c.toUpperCase());
            },
            ...mapState('products',[
                'myProducts'
            ])
        },
        methods: {
            ...mapActions('cart',[
                'addProduct'
            ])
        }
    }
</script>

<style scoped>

</style>