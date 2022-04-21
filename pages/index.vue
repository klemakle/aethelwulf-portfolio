<template>
  <div>
    <div class="global-body">
      <div class="header">
        <Header/>
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
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Aethelwulf from '~/components/aethelwulf.vue'
import Header from '~/components/header/header.vue'
import KeleLek from '~/components/projects/keleLek.vue'
import kweli from '~/components/projects/kweli.vue'
import SenDiabete from '~/components/projects/senDiabete.vue'


export default Vue.extend({
  components: { kweli, SenDiabete, KeleLek, Aethelwulf, Header },
  name: 'IndexPage'
})
</script>

<style>
.global-body{
   background-image: url('../assets/images/blob-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30% 50%;
  height: 100vh;
  position: relative;
  z-index: 0;
}

.header{
  background-color: rgba(255, 255, 255, 0.328);
  position: fixed;
  border: solid 1px red;
}

.tete{
  padding-top: 100px ;
}

.tete1{
  background-image: url('../assets/images/blob-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30% 40%;
}

@media (max-width: 750px) { 

}

</style>
