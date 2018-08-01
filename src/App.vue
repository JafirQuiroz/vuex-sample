<template>
  <div class="container">
      <div class="row">
          <cart class="col-4"></cart>
          <product class="col-8"></product>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cart from './components/Cart'
import Product from './components/Product'

export default {
  name: 'app',
  components: {
    Cart,
    Product
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        this.$store.dispatch('products/fetchProducts',response.data)
        // eslint-disable-next-line
    }).catch(error => {console.log(error)})
  }
}
</script>

<style>

</style>
