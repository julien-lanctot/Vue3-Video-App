<template>
 <header>
      <router-link to="/">Home</router-link>
  </header>
   <router-view />
</template>

<script>
import Home from './components/Home.vue'

export default {

  name: 'App',
  components: {
    Home
  },
  created() {
   fetch("https://ms0e9sptyj.execute-api.us-east-1.amazonaws.com/users/92535540-f473-4490-8dee-458092d0e346/videos", {
    method: "GET",
    headers:{
    'X-PRIVATEKEY': "111f09c8-1222-419a-8370-2d615c72f8df",
    'X-API-KEY': '4083bd32-9556-47ab-8b08-93b684c380d2'
  },
  }).then(res=> console.log(res)).catch(err=> console.log(err))
}
}
</script>
,
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input[type=text], select {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
    border: none;
    border-radius: 3px;
    margin: auto 0;
    padding: 0.5rem 0.75rem;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all 0.1s ease-in;
  }
 header {
  padding: 60px;
  text-align: left;
  color: black;
  font-size: 15px;
}
.thumbnail
{
   width:100px;
   height:100px;
}
</style>
