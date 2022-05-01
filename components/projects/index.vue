<template>
  <div class="global-project">
    <div class="project-section">
      <div class="project-title">
        Projects
      </div>

      <div class="projects-page">
        <div id="kele-lek-id" class="one-project">
          <div class="project-name">
            Kele lek
          </div>
          <div class="project-description">
            Kele lek is a culinary blog where you can share your most delicious recipes. It is a class project counting for the 'NoSQL database' course that I developed alone in 2019.
            <p class="view-more">View more</p>
          </div>
           <div class="project-image">
            <img src="../../assets/images/kele-lek.png" alt="kele-lek">
          </div>
        </div>
        <div id="sen-diabete-id" class="one-project">
          <div class="project-name">
            Sen diabete
          </div>
          <div class="project-description">
            Sen Diabete is a health-tech that helps patients with diabetes.
I participated in the development of this project as a front-end developer during my first immersion in a company ( TeamX-GROUP).
            <p class="view-more">View more</p>
          </div>
          <div class="project-image">
            <img src="../../assets/images/sen-diabete.png" alt="sen diabete">
          </div>
        </div>
        <div id="kwely-id" class="one-project">
          <div class="project-name">
            Kwely
          </div>
          <div class="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum perferendis earum quidem culpa ipsum nulla, atque dolorem, minus quasi natus quam aliquid voluptas doloribus eaque quibusdam tenetur voluptatibus, eos adipisci?
            <p class="view-more">View more</p>
          </div>
           <div class="project-image">
            <img src="../../assets/images/kweli.png" alt="kwely">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  /* background: #e6f1f7; */
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
}

.project-title::after{
  content: "";
  background: #BBD3D9;
  height: 12pt;
  width: 110%;
  position: absolute;
  bottom: 20px;
  left: 0;
}

.projects-page{
  /* margin-top:20px;  */
  padding: 60px 40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1 1 30%;
  align-items: flex-start;
  background: #e6f1f7;
}

.one-project{
  font-family: Montserrat-Light;
  border-top: #334961 solid 2px ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 2px;
  gap: 10px;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  transition: all .25s ease;
  width: 400px;
  height: 330px;
  position: relative;
}

#kele-lek-id{border-top: solid 3px #e87e51;}

#kele-lek-id .view-more{color: #e87e51;}


#sen-diabete-id{border-top: solid 3px #5163e8;}
#sen-diabete-id .view-more{color: #5163e8;}

#kwely-id{border-top: solid 3px #477d80;}
#kwely-id .view-more{color: #477d80;}

.view-more{
  text-decoration: underline dotted;
  cursor: pointer;
}

.one-project:hover{
  font-family: Montserrat-Regular;
}

.one-project > .project-image{
  position: absolute;
  bottom: 5px;
  right: 2px;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 10px;
  filter: grayscale(.8);
  overflow: hidden;
  transition: all .25s ease;
}
.one-project:hover .project-image{
  filter: grayscale(0);
}

.project-image > img{
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.one-project:hover .project-image  img{
  transform: scale(1.03);
}

.one-project .project-name{
  margin: 0 20px;
  position: relative;
}


.project-name::after{
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: .2px;
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
  font-family: Montserrat-Thin;
  font-size: 11pt;
  margin: 0 auto;
  text-align: justify;
  padding: 10px 20px;
  opacity: .7;
  line-height: 1.75rem;
  height: 100%;
  transition: all .25s ;
}

.one-project:hover  > .project-description{
  font-family: Montserrat-Light;
  opacity: .9;
  padding: 10px 20px;
}


@media (max-width:700px) {

  .project-title{
    font-size: 45pt;
      margin-bottom: -20px;
  }

  .project-title::after{
    height: 10px;
  }
}
</style>