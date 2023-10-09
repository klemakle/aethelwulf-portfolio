<template>
  <div class="global-resume mt-20">
    <div class="resume-page">
      <div class="formation">
        <Formation/>
      </div>
      <div class="experience-pro">
        <ExperiencePro/>
      </div>
      <a href="https://drive.google.com/file/d/1bDpukklmVZrJLFnXbMkn9VxJewS-k67B/view?usp=sharing" target="_blank" class="my-resume mt-4 pointer self-start">
        <span class="text" style="color:#9AB8C1">Resume PDF</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#9AB8C1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"/></svg>          
      </a>
      <!-- <div class="experience-social">
        <ExperienceSocial/>
      </div> -->
    </div>
    <!-- <div class="download">
      <a href="/cv.pdf">Download my CV</a>
    </div> -->
</div>
</template>

<script>
import Formation from './formation.vue';
import ExperiencePro from './experiencePro.vue';
import ExperienceSocial from './experienceSocial.vue';
export default {
  components:{
    Formation,
    ExperiencePro,
    ExperienceSocial
  }
}
</script>

<style>
.global-resume{
  position: relative;
}
.resume-page{
  margin-top:30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.formation{
}

.download{
  /* border: solid 1px red; */
  position: absolute;
  top: 0px;
  right: 10px;
}

</style>