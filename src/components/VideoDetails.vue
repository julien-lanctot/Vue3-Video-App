<template>
 <div>
    Title : <input type="text" v-model="videoTitle">
 </div>
 <div>
    Description : <input type="text" v-model="videoDescription">
 </div>
 <div>
    Duration : 1234
 </div>
 <div>
    Format : mp4
 </div>
  <button @click="$router.push('/')" type="submit" class="btn btn__primary btn__lg" >Back</button>
</template>

<script>
export default {
    props: ['title', 'description'],
    data() {
        return {
            videoDescription: 'null',
            videoTitle:'null'
        }
    },
    mounted() {

            this.videoDescription = this.description
            this.videoTitle = this.title    
        }

    }

</script>


