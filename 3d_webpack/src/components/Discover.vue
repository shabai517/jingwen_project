<template>
  <div class="discover-container">
  	<div class="container-fluid discover">
      <div class="row">
        <div class = "discover-title-group">
           <div class="s-title">
           	发现
           </div>
           <div class="s-subtitle">
            XXXXX
           </div>
           <a href="">XXXXX</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'discover',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .discover{
  	background-repeat: repeat;
    background-size: auto;
    background-color: transparent;
    background-position: 50% 50%;
    background-image: url("/static/image/discover-background.jpg");
    padding-top: 235px;
    padding-bottom: 165px;
      
  }
  .discover-title-group{
    padding: 4rem 0;
    text-align: center;
    color: white;
  }
  .discover-title-group .s-title
  {
    font-size: 0.9rem;
      margin-bottom: 0.8rem;
  }

  .discover-title-group .s-subtitle
  {
    font-size: 0.4rem;
      margin-bottom: 1.4rem;
  }
  .discover-title-group a
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
