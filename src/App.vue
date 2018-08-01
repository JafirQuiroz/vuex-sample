<template>
  <div class="container">
      <div class="row">
          <counter class="col-6"></counter>
          <check-counter class="col-3"></check-counter>
      </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import CheckCounter from './components/CheckCounter'

export default {
  name: 'app',
  components: {
    Counter,
    CheckCounter
  }
}
</script>

<style>

</style>
