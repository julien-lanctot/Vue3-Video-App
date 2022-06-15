<template>
  <Header></Header>
  <Home msg="Welcome to Your Vue.js Appblablabla"/>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
export default {

  name: 'App',
  components: {
    Header,
    Home
  },
  created() {
    // GET request using axios with set headers
  /* const config = {
  headers:{
    'X-PRIVATEKEY': "111f09c8-1222-419a-8370-2d615c72f8df",
    'X-API-KEY': '4083bd32-9556-47ab-8b08-93b684c380d2'
  }
};*/

   fetch("https://ms0e9sptyj.execute-api.useast-1.amazonaws.com/users/92535540-f473-4490-8dee-458092d0e346/videos", {
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
</style>
