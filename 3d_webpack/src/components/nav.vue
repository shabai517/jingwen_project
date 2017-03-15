<template>
  <div class = "nav-container">
  	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a><img src="/static/image/logo.png" alt="HTML tutorial" style="width:0.8rem;height:0.8rem;border:0;"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <span class="nav-left">
              <span class="nav-tiem active"><a href="/">首页</a></span>
              <span class="nav-tiem"><a href="feature">平台功能</a></span>
              <span class="nav-tiem"><a href="service">企业服务</a></span>
            </span>
           <span class="nav-center">
              <span class="nav-tiem">
                <img src="/static/image/logo.png" alt="HTML tutorial" style="width:0.9rem;height:0.9rem;border:0;">
               </span>
            </span>
           <span class="nav-right">
              <span class="nav-tiem"><a href="discover">发现</a></span>
              <span class="nav-tiem"><a href="blog">Blog</a></span>
              <span class="nav-tiem me"><a href="me">我的</a></span>
            </span>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style scoped>
  nav{
    background: #2f2f2f !important; 
  }
  nav a{
    color:  #fff !important ;
  }
  .navbar{
    min-width: 6rem;
    border: none !important;
  }
  #navbar{
    min-height: 1rem;
    text-align: center; 
    line-height: 1rem;
    padding:  0.1rem 0;
  }
  #navbar .nav-left{
    display: inline-block;  
    width:  40%;
    text-align: right;
  }
  #navbar .nav-center{
    display: none;  
  }
  #navbar a:hover {
    opacity: 0.5;
  }
  #navbar .nav-right{
    display: inline-block;  
    width:  40%;
    text-align: left;
  }
  #navbar .nav-tiem{
    display: block;
    padding: 0% 17%;
    font-size: 0.33rem;
  }
  #navbar .me a{
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
  }
      
  .navbar-header button{
    border: none !important;
    background-color: rgb(240, 94, 45);
    margin-right: 0.2rem;
    padding: 0.2rem 0.14rem;
  }
  .navbar-header button span{
      background-color: #fff !important;
  }
  .navbar-header button:hover{
    background-color: rgb(240, 94, 45) !important;
    opacity: 0.5;
  }
  .navbar-header button:focus{
    background-color: rgb(240, 94, 45) !important;
  }
  .navbar-header a{
    padding: 0.1rem 0.2rem;
      display: inline-block;
  }
  @media (min-width: 768px) { 
    #navbar{
      padding: 1rem 0 0 0 ;
    }
    #navbar .nav-right{
      display: inline;
    }
    #navbar .nav-left{
      display: inline;
    }
    #navbar .nav-center{
      display: inline-block;
      min-width: 1.84rem;
      max-width: 100%;  
      padding: 0 1.25%;
      margin: 0 1.25%;
      top:0.1rem;
      position: absolute; 
      width:50%;
      left:25%;
    }
    #navbar .nav-tiem{
      display: inline-block;
      padding: 0 0.4rem;
      
    }
    .navbar-header a{
      display: none;
    }
  }
  @media (min-width: 992px) { 
    #navbar{
      padding: 0;
    }
    #navbar .nav-right{
      display: inline-block;
      width:  40%;
      text-align: left;
    }
    #navbar .nav-left{
      display: inline-block;
      width:  40%;
      text-align: right;
    }
    #navbar .nav-center{
      top:initial;
      position: relative; 
      max-width: 14%; 
      padding: 0;
      margin: 0;
      width:initial;
      left:initial;
    }
    #navbar .nav-tiem{
      padding: 0.1rem 0.5rem;
    }
  }
  @media (min-width: 1200px){
    #navbar .nav-center{
      padding: 0 1.25%;
      margin: 0 1.25%;
    }
    #navbar .nav-tiem{  
      padding: 0.1rem 0.7rem;
    }
  }
</style>