<template>
  <div class="service-container">
  	<div class="container-fluid business-service">
      <div class="row">
        <div class = "business-service-title-group">
           <div class="s-title">
           	探索新的维度
           </div>
           <div class="s-subtitle">
            致力于提供企业WebGL解决方案
           </div>
           <a href="">了解服务</a>
        </div>
      </div>
    </div>

    <div class="container-fluid webgl">
      <div class="row middle-screen">
        <div class="col-md-4">
          <div class="webgl-service webgl-service-image-left">
              <img src="/static/image/webgl.png" style="width:2.5rem;height:2.5rem;">
          </div>
        </div>
        <div class="col-md-8">
          <div class = "webgl-service-container">
            <div class="webgl-service webgl-service-text">
                <div class="webgl-service-title">
                  3D&VR 电商定制
                </div>
                <div class="webgl-service-content">
                  VR 时代购物体验
                </div>
                <div class = "details">
                	<p>直接自助内嵌3D模型展示到您的商品描述页面，无需复杂的App开发，一行简单代码即可开启360° 3D&VR 体验。</p>
                	<p>除此之外，我们提供商业级<strong>3D扫描&拍摄服务</strong>，帮助您轻松完成商品/模特虚拟化过程，更可定制您的专有VR店铺，提供全新的购物体验。</p>
                	<p><a>联系我们</a>了解详情</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid vr-scenario">
      <div class="row middle-screen">
        <div class="col-md-8">
          <div class = "vr-scenario-service-container">
            <div class="vr-scenario-service vr-scenario-service-text">
                <div class="vr-scenario-service-title">
                  3D&VR场景制作
                </div>
                <div class="vr-scenario-service-content">
                  助力网站VR体验
                </div>
                <div class = "details">
                	<p>我们探索专业的全景拍摄及虚拟场景搭建服务，帮助企业探索更多元展现形式。基于Web的浏览和交互体验，让您的网站以最低成本过渡到VR体验。</p>
                	<p>适用场景：环境全景 (室内/室外全景)，3D建筑模型 (虚拟展厅/样板间/...)，虚拟环境制作 (游戏场景)</p>
                	<p><a>联系我们</a>了解详情</p>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="vr-scenario-service vr-scenario-service-image-right">
              <img src="/static/image/vr-scenario.png" style="width:2.5rem;height:2.5rem;">
          </div>
        </div>
      </div>
      <div class="row small-screen">
        <div class="col-md-4">
          <div class="vr-scenario-service vr-scenario-service-image-right">
              <img src="/static/image/browse.png" style="width:2.5rem;height:2.5rem;">
          </div>
        </div>
        <div class="col-md-8">
          <div class = "vr-scenario-service-container">
            <div class="vr-scenario-service vr-scenario-service-text">
                <div class="vr-scenario-service-title">
                  Web 3D/全景/VR
                </div>
                <div class="vr-scenario-service-content">
                  基于Web的 3D/全景/VR 浏览，无需专业软件和代码即可添加注释、组建场景，全面支持WebVR规范，轻松体验VR。我们致力于提供完善的 Web 3D 体验。更多炫酷功能陆续上线。
                </div>
                <div class = "details">* 需要WebGL支持，主流桌面/移动浏览器已覆盖<!--<a>平台参数</a>--></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid webgl-customized">
      <div class="row middle-screen">
        <div class="col-md-4">
          <div class="webgl-customized-service webgl-customized-service-image-left">
              <img src="/static/image/webgl-customized.png" style="width:2.5rem;height:2.5rem;">
          </div>
        </div>
        <div class="col-md-8">
          <div class = "webgl-customized-service-container">
            <div class="webgl-customized-service webgl-customized-service-text">
                <div class="webgl-customized-service-title">
                  WebGL 定制开发
                </div>
                <div class="webgl-customized-service-content">
                  我们着眼未来
                </div>
                <div class = "details">我们深知WebGL的未来潜力，一直努力探索Web的技术边界。我们希望和您一起开发基于最新WebGL标准的实时3D/VR应用，大数据3D/VR展示，VR游戏 ...  
                <p><a>联系我们</a>探索下一代Web应用</p></div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <div class="container-fluid next-web">
      <div class="row">
        <div class = "next-web-title-group">
           <div class="s-title">
            探索Web次时代应用
           </div>
           <div class="s-subtitle">
            我们乐于接受挑战
           </div>
           <!--<a href="">立刻加入</a>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'service',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .business-service{
    background-repeat: no-repeat;
      background-size: cover;
      background-color: transparent;
      background-position: 50% 50%;
      background-image: url("http://o0m4okv24.qnssl.com/static/backgrounds/business-2/121.jpg");
  }
  .business-service-title-group{
    padding: 4rem 0;
    text-align: center;
    color: white;
  }
  .business-service-title-group .s-title
  {
    font-size: 0.9rem;
      margin-bottom: 0.8rem;
  }

  .business-service-title-group .s-subtitle
  {
    font-size: 0.4rem;
      margin-bottom: 1.4rem;
  }
  .business-service-title-group a
  {
      border: 0.04rem solid white;
      border-radius: 0.08rem;
      color: white;
      padding: 0.4rem 0.7rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.44rem;
  }
  /*webgl style*/
  .webgl{
    background-color: #f2f2f2;
  }
  .webgl .webgl-service{
    text-align: center;
    
  }
  .webgl .webgl-service-text
  {
    background-color: white;
    padding: 0.5rem 0.3rem;
    border-radius: 3px;
    max-width: 15rem;
  }
  .webgl .details a{
    font-size: 0.3rem;
      color: #555;
      cursor: pointer;
      text-decoration: underline !important;
  }

  .webgl-title-group{
    padding: 1rem 0;
    text-align: center;
  }
  .webgl-title-group .s-title{
    color: white;
    font-size: 0.8rem;
  }

  .webgl-title-group .s-subtitle{
     margin-top: 0.4rem;
     font-size: 0.4rem;
     color: white;
  }
  .webgl .webgl-service-container{
    padding:0.5rem 2rem;
  }
  .webgl-service-title{
    font-size: 0.5rem;
    margin-bottom: 0.2rem;

  }
  .webgl-service-content{
    font-weight: bold;
      font-size: 0.35rem;
    color: #f35c2c;
    margin-bottom: 0.2rem;
  }
  .webgl .small-screen
  {
    display: block;
    padding-bottom: 1rem;
  }
  .webgl .middle-screen{
    padding: 1rem 0;
  }

  /*vr-scenario style*/
  .vr-scenario{
    background-color: #d0d0d0;
  }
  .vr-scenario .vr-scenario-service{
    text-align: center;
    
  }
  .vr-scenario .vr-scenario-service-text
  {
    background-color: white;
    padding: 0.5rem 0.3rem;
    border-radius: 3px;
    max-width: 15rem;
  }
  .vr-scenario .details a{
    font-size: 0.3rem;
      color: #555;
      cursor: pointer;
      text-decoration: underline !important;
  }

  .vr-scenario-title-group{
    padding: 1rem 0;
    text-align: center;
  }
  .vr-scenario-title-group .s-title{
    color: white;
    font-size: 0.8rem;
  }

  .vr-scenario-title-group .s-subtitle{
     margin-top: 0.4rem;
     font-size: 0.4rem;
     color: white;
  }
  .vr-scenario .vr-scenario-service-container{
    padding:0.5rem 2rem;
  }
  .vr-scenario-service-title{
    font-size: 0.5rem;
    margin-bottom: 0.2rem;

  }
  .vr-scenario-service-content{
    font-weight: bold;
      font-size: 0.35rem;
    color: #f35c2c;
    margin-bottom: 0.2rem;
  }
  .vr-scenario .small-screen
  {
    display: block;
    padding: 1rem 0;
  }
  .vr-scenario .middle-screen{
    display: none;
    padding: 1rem 0;
  }

  /*webgl-customized style*/
  .webgl-customized{
        background: #35393e;
  }
  .webgl-customized .webgl-customized-service{
    text-align: center;
    
  }
  .webgl-customized .webgl-customized-service-text
  {
    background-color: white;
    padding: 0.5rem 0.3rem;
    border-radius: 3px;
    max-width: 15rem;
  }
  .webgl-customized .details a{
    font-size: 0.3rem;
      color: #555;
      cursor: pointer;
      text-decoration: underline !important;
  }

  .webgl-customized-title-group{
    padding: 1rem 0;
    text-align: center;
  }
  .webgl-customized-title-group .s-title{
    color: white;
    font-size: 0.8rem;
  }

  .webgl-customized-title-group .s-subtitle{
     margin-top: 0.4rem;
     font-size: 0.4rem;
     color: white;
  }
  .webgl-customized .webgl-customized-service-container{
    padding:0.5rem 2rem;
  }
  .webgl-customized-service-title{
    font-size: 0.5rem;
    margin-bottom: 0.2rem;

  }
  .webgl-customized-service-content{
    font-weight: bold;
      font-size: 0.35rem;
    color: #f35c2c;
    margin-bottom: 0.2rem;
  }

  .webgl-customized .middle-screen{
    padding: 1rem 0;
  }

   /*next-web style*/
  .next-web{
    background-repeat: no-repeat;
      background-size: cover;
      background-color: transparent;
      background-position: 50% 50%;
      background-image: url("/static/image/join-background.jpg");
  }
  .next-web-title-group{
    padding: 1.5rem 0;
    text-align: center;
    color: white;
  }
  .next-web-title-group .s-title
  {
    font-size: 0.9rem;
      margin-bottom: 0.8rem;
  }

  .next-web-title-group .s-subtitle
  {
    font-size: 0.4rem;
      margin-bottom: 1.4rem;
  }
  .next-web-title-group a
  {
      border: 0.04rem solid white;
      border-radius: 0.08rem;
      color: white;
      padding: 0.4rem 0.7rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.44rem;
  }

  @media (min-width: 992px) { 
    /*webgl style*/
    .webgl-service-image-left{
      padding-top: 1rem;
        padding-left: 3rem;
    }
    .webgl .middle-screen{
      width: 80%;
    }

    .webgl .middle-screen{
      display: block;
      padding-bottom: 1rem;
      width: 80%;
      margin:0 auto; 
    }
    /*vr-scenario style*/
    .vr-scenario-service-image-right{
      padding-top: 0.7rem;
        padding-right: 3rem;
    }
    .vr-scenario .middle-screen{
      width: 80%;
      display: block;
    }
    .vr-scenario .small-screen
    {
      display: none;
    }
    .vr-scenario .middle-screen{
      display: block;
      padding-bottom: 1rem;
      width: 80%;
      margin:0 auto; 
    }

    /*webgl-customized style*/
    .webgl-customized-service-image-left{
      padding-top: 1rem;
        padding-left: 3rem;
    }
    .webgl-customized .middle-screen{
      width: 80%;
    }

    .webgl-customized .small-screen
    {
      display: none;
    }
    .webgl-customized .middle-screen{
      display: block;
      padding-bottom: 1rem;
      width: 80%;
      margin:0 auto; 
    }
  }
</style>
