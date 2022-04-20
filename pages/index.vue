<template>
  <div class="global-body">
    <div class="header"></div>
    <div class="tete">
      <aethelwulf/>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Aethelwulf from '~/components/aethelwulf.vue'
import KeleLek from '~/components/projects/keleLek.vue'
import kweli from '~/components/projects/kweli.vue'
import SenDiabete from '~/components/projects/senDiabete.vue'

export default Vue.extend({
  components: { kweli, SenDiabete, KeleLek, Aethelwulf },
  name: 'IndexPage'
})
</script>

<style>
.global-body{
  /* margin: auto 50px; */
}

.header{
  height: 70px;
  background-color: green;
}

.tete{
  background-image: url('../assets/images/blob-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30% 40%;
}

</style>
