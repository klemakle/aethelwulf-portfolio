<template>
  <div class="global-project">
    <div class="header">
      <Header :resume="false" :projects="true"/>
    </div>
    <div class="project-info">
      <div class="image">
        <!-- <video-player src="https://www.youtube.com/watch?v=zouE6P7pusY" class="video-playing"/> -->
        <iframe frameBorder='0' class="video-playing" height='360' webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://www.awesomescreenshot.com/embed?id=8788599&shareKey=47e78f9e9ea38a79f341ffcd9cf3e756"></iframe>
      </div>
      <div class="icon-views">
        <div class="icon">
          <a href="https://github.com/klemakle/Projet-Mongo-KELE-LEK-" target="_blank">View source</a>
        </div>
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
            <span class="tech-text">Tools</span>
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
@import url('~/assets/css/project.css');
</style>