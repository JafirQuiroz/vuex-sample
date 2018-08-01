<template>
    <div>
        <div class="card">
            <div class="card-header">
                checkCounter
            </div>
            <div class="card-body">
                <h5 class="card-title">{{counter}}</h5>
                <p class="card-text">{{name}}</p>
                <p class="card-text">{{myName}}</p>
                <a href="#" class="btn btn-primary" @click="doSomething">Change Name</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "CheckCounter",
        data() {
          return {
              myName: 'Original Name'
          }
        },
        computed: {
            ...mapState([
                'counter',
                'name'
            ])
        },
        methods: {
            doSomething() {
                this.$store.dispatch('doSomething').then(() => {
                    this.myName = 'change my own data'
                })
            }
        }
    }
</script>

<style scoped>

</style>