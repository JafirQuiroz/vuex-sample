<template>
  <div id="app">
    <counter></counter>
    <check-counter></check-counter>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
