<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="你好" />
      <Hi/> -->
    <Nav>sfsdfds</Nav>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import Hi from '@/components/Hi.vue'
  import Nav from '@/components/nav.vue'
  export default {
    name: 'app',
    components: {
      HelloWorld,
      Hi,
      Nav
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  
  #app {
    margin: 0px;
    padding: 0px;
  }
</style>
