<template>
  <div>
    <div class="global-body">
      <div class="header">
        <Header :resume="false" :projects="false"/>
      </div>
      <div class="tete">
        <div>
          <Aethelwulf/>
        </div>
      </div>
    </div>

    <!-- about section -->
    <div id="about">
      <Me/>
    </div>
    
    <div id="project">
      <Projects/>
    </div>

    <div>
      <Testimonial/>
    </div>
    <!-- contact me section -->
    <div id="contact-me">
      <ContactMe/>
    </div>

    <div id="footer">
      <Footer/>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import Aethelwulf from '~/components/aethelwulf.vue'
import Header from '~/components/header/header.vue'
import KeleLek from '~/components/projects/keleLek.vue'
import kweli from '~/components/projects/kweli.vue'
import SenDiabete from '~/components/projects/senDiabete.vue'
import Me from '~/components/about/me.vue';
import Projects from '~/components/projects/index.vue';
import ContactMe from '~/components/contactme/index.vue';
import Footer from '~/components/footer/index.vue';
import Testimonial from '~/components/testimonial.vue';
import Project from "~/components/new/project.vue"

export default Vue.extend({
  transition: {
   name: 'page',
    mode: 'out-in'
  },
  components: { kweli, SenDiabete, KeleLek, Aethelwulf, Header, Me, Projects, Project,Testimonial, ContactMe, Footer },
  name: 'IndexPage',
})
</script>

<style>
body{
  overflow-x:hidden !important ;
}
.global-body{
   background-image: url('~/assets/images/blob-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30% 50%;
  height: 100vh;
  z-index: 0;
}

.header{
  background-color: rgba(255, 255, 255, 0.328);
}

@media (max-width: 500px) { 
  body{
    overflow-x: hidden;
  }
}


</style>
