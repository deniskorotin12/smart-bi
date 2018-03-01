<template>
    <section class='downloading-section'>
        <div class='downloading-logo'></div>
         <div class="content">
      <a href="itms-services://?action=download-manifest&url=https://smartbi.com.ua/manifest.plist" class="btn">
        <span class="left icon icon-tablet"><i class="material-icons">phone_iphone</i></span>
        <span class="right title">Завантажити</span>
      </a> 
      
    </div>
    </section>
   
</template>

<style>

.downloading-section a{
    text-decoration: none;
}
.downloading-section .downloading-logo {
  position: absolute;
  width: 100%;
  height: calc(100vh - 6vh);
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(5px);
  opacity: 0.3;
}
.downloading-section .btn {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 3vh;
  width: auto;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", "Trebuchet MS", Helvetica, sans-serif;
  padding: 0.8em 1.4em;
  padding-right: 4.7em;
  border: none;
  color: white;
  transition: 0.2s;
}
.btn span.icon{
    font-size: 23px;
    background-color: #003596;
    box-shadow: 0 3px 0 0 #849efb;
    text-shadow: 0px 1px 1px #888;
    display: block;
    position: relative;
    line-height: 50px;
    padding: 0 3vh;
    border-radius: 6px;
}
.btn span.left{
    float: left;
    border-radius: 6px 0 0 6px;
}
.btn span.title {
    box-shadow: 0 3px 0 0 #849efb;
    background-color: #0052cd;
    display: block;
    position: relative;
    line-height: 50px;
    padding: 0 30px;
}
.btn span.right {
    float: right;
    border-radius: 0px 6px 6px 0px;
}
.btn span{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
