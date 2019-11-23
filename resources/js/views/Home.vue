<template>
    <div class="home">
        <h1>Home</h1>
        <br/>
        <!-- <cardView imgPosition="left" title="Work" subtitle="karya multimedia fit" image="https://cdn.dribbble.com/users/1138853/screenshots/7126896/media/cc23205e15ef786bf9b0f89cbf226890.jpg"/> -->
        <button @click="getUserData">Click me</button>
        {{user}}
    </div>
</template>
<script>
import cardView from '@/js/components/cardView.vue'
import githubApi from '@/js/plugins/api.js'
export default {
    components: {
        cardView
    },
    data(){
        return {
            username: '',
            user: null
        }
    },
    methods: {
        async getUserData(){
            this.user = null

            const result = await githubApi.searchUser({
                username: this.username
            }).then(res=>{
                this.user = res.data
            }).catch(err=>{
                console.log(err)
            })
        }
    },
}
</script>
<style>
    .home {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: auto;
    }
</style>