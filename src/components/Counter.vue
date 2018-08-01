<template>
    <div>
        <div class="card">
            <div class="card-header">
                Counter
            </div>
            <div class="card-body">
                <h5 class="card-title">{{customData}}</h5>
                <p class="card-text">{{name}}</p>
                <a href="#" class="btn btn-primary" @click="sumCounter">{{counter}}</a>
                <a href="#" class="btn btn-primary" @click="changeName">Change Name</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Counter",
        data() {
            return {
               myData: ['one','two','long','word']
            }
        },
        computed: {
            customData() {
                return this.myData.filter(data => data.length <= 3)
            },
            //when we use more than one state and our component has its own data/computed prop, we can add it with the
            // spread operator and the use of mapState helper
            ...mapState([
                'counter',
                'name'
            ])
        },
        methods: {
            sumCounter() {
                //We can not directly modify the mutation we need to use commit method and the name of the mutation that we can to call
                this.$store.commit('increment')
            },
            changeName() {
                let newName = 'New Name'
                //We can pass aditional data as second parameter
                this.$store.commit('changeName',newName)
            }
        }
    }
</script>

<style scoped>

</style>