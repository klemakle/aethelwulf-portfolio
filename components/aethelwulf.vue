<template>
  <div class="kals">
    <div class="parent">
      <div class="div1">
        <Social/>
      </div>
      <div class="div2" id="wrapper">
        <div class="photo-kals relat bounce" id="parallax" ></div> 
        <div class="info-presentation" id="layer-1"><Name/></div>
        <div class="info-presentation" id="layer-2"><Location/></div>
        <div class="info-presentation" id="layer-3"><Profession/></div>
        <div class="info-presentation" id="layer-4"><Trophy/></div>
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
import Social from './info/social.vue'

export default {
  components:{
    Name,
    Location,
    Profession,
    Country,
    Trophy,
    Social,
  },
  mounted(){
    this.parallax();
    // this.parallac();
  },
  methods:{
    // parallac() {
    // // Add event listener
    //   const elem = document.querySelector("#parallax");
    //   elem.addEventListener("mousemove", parallax);
    // // Magic happens here
    //   function parallax(e) {
    //       let _w = window.innerWidth/2;
    //       let _h = window.innerHeight/2;
    //       let _mouseX = e.clientX;
    //       let _mouseY = e.clientY;
    //       let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    //       let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    //       let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    //       let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    //       elem.style.backgroundPosition = x;
    //   }
    // },

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
  height: 90vh;
  padding: 0.1rem;
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 20px ;
  position: relative;
}

.div1{
  position: absolute;
  left: 20px;
  bottom:20px;
}

.div2 {
  height:100%;
  justify-self: center;
  position: relative;
  width: 55%;
}

.photo-kals {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url('~/assets/images/meditation.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position:auto;
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
  top: 15%;
  left: 9%;
}

#layer-2{
  position: absolute;
  top: 48%;
  right: 12%;
}

#layer-3{
  position:absolute;
  top: 50%;
  left:7% ;
  z-index:0;
}

#layer-4{
  position:absolute;
  top: 15%;
  right: 16%;
}

.info-presentation{
  animation-name: bounceinfo;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-fill-mode: both;
}
.info-presentation:hover{
  animation-name: bounceinfo2;
}

@keyframes bounceinfo {
  0%   { transform: translateY(0px);}
  25%  { transform: translateY(-5px); }
  50%  { transform: translateY(0px); }
  75%  { transform: translateY(5px); }
  100% { transform: translateY(0px); }
}
@keyframes bounceinfo2 {
  0%   { transform: translateY(0px);}
  100% { transform: translateY(0px); }
}


/* max-width 750px */
@media (max-width: 750px) {
  .div2{width: 100%;}
}

@media (min-width:751px) and (max-width:920px) {
  .div2{width: 85%;}
}


/* max-width 350px */
@media (max-width: 400px) { 
  .info-presentation{animation-name: bounceinfo2;}

  #layer-1{
    top: 17%;
    left:25% ;
  }
  #layer-2{
    display: none;
  }
  #layer-3{
    top: 60%;
    left:25% ;
  }
  #layer-4{
    display: none;
  }
}


/* min-width 1500px */
@media (min-width: 1500px) { 
  .div2{ width: 40% !important;}
}

/* min-width 2000px */
@media (min-width: 1899px){
  .div2{width: 30% !important;}
}

</style>