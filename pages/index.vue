<template>
  <div>
    <div class="global-body">
      <div class="header">
        <Header :resume="false"/>
      </div>
      <div class="tete">
        <div>
          <Aethelwulf/>
        </div>
      </div>
        <!-- <no-ssr>
          <full-page :options="options" id="fullpage">
            <div class="section">
              <kweli/>
            </div>
            <div class="section">
              <kele-lek/>
            </div>
          <div class="section">
            <sen-diabete/>
          </div>
          </full-page>
        </no-ssr> -->
    </div>

    <!-- about section -->
    <div id="about">
      <Me/>
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
import ContactMe from '~/components/contactme/index.vue';
import Footer from '~/components/footer/index.vue'

export default Vue.extend({
  transition: {
   name: 'page',
    mode: 'out-in'
  },
  components: { kweli, SenDiabete, KeleLek, Aethelwulf, Header, Me, ContactMe, Footer },
  name: 'IndexPage'
})
</script>

<style>
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

.tete{
}

.tete1{
  background-image: url('~/assets/images/blob-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30% 40%;
}

</style>
