<template>
  <div>
    <div class="header">
      <Header/>
    </div>
    <div >
      <nuxt-child/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/header.vue';
import Footer from '~/components/footer/index.vue';

export default {
  name:'headerLayout',
  components:{Header, Footer}

}
</script>

<style>
.header{
  background-color: rgba(255, 255, 255, 0.328);
}

</style>