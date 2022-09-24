<template>
  <div class="kals">
    <div class="parent">
      <div class="div1">
        <Social/>
      </div>
      <div class="div2" id="wrapper" >
        <div class="photo-kals bounce" id="parallax" ></div> 
        <div class="info-presentation" id="layer-1"><Location/></div>
        <div class="info-presentation" id="layer-2">
          <Profession :title="'Software Engineer'" :desc="'Fullstack web developer'"/>
        </div>
        <div class="info-presentation" id="layer-3">
          <Profession :title="'Freelancer'" :desc="'Available for work'" :end="true"/>
        </div>
        <div class="info-presentation" id="layer-4"><Trophy/></div>
        <div class="info-presentation" id="layer-5"><Name/></div>
      </div>

      <div class="location-mobile div3">
        <Location/>
      </div>
    </div>
  </div>
</template>

<script>
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
    Trophy,
    Social,
  },
  mounted(){
    this.parallax();
  },
  methods:{
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
  left: 5px;
  bottom:-25px;
}

.div2 {
  height:100%;
  justify-self: center;
  position: relative;
  width: 55%;
}

.div3{
  display: none;
  position: absolute;
  bottom: -25px;
  right: 5px;
}

.photo-kals {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url('~/assets/images/icones/medite.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position:auto;
  filter: drop-shadow(5px 8px 10px #565656);
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


#layer-1{
  position: absolute;
  top: 20%;
  left: 17%;
}

#layer-2{
  position: absolute;
  top: 50%;
  right: 7%;
}

#layer-3{
  position:absolute;
  top: 50%;
  left:8% ;
  z-index:0;
}

#layer-4{
  position:absolute;
  top: 12%;
  right: 16%;
}

#layer-5{
  position: absolute;
  top: 5%;
  left: 36%;
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

/* min-width 1500px */
@media (min-width: 1500px) { 
  .div2{ width: 40% !important;}
}

/* min-width 2000px */
@media (min-width: 1899px){
  .div2{width: 30% !important;}
}

/* max-width 400px */
@media (max-width: 410px) { 
  .info-presentation{animation-name: bounceinfo2;}

  .div3{
    display: flex;
  }

  #layer-1{
   display: none;
  }
  #layer-2{
    top: 60%;
    left:25% ;
  }
  #layer-3{
    display: none;
  }
  #layer-4{
    display: none;
  }
   #layer-5{
    top: 7%;
    left:25% ;
  }
}


@media (min-width: 411px) and  (max-width: 420px) {
  #layer-1{
    top: 30%;
    left: 0%;
  }
  #layer-2{
    top: 50%;
    right: -1%;
  }
  #layer-3{
    top: 51%;
    left:0% ;
  }
  #layer-4{
    top: 22%;
    right: 1%;
  }
  #layer-5{
  top: 5%;
  left: 27%;
}
} 


</style>