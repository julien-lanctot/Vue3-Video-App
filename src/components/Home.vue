<template>
<div>
  <section  v-for="(video) in videos" :key="video.id"> 
       <router-link :to="{ name: 'details', params: { 
            id: video.id, 
            title: video.title , 
            description : video.description, 
            duration : video.duration,
            format : video.format} }">
            Details of {{video.description}}  
      </router-link>
      </section>
 </div>
</template>

<script setup>
import { ref } from "vue"

//dummy data
const videos = ref([
  {id:1, description:"first video", title:"video test", duration: 12, format : "vlc"},
  {id:2, description:"second video", title:"video test2", duration: 20, format : "mp4"},
 {id:3, description : "third video", title :"video test3", duration: 25, format : "mp4"}
])

</script>

