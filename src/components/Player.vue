<template>
     <div  class="music-box">
        <!-- adfsafdf
        {{this.$route.params.yueid}} -->
      
        <div
        v-for="(item,index) in AA"
        :key="index"
       
        >
            <audio :src="item.url" controls autoplay></audio>
            
        </div>

       
        
    </div>
    
</template>
<script>
export default {
    name:"Player",
    data() {
        return {
            AA:{}
        }
    },
    mounted() {
        if(this.$route.params.yueid){
            this.$axios.get("http://localhost:3000/music/url",{
                params:{
                    id:this.$route.params.yueid
                }
            })
            
            .then(res =>{
                console.log(res.data.data)
                this.AA = res.data.data
            })
            .catch(new Error(error))
         
         
        }
     
    }

}
</script>
<style scoped lang="less">
.music-box{
        height: 1000px;
        width: 100%;
        background-color: #b037ec;
        height: 1400px;
    }
    audio{
        margin-top: 25px;
        margin-left: 30px;
        // color: aquamarine;
    }
</style>