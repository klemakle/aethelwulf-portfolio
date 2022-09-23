<template>
  <div>
    <div class="header">
      <Header/>
    </div>
    <div>
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/header.vue';

export default {
  name:'headerLayout',
  components:{Header}

}
</script>

<style>
.header{
  background-color: rgba(255, 255, 255, 0.328);
}

</style>