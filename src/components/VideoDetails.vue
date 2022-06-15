<template>
 <div>
    Title : <input type="text" v-model="videoTitle">
 </div>
 <div>
    Description : <input type="text" v-model="videoDescription">
 </div>
 <div>
    Duration : {{videoDuration}}
 </div>
 <div>
    Format : {{videoFormat}}
 </div>
  <button @click="$router.push('/')" class="btn btn__primary btn__lg" >Back</button>
</template>

<script>
export default {
    props: ['title', 'description', 'duration', 'format'],
    data() {
        return {
            videoDescription: 'null',
            videoTitle:'null',
            videoDuration: 0,
            videoFormat:'null'
   
        }
    },
    mounted() {

            this.videoDescription = this.description
            this.videoTitle = this.title
            this.videoDuration = this.duration
            this.videoFormat = this.format    
        }

    }

</script>


