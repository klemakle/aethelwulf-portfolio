<template>
  <div>
    <div>
      <button id="hamburger-btn" class="hamburger">
          <span class="line hamburger-top"></span>
          <span class="line hamburger-middle"></span>
          <span class="line hamburger-bottom"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.openMenu();
  },
  methods:{
    openMenu (){
      const btn = document.querySelector('#hamburger-btn');

      btn.addEventListener('click', () => {
        btn.classList.toggle('open')
      })
    }  
  }
}
</script>


<style>
  @import '../../assets/css/hamburger.css';
</style>