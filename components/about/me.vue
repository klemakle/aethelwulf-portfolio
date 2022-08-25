<template>
  <div class="me">
    <p class="about-me-title" data-aos="fade-right" data-aos-duration="1600">
      About
    </p>
    <div class="bg-about">
      <div class="about-me">
        <div class="my-photo" data-aos="fade-up" data-aos-duration="1800">
          <div class="cloud-photo">
            <img src="~/assets/images/cool.png" alt="">
          </div>
        </div>
        <div class="my-presentation" data-aos="fade-left" data-aos-duration="1800">
          <p>
            My name is <span class="gras-text">Kalidou Dia</span>, I am <span class="gras-text">23 years old</span>. I am from Senegal (West Africa).
            I'm passionate about everything related to computer engineering, I love challenges and it's always a joy to solve problems.
          </p>
          <p>
            I started doing web development in 2017. 
            Currently I am evolving in web application development with the <span class="gras-text">Javascript ecosystem</span>.
          </p>
          <p>Most projects I developed are based on <span class="gras-text">Node Js</span> with <span class="gras-text">Vue.js</span>, <span class="gras-text">Express</span> or Nest js </p>
          <p>
            Today I am still finishing my training in <span class="gras-text">computer engineering</span> at the <a class="gras-text underline-text" href="https://ept.sn/" target="_blank">Polytechnic School of Thies</a>.
            During these last years I was able to work with <span class="gras-text">companies</span> and <span class="gras-text">startups</span> on interesting projects. 
            I'm learning a lot and I'm always learning new things that I'll put to good use. 
          </p>
          <p>
            Besides programming, I'm playing football or basketball, writing poems, listening music or watching movies.
          </p>
          <NuxtLink to="/resume" class="my-resume"> <span class="fleche">|</span><span class="text">Resume</span></NuxtLink>
        </div>
      </div>

      <div class="skills">
        <Skills/>
      </div>

      <div class="tech" data-aos="zoom-in-up" data-aos-easing="ease-in-cubic" data-aos-duration="1600">
        <Tech/>
      </div>
    </div>

   
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './skills.vue'
import Tech from './tech.vue'
export default {
  components:{
    Skills,
    Tech
  },
  mounted() {
    AOS.init({});
  }
}
</script>

<style>
@font-face {
    font-family: Ubuntu-Light;
    src: url("~/assets/fonts/Ubuntu/Ubuntu-Light.ttf");
}
@font-face {
    font-family: Montserrat-Light;
    src: url("~/assets/fonts/Montserrat/Montserrat-Light.ttf");
}
@font-face {
    font-family: Montserrat-Regular;
    src: url("~/assets/fonts/Montserrat/Montserrat-Regular.ttf");
}

@font-face {
    font-family: Montserrat-bold;
    src: url("~/assets/fonts/Montserrat/Montserrat-Bold.ttf");
}

.me{
  margin-top: 20px;
}

.about-me-title{
  font-family: Montserrat-Regular;
  font-weight: 900;
  margin-bottom: -30px;
  margin-left:40px ;
  width: fit-content;
  padding: auto 10px;
  font-size: 60pt;
  color: #334961;
  position: relative;
  z-index:12;
}

.about-me-title::after{
  content: "";
  background: #BBD3D9;
  height: 15pt;
  width: 110%;
  position: absolute;
  bottom: 15px;
  left: 0;
  z-index: -1;
}

.skills{
  margin-top: 80px ;
  margin-left: 0px;
  padding: 20px;
}

.tech{
  margin: 10px auto 10px 0px;
  padding: 20px;
}

.bg-about{
  padding: 50px 10px;
  background-color: #81b2cf1c;
}

.about-me{
  display: flex;
  justify-content: space-around;
  gap: 0px;
  width: 100%;
  height: auto;
}

.gras-text,
.gras-text:hover{
  font-weight: 900;
  color: #0e1720;
  font-size: 12pt;
  opacity: 1;
  font-family: Montserrat-Regular;
}
.underline-text{
  opacity:1;
  text-decoration: underline;
  text-decoration-style: dashed;
  text-decoration-color: #33496183;
  transition: all .25s ease-in-out;
}
.underline-text:hover{
  text-decoration-style: dashed;
  text-decoration-color: #101922;
}
.my-resume{
  width: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.my-resume .text{
  opacity:.8;
  color: #80a6b0;
  font-weight: bold;
  font-size: 12pt;
  transition: all .15s ease-in-out;
}
.fleche{
  margin-right:10px ;
  position: relative;
  font-size: 20pt;
  writing-mode: vertical-lr;
  font-weight: 900;
  color:#80a6b0;
  transition: all .25s ease-in-out;
}
.fleche::before{
  content: "";
  position: absolute;
  border-top: solid 1.5px #80a6b0;
  border-right: solid 1.5px #80a6b0;
  height: 10px;
  width: 10px;
  left: 75%;
  top: -12%;
  transform: rotate(45deg);
  transition: all .15s ease-in-out;
}

.my-resume:hover .fleche{
  transform: translateX(10px);
}
.my-resume:hover .fleche::before{
  left: 59%;
  border-top:2px solid #80a6b0;
  border-right:2px solid #80a6b0;
}
.my-resume:hover .text{
  opacity:1;
  font-family: Montserrat-bold;
  font-weight: 900;
}

.my-photo{
  width: 30%;
  height: auto;
  background-image: url('~/assets/images/about/blob1.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top:40px ; */
}

.my-photo .cloud-photo{
  width: 300px;
  height: auto;
}

.my-photo .cloud-photo > img{
  width: 100%;
  height: 100%;
}

.my-presentation{
  font-family: Montserrat-Light;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
}

.my-presentation > p {
  text-align: justify;
  color: #334961;
  opacity: .8;
  line-height: 18pt;
  font-size: 12pt;
  font-weight: 100;
}

.my-presentation > a {
  text-decoration: none;
}

/* max-width 400px */
@media (max-width: 500px) { 
  .about-me{
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
  .about-me-title{
    font-size: 45pt;
  }
  .my-photo{
    background-size: contain;
    width: 30%;
  }
  .my-presentation{
    width: 85%;
  }
}

@media (min-width: 500px) and (max-width: 950px) {
  .my-photo{
    background-size: contain;
  }
}

</style>