<template>
  <div>
    <div class="global-body">
      <div class="header-nav">
        <Header :resume="false" :projects="false"/>
      </div>
      <div class="tete pt-24">
        <div>
          <Aethelwulf/>
        </div>
      </div>
    </div>

    <!-- about section -->
    <div id="about">
      <Me class="pt-40"/>
    </div>
    
    <div id="project">
      <Projects class="pt-10 md:pt-44"/>
    </div>

    <div>
      <Testimonial class="pt-10 md:pt-44"/>
    </div>
    <!-- contact me section -->
    <div id="contact-me">
      <ContactMe class="pt-10 md:pt-44"/>
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

.header-nav{
  background-color: #e1e7ee14;
}

@media (max-width: 500px) { 
  body{
    overflow-x: hidden;
  }
}


</style>
