<template>
  <div class="kals">
    
    <div class="parent">
      <div class="div1">
        <!-- <Location/>
        <Profession/>
        <Country/>
        <Trophy/> -->
       </div>
      <div class="div2">
        <div class="photo-kals" id="parallax">
          <div class="relat">
            <Name/>
          </div>
        </div> 
      </div>
      <div class="div3"> 
        <div class="paragraph-text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Country from './info/country.vue';
import Location from './info/location.vue';
import Name from './info/name.vue'
import Profession from './info/profession.vue';
import Trophy from './info/trophy.vue';

export default {
  components:{
    Name,
    Location,
    Profession,
    Country,
    Trophy,
  },
  mounted(){
    this.parallac();

  },
  methods:{
    parallac() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          elem.style.backgroundPosition = x;
      }
    }
  }
  
}
</script>

<style>

.kals{
  background-color:#fff;
  height: 100vh;
  padding: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 80%;
  border:solid 1px red;
}

.div1 { grid-area: 1 / 1 / 3 / 2; }
.div2 {
  grid-area: 1 / 2 / 4 / 3;
  position: relative;
}
.div3 { grid-area: 1 / 3 / 3 / 4; }

.text{
  width: 50%;
  color: #060609;
}

.photo-kals {
  /* position: relative; */
  width: 600px;
  height: 100%;
  background-image: url('~/assets/images/meditation.png');
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: 50% 50%;
}

.paragraph-text{
  display: flex;
  flex-direction: column;
  gap: -10px;
  justify-content: center;
  align-items: flex-start;
}

.relat{
  position: relative;
}

</style>