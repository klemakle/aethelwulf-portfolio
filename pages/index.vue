<template>
  <div>
    <kweli/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import kweli from '~/components/projects/kweli.vue'
import SenDiabete from '~/components/projects/senDiabete.vue'

export default Vue.extend({
  components: { kweli, SenDiabete },
  name: 'IndexPage'
})
</script>
