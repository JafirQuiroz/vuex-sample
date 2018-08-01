<template>
    <div>
        <div class="card">
            <div class="card-header">
                checkCounter
            </div>
            <div class="card-body">
                <h5 class="card-title">{{checkCounter}}</h5>
            </div>
        </div>
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