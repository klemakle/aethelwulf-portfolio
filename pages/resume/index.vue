<template>
  <div class="global-resume">
    <div class="header">
      <Header :resume="true" :projects="false" :line_white="true"/>
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
  transition: 'page',
  components:{
    header,
    Resume
  },
  head() {
    return {
      title: "Resume"
    };
  },
  mounted(){  }
}
</script>

<style scoped>

.global-resume{
  background-color: #334961;
  color: #fff;
  height: 100%;
}
.header{
  background-color: #334961;
}

.resume{
  margin: 0px  20px  0 20px;
  padding: 0.1rem;
  height: auto;
}

</style>