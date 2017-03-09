<template>
  <div class="me-container">
  	<div class="container-fluid me">
      <div class="row">
        <div class = "me-title-group">
           <div class="s-title">
           	Comming soon...
           </div>
           <div class="s-subtitle">
            正在开发中...
           </div>
           <a href="">XXXXX</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'me',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.me{
  	background-repeat: repeat;
    background-size: auto;
    background-color: transparent;
    background-position: 50% 50%;
    background-image: url("/static/image/discover-background.jpg");
    padding-top: 235px;
    padding-bottom: 165px;
      
  }
  .me-title-group{
    padding: 4rem 0;
    text-align: center;
    color: white;
  }
  .me-title-group .s-title
  {
    font-size: 0.9rem;
      margin-bottom: 0.8rem;
  }

  .me-title-group .s-subtitle
  {
    font-size: 0.4rem;
      margin-bottom: 1.4rem;
  }
  .me-title-group a
  {
      border: 0.04rem solid white;
      border-radius: 0.08rem;
      color: white;
      padding: 0.4rem 0.7rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.44rem;
  }
</style>
