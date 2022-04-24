<template>
  <div class="global-resume">
    <div class="header">
      <Header/>
    </div>
    <div class="resume">
        <Resume/>
    </div>
  </div>
</template>

<script>
import header from '~/components/header/header.vue'
import Resume from '~/components/resume/index.vue'
export default {
// layout:'headerLayout'
  components:{
    header,
    Resume
  }
}
</script>

<style>

.global-resume{
  background-color: #334961;
  color: #fff;
  height: 100%;
}
.header{
  background-color: #334961;
}

.resume{
  margin: 20px  20px  0 20px;
  padding: 0.1rem;
  height: auto;
}

</style>