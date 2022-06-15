<template>
<div>
  
  <section  v-for="(video) in videos" :key="video.id"> 
  <div><img class="thumbnail" :src="video.thumbnail"></div>
      <div>{{video.description}}</div>
       <router-link :to="{ name: 'details', params: { 
            id: video.id, 
            title: video.title , 
            description : video.description, 
            duration : video.duration,
            format : video.format,
            thumbnail : video.thumbnail} }">
            Details
      </router-link>
      
      </section>
 </div>
</template>

<script setup>
import { ref } from "vue"

//dummy data
const videos = ref([
  {id:1, description:"first video", title:"video test", duration: 12, format : "vlc", thumbnail:"https://palam.ca/wp-content/uploads/2018/11/D%C3%A9couvrez-trois-sites-d%E2%80%99images-gratuites-libre-de-droit-pour-votre-cr%C3%A9ativit%C3%A9e.jpg"},
  {id:2, description:"second video", title:"video test2", duration: 20, format : "mp4", thumbnail:"https://palam.ca/wp-content/uploads/2018/11/D%C3%A9couvrez-trois-sites-d%E2%80%99images-gratuites-libre-de-droit-pour-votre-cr%C3%A9ativit%C3%A9e.jpg"},
 {id:3, description : "third video", title :"video test3", duration: 25, format : "mp4", thumbnail:"https://palam.ca/wp-content/uploads/2018/11/D%C3%A9couvrez-trois-sites-d%E2%80%99images-gratuites-libre-de-droit-pour-votre-cr%C3%A9ativit%C3%A9e.jpg"}
])

</script>

