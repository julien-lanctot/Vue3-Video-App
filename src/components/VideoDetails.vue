<template>
<div>
<div class="details">
   <div class="detailsInner">
    Title : <input type="text" v-model="videoTitle">
    </div>
    <div  class="detailsInner">
    Description : <input type="text" v-model="videoDescription">
    </div>
 <div  class="detailsInner">
    Duration : {{videoDescription}}
 </div>
 <div class="detailsInner">
    Format : {{videoFormat}}
 </div>
</div>
  <button @click="$router.push('/')" class="btn btn__primary btn__lg" >Back</button>
 </div>
 
</template>
<script>
export default {
    props: ['title', 'description', 'duration', 'format', 'thumbnail'],
    data() {
        return {
            videoDescription: 'null',
            videoTitle:'null',
            videoDuration: 0,
            videoFormat:'null',
            videoThumbnail:'null'
        }
    },
    mounted() {

            this.videoDescription = this.description
            this.videoTitle = this.title
            this.videoDuration = this.duration
            this.videoFormat = this.format 
            this.videoThumbnail  = this.thumbnail
        }

    }

</script>


