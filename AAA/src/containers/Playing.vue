<template>
    <div class=".music-box">
        <!-- adfsafdf
        {{this.$route.params.yueid}} -->
        <Yiyang />
        <Player />
        <!-- <div
        v-for="(item,index) in AA"
        :key="index"
        > -->
            <!-- <audio :src="item.url" controls autoplay></audio> -->
            <!-- <audio src="https://music.163.com/song/media/outer/url?id=.mp3" controls autoplay></audio> -->
        <!-- </div> -->

        <!-- <Yiyang :title='this.$route.params.yueid' /> -->
        
    </div>
    
</template>
<script>
import Yiyang from '../components/Yiyang'
import Player from '../components/Player'
export default {
    name:"Playing",
    data() {
        return {
            AA:{},
            BB:{}
        }
    },
    components:{
        Yiyang,
        Player
    },
    mounted() {
        // if(this.$route.params.yueid){
        //     this.$axios.get("http://localhost:3000/music/url",{
        //         params:{
        //             id:this.$route.params.yueid
        //         }
        //     })
            
        //     .then(res =>{
        //         console.log(res.data.data)
        //         this.AA = res.data.data
        //     })
        //     .catch(new Error(error))
         
            // this.$axios.get("http://localhost:3000/song/detail",{
            //     params:{
            //         ids:this.$route.params.yueid
            //     }
            // })
            
            // .then(res =>{
            //     console.log(res.data)
            //     this.BB = res.data.data
            // })
            // .catch(new Error(error))
    // HAO  }
        // if(this.$route.params.yueid){
        //      this.$axios.get("http://localhost:3000/song/detail",{
        //         params:{
        //             ids:this.$route.params.yueid
        //         }
        //     })
            
        //     .then(res =>{
        //         console.log(res.data)
        //         this.BB = res.data.data
        //     })
        //     .catch(new Error(error))
        // }
    }

}
</script>
<style scoped lang="less">
    .music-box{
        height: 100%;
        width: 100%;
        background-color: #b037ec;
    }
    audio{
        margin-top: 25px;
        margin-left: 30px;
    }
</style>