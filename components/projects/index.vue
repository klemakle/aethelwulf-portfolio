<template>
  <div class="global-project">
    <div class="project-section">
      <div class="project-title" data-aos="fade-right" data-aos-duration="1600">
        Projects
      </div>

      <div class="projects-page" data-aos="fade-up" data-aos-duration="1900">
        <nuxt-link id="kele-lek-id" class="one-project" to="/projects/kele">
          <div class="project-numero">Web-app</div>
          <div class="project-image">
            <img class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200" src="~/assets/images/kele-lek.png" alt="kele-lek">
          </div>
          <div class="project-name mt-2">
            Kele lek
          </div>
          <div class="project-description py-2">
            Kele lek is a culinary web-app where you can share your most delicious recipes.
          </div>

          <div class="px-3 py-2 bg-gray-500 hover:bg-orange-600 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        <nuxt-link id="sen-diabete-id" class="one-project" to="/projects/senDiabete">
          <div class="project-numero">Health-tech</div>
          <div class="project-image">
            <img class="w-full object-cover object-center h-48 border rounded-md border-gray-200" src="~/assets/images/sen-diabete.png" alt="kele-lek">
          </div>
          <div class="project-name mt-2">
            Sen diabete
          </div>
          <div class="project-description py-2">
            Sen Diabete is a health-tech that helps patients with diabetes.
          </div>
          <div class="px-3 py-2 bg-gray-500 hover:bg-blue-800 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        <nuxt-link id="capla-id" class="one-project" to="/projects/capla">
          <div class="project-numero">Website</div>
          <div class="project-image">
            <img class="w-full object-cover object-center h-48 border rounded-md border-gray-200" src="~/assets/images/project/capla.png" alt="Capla">
          </div>
          <div class="project-name mt-2">
            Capla
          </div>
          <div class="project-description py-2">
            CAPLA is a structure that supports professionals and students in the written and oral expression of English.
          </div>
          <div class="px-3 py-2 bg-gray-500 hover:bg-indigo-600 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        <nuxt-link id="capla-id" class="one-project" to="/projects/transcure">
          <div class="project-numero">data-viz</div>
          <div class="project-image">
            <img class="w-full object-cover object-center h-48 border rounded-md border-gray-200" src="~/assets/images/project/transcure/transcure2.png" alt="Transcure">
          </div>
          <div class="project-name mt-2">
            Transcure
          </div>
          <div class="project-description py-2">
            The project consists of a web application for visualizing data from an Excel file. The data are recordings of mouse tumors.
          </div>
          <div class="px-3 py-2 bg-gray-500 hover:bg-purple-800 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        <nuxt-link id="snake-game-id" class="one-project" to="/projects/snake">
          <div class="project-numero">IA-RL</div>
          <div class="project-image mx-auto">
            <img class="mx-auto w-max h-48 border rounded-md border-gray-200" src="~/assets/images/project/snake-game.png" alt="kele-lek">
          </div>
          <div class="project-name mt-2">
            Snake game
          </div>
          <div class="project-description py-2">
            This is the famous snake game made in class for the deep-learning course. It was done with reinforcement learning
          </div>

          <div class="px-3 py-2 bg-gray-500 hover:bg-blue-500 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        <nuxt-link id="malabe-id" class="one-project" to="/projects/malabe">
          <div class="project-numero">Hackathon</div>
          <div class="project-image">
            <img class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200" src="~/assets/images/project/malabe.jpg" alt="kele-lek">
          </div>
          <div class="project-name mt-2">
            Malabe
          </div>
          <div class="project-description pt-0 pb-1 md:py-2">
            It is a project that aims to fight against corruption for administrative documents such as passports.
            We presented it at the UNODC hackathon of 2021.
          </div>

          <div class="px-3 pt-1 pb-2 md:py-2 bg-gray-500  hover:bg-teal-500 text-white rounded-3xl text-xs mx-auto">View more</div>
        </nuxt-link>

        

        <!-- <div id="kwely-id" class="one-project">
          <div class="project-numero">03</div>
          <div class="project-name">
            Malabe
          </div>
          <div class="project-description">
          It is a project that aims to fight against corruption for the withdrawal of administrative documents such as passports, birth certificates.
          We presented it at the UNODC hackathon (United Nations Office on Drugs and Crime) of 2021.
            <p><nuxt-link to="/projects/malabe" class="view-more">View more</nuxt-link></p>
          </div>
           <div class="project-image">
            <img src="~/assets/images/malabe.jpg" alt="kwely">
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({});
  }
}
</script>

<style>
.global-project{
  background-color: #F1F7FA;
}

  a:hover{
    text-decoration: none !important;
    color:#334961;
  }
@font-face {
    font-family: Montserrat-Thin;
    src: url("~/assets/fonts/Montserrat/Montserrat-Thin.ttf");
}
.project-section{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #F1F7FA;
  color: #334961;
  margin-bottom: 0;
  /* background: #fff; */
}


.project-title{
  font-family: Montserrat-Regular;
  font-weight: 900;
  margin-bottom: -30px;
  margin-left:50px ;
  width: fit-content;
  padding: auto 10px;
  font-size: 60pt;
  color: #334961;
  position: relative;
  z-index: 10;
}

.project-title::after{
  content: "";
  background: #BBD3D9;
  height: 15pt;
  width: 110%;
  position: absolute;
  bottom: 15px;
  left: 0;
  opacity: 1;
  z-index: -1;
}

.projects-page{
  padding: 60px 40px 70px 40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1 1 30%;
  align-items: flex-start;
  background: #fff;
}

.one-project{
  font-family: Montserrat-Light;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 70px 5px;
  gap: 10px;
  opacity:1;
  align-items: flex-start;
  background-color: #ffffffab;
  border-radius: 4px;
  padding: 20px 10px;
  transition: all .25s ;
  width: 400px;
  height: 450px;
  position: relative;
  -webkit-box-shadow: 0px 0px 10px 3px #e8e8e88a; 
  box-shadow: 0px 0px 10px 3px #e8e8e88a;
}

#kele-lek-id{border-top: solid 3px #e87e51;}

#sen-diabete-id{border-top: solid 3px #5163e8;}

#capla-id{border-top: solid 3px #5a67d8;}

#snake-game-id{border-top: solid 3px #1E90FF;}

#malabe-id{border-top: solid 3px #4AD7B4;}

.view-more{
  text-decoration: underline ;
  cursor: pointer;
}
.view-more:hover{
  font-family: Montserrat-Regular;
}

.one-project:hover{
  font-family: Montserrat-Regular;
  background-color: #ffffffd0;
  box-shadow: 0px 0px 10px 3px #d3d3d36b;
  -webkit-box-shadow: 0px 0px 10px 3px #d3d3d36b; 
}

.one-project > .project-numero{
  background-color: #334961;
  padding: 15px 10px 15px 20px;
  font-family: Montserrat-Bold;
  font-size: 12pt;
  border-radius:4px;
  text-align: right;
  color: #fff;
  position: absolute;
  top:-30px;
  right: -10px;
  z-index: 12;
}

.one-project > .project-image{
  filter: grayscale(.1);
  opacity: .7;
  transition: all .25s ;
}
.one-project:hover .project-image{
  filter: grayscale(0);
  transform: scale(1.01);
  opacity: 1;
}

/* .project-image > img{
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
} */

/* .one-project:hover .project-image  img{
  transform: scale(1.03);
} */

.one-project .project-name{
  font-family: Ubuntu-Medium;
  margin: 0 20px;
  position: relative;
}


.project-name::after{
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  right: 100%;
  position: absolute;
  background: #334961;
  transition: width 0.3s ease 0s, right 0.3s ease 0s;
  width: 0;
}

.one-project:hover .project-name::after{
  width: 100%;
  right: 0;
}

.project-description{
  font-family: Montserrat-Light;
  font-size: 11pt;
  margin: 0 auto;
  text-align: left;
  padding: 10px 20px;
  opacity: 1;
  line-height: 1.5rem;
  height: 100%;
  transition: all .25s ;
}

.one-project:hover  > .project-description{
  font-family: Montserrat-Light;
  opacity: 1;
  padding: 10px 20px;
}


@media (max-width:700px) {

  .project-title{
    font-size: 45pt;
  }

  .project-title::after{
    height:11pt;
    width: 105%;
  }

}

@media (max-width:350px) {

.project-title{
  font-size: 40pt;
}

.project-title::after{
  height:10pt;
  width: 105%;
}

}
</style>