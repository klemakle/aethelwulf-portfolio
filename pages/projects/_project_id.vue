<template>
  <div class="global-project">
    <div class="header">
      <Header :resume="false" :projects="true"/>
    </div>
    <div class="project-info">
      <div class="image">
        <!-- <video-player src="https://www.youtube.com/watch?v=J0k0bjiOwtk" class="video-playing"/> -->
        <video-player src="https://www.youtube.com/watch?v=zouE6P7pusY" class="video-playing"/>
      </div>
      <div class="icon-views">
        <div class="icon">
         View source
        </div>
        <!-- <div class="icon">
          <img src="~/assets/images/project/github2.png" alt="github">
        </div> -->
      </div>
      <div class="description">
        <div class="role"> 
          <span class="role-text">Role</span>  < Fullstack developer />
        </div>
        <div class="bref-desc">
          <p> Kele lek is a culinary blog where you can share your most delicious recipes.</p>
        <p>
          You can also see other people's recipes and posts and leave a little "like" or comment.
          You can consult the dishes according to their category (dessert, lunch, meat, vegan, coffee, pastry...) or their author.
        </p>
        <p>
          This is a project that I developed alone with a template on which I based myself. It was part of our "NoSQL Database" course and I finished it in less than 2 weeks.
          It was developed with a monolithic architecture.
        </p>

          <div class="tech-skills">
            <span class="tech-text">Stack</span>
            <span class="skill">HTML & CSS</span>
            <span class="skill">Ejs template</span>
            <span class="skill">Express js</span>
            <span class="skill">Mongo DB</span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/header.vue';
import VideoPlayer from 'nuxt-video-player';
require('nuxt-video-player/src/assets/css/main.css')
export default {
  components:{
    Header,
    VideoPlayer
  }
}
</script>

<style scoped>
body{
  background-color: #334961;
}
.global-project{
  background-color: #334961;
  color: #fff;
  height: 100%;
}

.header{
  background-color: #334961;
}

.project-info{
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.project-info .image{
  width: 70%;
  height: auto;
}

.project-info .image > .video-playing{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.project-info .icon-views{
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-right: 15% ;
  margin-top: 15px;
}

.project-info .icon-views .icon{
  height: auto;
  text-decoration: underline dotted;
  font-style: italic;
  color: #69c8d3;
  opacity: .8;
}

.project-info .icon-views .icon:hover{
  cursor: pointer;
  text-decoration: underline;
  opacity: 1;
}

.project-info .icon-views .icon > img{
  width: 100%;
  height: 100%;
  opacity: .5;
  cursor: pointer;
  transition: all .25s;
}

.project-info .icon-views .icon > img:hover{
  opacity: .9;
}

.project-info .description{
  color: #fff;
  margin: 20px 10% 0 10%;
  display: flex;
  flex-direction: column;
}

.project-info .description .role{
  font-size: 11pt;
  font-style: italic;
  color: #8CC2E1;
  font-family: Montserrat-Regular;
}

.project-info .description .role .role-text{
  color: #fff;
  font-style: italic;
  font-weight: 700;
  font-family: Montserrat-Regular;
  background-color: #1685b8;
  padding: 5px 10px;
  border-radius: 20px;
}

.project-info .description .bref-desc{
  margin: 20px auto ;
  font-size: 12pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;

}

.project-info .description .bref-desc  p{
  line-height: 1.75rem;
  text-align: justify;
  font-family: Montserrat-Thin;
  font-weight: 900;
}

.bref-desc .tech-skills .tech-text{
  text-decoration: underline #1685b8;
  font-size: 20pt;
  font-family: Montserrat-Regular;
}

.bref-desc .tech-skills .skill{
  background-color:#69c8d3;
  color: #fff;
  font-family: Montserrat-Light;
  padding: 7px 15px;
  border-radius: 20px;
  font-size: 11pt;
}


@media (max-width:700px) {
    .project-info .image{
      width: 100%;
    }
}

</style>