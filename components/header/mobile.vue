<template>
  <div>
    <div class="menu-list-mobile" id="menu-list-mobile">
      <div class="menu-container">
        <NuxtLink to="/" class="menu-list-item">Home</NuxtLink>
        <NuxtLink to="/blog" class="menu-list-item">Blog</NuxtLink>
        <NuxtLink to="/#project" class="menu-list-item">Projects</NuxtLink>
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