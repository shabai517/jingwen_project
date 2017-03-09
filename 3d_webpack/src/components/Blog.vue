<template>
  <div class="blog-container">
  	<div class="container-fluid blog">
      <div class="row">
        <div class = "blog-title-group">
           <div class="s-title">
           	Blog
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
    name: 'blog',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blog{
  	width: 100%;
  	height: 1000px;
    background-repeat: no-repeat;
      background-size: cover;
      background-color: transparent;
      background-position: 50% 50%;
      background-image: url("http://o0m4okv24.qnssl.com/static/backgrounds/things/105.jpg");
  }
  .blog-title-group{
    padding: 4rem 0;
    text-align: center;
    color: white;
  }
  .blog-title-group .s-title
  {
    font-size: 0.9rem;
      margin-bottom: 0.8rem;
  }

  .blog-title-group .s-subtitle
  {
    font-size: 0.4rem;
      margin-bottom: 1.4rem;
  }
  .blog-title-group a
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
