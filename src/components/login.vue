<template>
    <div>
        <h1 @click="show()">这是登录页面</h1>
    </div>
</template>
<style lang="scss" coped>

</style>
<script>
    export default {
        data:function(){
            return {}
        },
        methods:{
            show(){
                console.log(this.$axios)

                this.$axios.get("../a.json").then((response1)=>{
                      console.log(response1.data.name)
                })
            }
        }
    }
</script>