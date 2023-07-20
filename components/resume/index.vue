<template>
  <div class="global-resume mt-20">
    <div class="resume-page">

      <div class="formation">
        <Formation/>
      </div>
      <div class="experience-pro">
        <ExperiencePro/>
      </div>
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