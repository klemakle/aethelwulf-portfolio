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
        <div class="my-presentation" data-aos="fade-up" data-aos-duration="1800">
          <p>
            My name is <span class="gras-text">Kalidou Dia</span>, I am <span class="gras-text">24 years old</span>. I am from Senegal (West Africa).
            I'm passionate about everything related to software engineering.
          </p>
          <p>
            My name is <span class="gras-text">Kalidou Dia</span>, I'm 25 years old. I'm originally from Senegal (West Africa) and I'm currently living in Lyon (France) 
            where I'm doing a specialization in cybersecurity at the <a class="gras-text underline-text" href="https://www.univ-lyon2.fr/" target="_blank">Université Lumière</a>. 
            I'm passionate about everything to do with computers and technology.
          </p>
          <p class="mt-2">
            I started doing web development in 2017. I worked in software development with the <span class="gras-text">Javascript and Spring boot ecosystem</span>.
          </p>
          <p>Most projects I developed were made with <span class="gras-text">Nuxt.js</span>, <span class="gras-text">Vue.js</span>, <span class="gras-text">Express</span>, <span class="gras-text">Nest js</span> or <span class="gras-text">Spring boot</span> </p>
          <p class="mt-2">
            I have a degree in <span class="gras-text">software engineering and telecommunications</span> from <a class="gras-text underline-text" href="https://ept.sn/" target="_blank">EPT</a>  and worked 
            as a software engineer at <a class="gras-text underline-text" href="https://intouchgroup.net/" target="_blank">Intouch group</a> (a company offering digital payment solutions). 
            I learn a lot and I'm always learning new things, especially in the fields of <span class="gras-text">cybersecurity</span> and <span class="gras-text">creative development.</span>
          </p>
          <p>
            Besides programming, I'm playing football or basketball, writing poems, listening music or watching movies.
          </p>
          <a href="https://drive.google.com/file/d/1IVjiYZHTgFnho-ziNBpr0N73jdrvFWDP/view?usp=sharing" target="_blank" class="my-resume mt-4 pointer">
            <span class="text">Resume PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#9AB8C1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"/></svg>          
          </a>
        </div>
      </div>

      <div class="skills">
        <Skills/>
      </div>

      <div class="tech" data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1600">
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
  background-color:#f7f7f744;
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
  margin: 10px auto 0px 0px;
  padding: 20px;
}

.bg-about{
  padding: 50px 10px;
  background-color: #F1F7FA;
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
  gap:2px;
  cursor: pointer;
}
.my-resume .text{
  opacity:.8;
  color: #80a6b0;
  font-weight: bold;
  font-size: 12pt;
  transition: all .15s ease-in-out;
}
/* .fleche{
  margin-right:15px ;
  position: relative;
  font-size: 15pt;
  margin-bottom: 10px;
  writing-mode: vertical-lr;
  font-weight: 900;
  color:#80a6b0;
  transition: all .25s ease-in-out;
  transform: rotate(-60deg);
}
.fleche::before{
  content: "";
  position: absolute;
  border-top: solid 3px #80a6b0;
  border-right: solid 3px #80a6b0;
  height: 15px;
  width: 15px;
  left: 40%;
  top: -70%;
  transform: rotate(45deg);
  transition: all .15s ease-in-out;
} */

.my-resume:hover .text{
  opacity:1;
  text-decoration: underline;
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
  color: #334961;
  opacity: .8;
  line-height: 18pt;
  font-size: 12pt;
  font-weight: 100;
}

.my-presentation > a {
  text-decoration: none;
}

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

@media (max-width: 350px) { 
  .about-me-title{
    font-size: 40pt;
  }

  .about-me-title::after{
    height:11pt;
  }
}

</style>