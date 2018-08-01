<template>
    <div>
        <h3>{{checkCounter}}</h3>
    </div>
</template>

<script>
    export default {
        name: "CheckCounter",
        computed: {
            checkCounter() {
                //Get the state of counter with this.$store.state
                return this.$store.state.counter
            }
        }
    }
</script>

<style scoped>

</style>