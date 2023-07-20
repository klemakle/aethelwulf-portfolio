<template>
  <div>
    <div class="menu-list-mobile" id="menu-list-mobile">
      <div class="menu-container">
        <NuxtLink to="/" class="menu-list-item">Home</NuxtLink>
        <NuxtLink to="/#about" class="menu-list-item">About</NuxtLink>
        <NuxtLink to="/#project" class="menu-list-item">Projects</NuxtLink>
        <a href="https://drive.google.com/file/d/1IVjiYZHTgFnho-ziNBpr0N73jdrvFWDP/view?usp=sharing" class="menu-list-item" target="_blank">Resume</a>
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