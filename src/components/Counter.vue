<template>
    <div>
        <div class="card">
            <div class="card-header">
                Counter
            </div>
            <div class="card-body">
                <h5 class="card-title">{{customData}}</h5>
                <p class="card-text">{{name}}</p>
                <a href="#" class="btn btn-primary">{{counter}}</a>
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
        }
    }
</script>

<style scoped>

</style>