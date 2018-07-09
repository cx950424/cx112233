<template>
  <div>    
  		<navbar></navbar>
    <router-view></router-view>
    <buttombar></buttombar>
  </div>
</template>

<script>
import navbar from "./components/navbar"
import buttombar from "./components/buttombar"

export default {
  components:{
  	navbar,
    buttombar
  }
}
</script>
  
<style>
*{
  margin:0px;
  padding:0px;
}

html,body{
  height: 100%;
}


ul {
  list-style: none;
}
</style>
