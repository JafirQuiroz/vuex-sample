<template>
    <div>
        <h2>{{counter}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        computed: {
            counter() {
                //Get the state of counter with this.$store.state
                return this.$store.state.counter
            }
        }
    }
</script>

<style scoped>

</style>