<template>
  <div class = "footer-container">
  	<div class="container-fluid footer">
      <div class="row">
          <div class = "footer-info">
            <a href="">联系我们</a>
            <span> | © 2016 花笙科技 | </span>
            <a href="">微信公众号</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>
  /*footer style*/
  .footer{
    background: #2f2f2f !important; 
    height: 1.2rem;
  }
  .footer-info{
    width: 70%;
    margin: 0 auto; 
    text-align: center;
    line-height: 1.2rem;
  }
  .footer-info a{
    font-size: 0.3rem;
      color: white;
      cursor: pointer;
      text-decoration: underline !important;
  }
  .footer-info span{
    font-size: 0.3rem;
      color: white;
  }

</style>