<template>
  <div id="app">
    <navComponent></navComponent>   
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import navComponent from './components/Nav'
import footerComponent from './components/Footer'

export default {
  name: 'app',
  components: {
    navComponent,
    footerComponent
  }
}
</script>

<style>
  #app {
    /*font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Segoe UI","Microsoft Yahei",Tahoma,Arial,STHeiti,sans-serif;*/
    font-family: 'roboto condensed','PingFang SC',"Microsoft YaHei","微软雅黑",STXihei,"华文细黑",sans-serif;
    margin: 0;
    line-height: 1.42857143;
    color: #333;
    min-width: 6rem;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-text-size-adjust:none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    user-select: none;
  }
  a, a:-webkit-any-link{
    text-decoration: none;
  }
</style>
