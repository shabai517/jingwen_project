<template>
  	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<a><img src="./image/logo.png" alt="HTML tutorial" style="width:0.8rem;height:0.8rem;border:0;"></a>-->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <span class="nav-left">
              <span class="nav-tiem active"><a href="./index.html">首页</a></span>
              <span class="nav-tiem"><a href="./functions.html">平台功能</a></span>
              <span class="nav-tiem"><a href="#contact">企业服务</a></span>
            </span>
           <span class="nav-center">
              <span class="nav-tiem">
                <!--<img src="./image/logo.png" alt="HTML tutorial" style="width:1.28rem;height:1.28rem;border:0;">-->
               </span>
            </span>
           <span class="nav-right">
              <span class="nav-tiem"><a href="#contact">发现</a></span>
              <span class="nav-tiem"><a href="#contact">Blog</a></span>
              <span class="nav-tiem me"><a href="#contact">我的</a></span>
            </span>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>


<script>
export default {
  name: 'nav-component'
}
</script>

