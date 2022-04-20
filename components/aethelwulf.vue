<template>
  <div class="kals">
    
    <div class="parent">
      <div class="div2" id="wrapper">
        <div class="photo-kals relat bounce" id="parallax" ></div> 
        <div  id="layer-1"><Name/></div>
        <div  id="layer-2"><Location/></div>
        <div  id="layer-3"><Profession/></div>
        <div  id="layer-4"><Trophy/></div>
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
    this.parallax();
    // this.parallac();
  },
  methods:{
    parallac() {
    // Add event listener
      const elem = document.querySelector("#parallax");
      elem.addEventListener("mousemove", parallax);
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
    },

    parallax() {
      let wrapper = document.querySelector('#wrapper')
		  let	layerOne = document.querySelector('#layer-1'),
			layerTwo = document.querySelector('#layer-2'),
			layerThree = document.querySelector('#layer-3'),
			layerFour = document.querySelector('#layer-4');

      document.addEventListener('mousemove',para)
      function para(e){
        let pageX = e.clientX - window.innerWidth/2,
            pageY = e.clientY - window.innerHeight/2;
        layerOne.style.transform = 'translateX(-' + (50 + pageX/20) + '%) translateY(-' + (50 + pageY/40) + '%)';
        layerTwo.style.transform = 'translateX(' + (50 + pageX/55) + '%) translateY(' + (50 + pageY/55) +  '%)';
        layerThree.style.transform = 'translateX(-' + (50 + pageX/20) + '%) translateY(' + (50 + pageY/50) +  '%)';
        layerFour.style.transform = 'translateX(-' + (50 + pageX/50) + '%) translateY(-' + (50 + pageY/50) + '%)';
	    };
    }
  }
  
}
</script>

<style>

.kals{
  background-color:#f7f7f744;
  height: 100vh;
  padding: 0.1rem;
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  height: 90%;
  margin: 20px ;
}

.div2 {
  height:100%;
  position: relative;
}

.photo-kals {
  width: 600px;
  max-width: 100%;
  height: 100%;
  text-align: center;
  background-image: url('~/assets/images/meditation.png');
  background-repeat: no-repeat;
  /* background-blend-mode: multiply; */
  background-position: 50% 50%;
}

.bounce{
  animation-name: bounceSmooth;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-fill-mode: both;
}

@keyframes bounceSmooth{
  0%   { background-position: 50% 50%;}
  25%  { background-position: 50% 47%; }
  50%  { background-position: 50% 50%; }
  75%  { background-position: 50% 53%; }
  100% { background-position: 50% 50%; }
}


.rela{
  position: absolute;
}

#layer-1{
  position: absolute;
  top: 100px;
  left: 100px;
  float: left;
}

#layer-2{
  position: absolute;
  top:300px;
  right: 20px;
}

#layer-3{
  position:absolute;
  top: 250px;
  left: 20px;
}

#layer-4{
  position:absolute;
  top: 120px;
  right: 40px;
}

</style>