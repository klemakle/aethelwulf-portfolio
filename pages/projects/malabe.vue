<template>
  <div class="global-project">
    <div class="header">
      <Header :resume="false" :projects="true"/>
    </div>
    <div class="project-info">
      <div class="image">
        <video-player src="https://www.youtube.com/watch?v=J0k0bjiOwtk" class="video-playing"/>
      </div>
      <div class="icon-views">
        <div class="icon">
          <a href="https://github.com/malabe-org/backend" target="_blank">View source</a>
        </div>
      </div>
      <div class="description">
        <div class="role"> 
          <span class="role-text">Role</span>  < Back-end developer />
        </div>
        <div class="bref-desc">
          <p> It is a project that aims to fight against corruption for the withdrawal of administrative documents such as passports, birth certificates...</p>
        <p>
          We presented it at the UNODC hackathon of 2021.
The solution presented a web platform and a mobile application.
The team consisted of 4 members: a React developer, an Android developer, a Node js developer (me) and a coordinator who was at the same time the team leader.
        </p>
        <p>
          We designed, coded, tested and presented the solution in less than 5 days. It was a rewarding experience that allowed us to exceed our limits in record time. 
          I had made over 46 commits in less than 48 hours.
        </p>
        <p>
          You will see above the demo of the web application and the source code of the backend.
        </p>

          <div class="tech-skills">
            <span class="tech-text">Tools</span>
            <span class="skill">Express js</span>
            <span class="skill">React js</span>
            <span class="skill">Android</span>
            <span class="skill">Material-Ui</span>
            <span class="skill">Mongo DB</span>
            <span class="skill">Heroku</span>
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
  },
  mounted(){
    // Weglot.initialize({
    //     api_key: 'wg_cfddc6afa61331636dfb137bc1b295292'
    // });
  }
}
</script>

<style scoped>
@import url('~/assets/css/project.css');
</style>