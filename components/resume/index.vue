<template>
  <div>
    <div class="resume-page">

      <div class="formation">
        <Formation/>
      </div>
      <div class="experience-pro">
        <ExperiencePro/>
      </div>
      <div class="experience-social">
        <ExperienceSocial/>
      </div>

    </div>
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
.resume-page{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.formation{
}

</style>