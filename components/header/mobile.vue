<template>
  <div>
    <div class="menu-list-mobile" id="menu-list-mobile">
      <div class="menu-container">
        <NuxtLink to="/" class="menu-list-item">Cases</NuxtLink>
        <NuxtLink to="/#about" class="menu-list-item">About</NuxtLink>
        <NuxtLink to="/" class="menu-list-item">Projects</NuxtLink>
        <NuxtLink to="/resume" class="menu-list-item">Resume</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import '~/assets/css/mobile.css';
</style>