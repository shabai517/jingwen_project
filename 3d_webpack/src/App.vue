<template>
  <div id="app">
    <navComponent></navComponent>   
    <router-view></router-view>
  </div>
</template>

<script>
import navComponent from './components/nav.vue'

export default {
  name: 'app',
  components: {
    navComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
