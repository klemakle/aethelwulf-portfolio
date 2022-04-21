<template>
  <div class="header">
    <div class="icon-left icon">
      <img src="../../assets/images/cool.png" alt="cool">
    </div>
    <div class="menu">
      <div class="menu-item"> <a class="active" href="#">CASES</a> </div>
      <div class="menu-item"> <a href="#">ABOUT</a> </div>
      <div class="menu-item"> <a href="#">RESUME</a> </div>
      <div class="menu-item"> <a href="#">CONTACT</a> </div>
    </div>
    <div class="icon-right">
      <Contact/>
    </div>
  </div>
</template>

<script>
import Contact from './contact.vue'
export default {
components:{Contact}
}
</script>

<style>
@font-face {
  font-family: Montserrat-Light;
  src: url("../../assets/fonts/Montserrat/Montserrat-Light.ttf");
}

@font-face {
  font-family: Ubuntu-Light;
  src: url("../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf");
}

@font-face {
  font-family: Ubuntu-Medium;
  src: url("../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf");
}

.header{
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
}

.header > .icon{
  padding: 10px;
  width: 70px;
  height: auto;
}

.icon-left{
  position: absolute;
  left: 20px;
}

.icon-right{
  position: absolute;
  right: 40px;
}

.header > .icon > img{
  width: 100%;
  height: 100%;
}

.header .menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}
.menu-item{
  position: relative;
}

.header > .menu .menu-item  a{
  cursor: pointer;
  font-size: 10pt;
  color: #6B7688;
  font-family: Ubuntu-Light;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 10px;
  position: relative;
}

.active {
  color: #8DBBD5 !important;
  font-family: Ubuntu-Medium !important;
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 45%;
  bottom:0%;
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 5px;
  border-radius: 5px;
  width: 5px;
  background: #8DBBD5;
  opacity: 1;
}

.menu-item a:not(.active)::after { 
  content: "";
  position: absolute;
  bottom: 0;
  left: 45%;
  bottom:30%;
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 5px;
  border-radius: 5px;
  width: 0px;
  background: #8DBBD5;
  opacity: 0;
  transition: width 0.3s ease 0s,
             bottom 0.3s cubic-bezier(0.25, 0, 0, 1) 0s,
             opacity  .3s ease-in-out;
}

.menu-item a:hover::after { 
  width: 5px; 
  bottom: 0%;
  opacity: 1;
}

</style>