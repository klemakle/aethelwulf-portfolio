<template>
  <div class="header">
    <NuxtLink to="/" class="icon-left icon ">
        <img src="~/assets/images/cool.png" alt="cool">
    </NuxtLink>
    <div class="menu">
      <div class="menu-item"> <NuxtLink :class="(resume==false && projects==false)?'active item-link-text':'item-link-text'" to="/" id="cases-header">HOME</NuxtLink></div>
      <div class="menu-item"> <NuxtLink class="item-link-text" to="/blog" id="about-header">BLOG</NuxtLink></div>
      <div class="menu-item"> <NuxtLink :class="(resume==false && projects==true)?'active item-link-text':'item-link-text'" to="/#project" id="projects-header">PROJECTS</NuxtLink></div>
      <div class="menu-item"> <NuxtLink :class="(resume==true && projects==false)?'active item-link-text':'item-link-text'" to="/resume" id="resume-header">RESUME</NuxtLink></div>
    </div>
    <div class="icon-right">
      <NuxtLink to="/#contact-me">
        <Contact/>
      </NuxtLink>
    </div>

    <!-- hamburger menu -->
    <div class="menu-btn">
      <!-- <Hamburger/> -->
      <button id="hamburger-btn" class="hamburger" name="hamburger" @click="showMobileMenu" :class="mobileMenuVisible ? 'open': '' ">
          <span class="hamburger-top line" :class="line_white?'line-white': 'line-black'"></span>
          <span class="hamburger-middle line" :class="line_white?'line-white': 'line-black'"></span>
          <span class="hamburger-bottom line" :class="line_white?'line-white': 'line-black'"></span>
      </button>
    </div>

    <!-- mobile-menu -->
    <div id="mobile-menu-id" class="mobile-visible" style="overflow: hidden" scroll="no" v-if="mobileMenuVisible">
      <Mobile scroll="no"/>
    </div>
  </div>
</template>

<script>
import Contact from './contact.vue'
import Mobile from './mobile.vue'
export default {
  components:{
    Contact,
    Mobile
  },
  props:['resume', 'projects', 'line_white'],
  data(){
    return{
      mobileMenuVisible: false
    }
  },
  mounted(){
    // this.openMenu;
    this.disableScroll();
  },
  computed:{
    openMenu (){
      const btn = document.querySelector('#hamburger-btn');
      const mobile = document.querySelector("#mobile-menu-id");

      btn.addEventListener('click', () => {
        btn.classList.toggle('open')
        mobile.classList.toggle('mobile-invisible');
        mobile.classList.toggle('mobile-visible');
      })
    },
  },
  watch: {
    '$route' () {
      this.mobileMenuVisible = false;
    },
    mobileMenuVisible(){
      this.disableScroll()
    }
  },
  methods:{
    showMobileMenu(){
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
    disableScroll(){
      const body = document.querySelector("body")
      if(this.mobileMenuVisible == true) {
        body.classList.add("disable-scroll")
      }else{
        body.classList.remove("disable-scroll")
      }
    }
  }, 
}

</script>

<style>
@import '~/assets/css/hamburger.css';
@font-face {
  font-family: Montserrat-Light;
  src: url("~/assets/fonts/Montserrat/Montserrat-Light.ttf");
}

@font-face {
  font-family: Ubuntu-Light;
  src: url("~/assets/fonts/Ubuntu/Ubuntu-Regular.ttf");
}

@font-face {
  font-family: Ubuntu-Medium;
  src: url("~/assets/fonts/Ubuntu/Ubuntu-Bold.ttf");
}

.disable-scroll{
  overflow-y: hidden;
}

.header{
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 20;
  background-color: #e1e7ee14;
  backdrop-filter: blur(10px);
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

/* hamburger-menu */
.menu-btn{display: none;}
.mobile-invisible{
  width: 100%;
  height: 0px ;
  opacity: 0;
  right:-90%;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index:-1;
  transition: all .25s ease-in;
}
.mobile-visible{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  opacity: 1;
  z-index: 1;
  overflow: hidden;
}

/* max width 950px */
@media (max-width: 930px) {
  .header .menu{display: none;}

  .icon-right{display: none;}

  .menu-btn{
    display: block;
    position: absolute;
    right: 20px;
  }

}
</style>