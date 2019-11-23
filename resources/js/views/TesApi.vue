<template>
    <div>
        <h1>Tes API</h1>
        <input type="text" v-model="username">
        <input type="submit" @click="getUserData">
        <br>
        {{user}}
    </div>
</template>
<script>
import githubApi from '@/plugins/api.js'
export default {
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