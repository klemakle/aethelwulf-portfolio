<template>
  <div class="me">
    <p class="about-me-title">
      About
    </p>
    <div class="about-me">
      <div class="my-photo">
        <div class="cloud-photo">
          <img src="~/assets/images/cool.png" alt="">
        </div>
      </div>
      <div class="my-presentation">
        <p>My name is <span class="gras-text">Kalidou Dia</span> (put the sound), I am 23 years old. I am from Senegal (West Africa). I'm passionate about everything related to computer engineering, I like to share tips. I love challenges and it's always a joy to solve a problem that seemed unsolvable.</p>
        <p>I started doing web development in 2017 with the basics (Html/Css). And this is my favorite area.</p>
        <p>Today I had the chance to benefit from a <span class="gras-text">computer engineering</span> training for 5 years. During these last years I was able to work with <span class="gras-text">companies</span> and <span class="gras-text">startups</span> on interesting projects. I learn a lot of things that I will always put to good use. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
    font-family: Ubuntu-Light;
    src: url("~/assets/fonts/Ubuntu/Ubuntu-Light.ttf");
}
@font-face {
    font-family: Montserrat-Light;
    src: url("~/assets/fonts/Montserrat/Montserrat-Light.ttf");
}
@font-face {
    font-family: Montserrat-Regular;
    src: url("~/assets/fonts/Montserrat/Montserrat-Regular.ttf");
}

@font-face {
    font-family: Montserrat-bold;
    src: url("~/assets/fonts/Montserrat/Montserrat-Bold.ttf");
}

.me{
  margin-top: 20px;
}

.about-me-title{
  font-family: Montserrat-Regular;
  font-weight: 900;
  margin-bottom: -30px;
  margin-left:50px ;
  width: fit-content;
  padding: auto 10px;
  font-size: 60pt;
  /* color: #BBD3D9; */
  color: #334961;
  position: relative;
}

.about-me-title::after{
  content: "";
  background: #BBD3D9;
  height: 12pt;
  width: 110%;
  position: absolute;
  bottom: 20px;
  left: 0;
}

.about-me{
  display: flex;
  justify-content: space-around;
  gap: 0px;
  padding: 50px 10px;
  width: 100%;
  height: auto;
  /* background-color:#f7f7f744; */
  background-color: #81b2cf1c;
}

.gras-text{
  font-weight: 900;
  color: #0e1720;
  font-size: 13pt;
  opacity: 1;
  font-family: Montserrat-Regular;
  text-decoration: underline;
  text-decoration-style: dashed;
  text-decoration-color: #33496192;
}

.my-photo{
  width: 30%;
  height: auto;
  background-image: url('~/assets/images/about/blob1.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top:40px ; */
}

.my-photo .cloud-photo{
  width: 300px;
  height: auto;
}

.my-photo .cloud-photo > img{
  width: 100%;
  height: 100%;
}

.my-presentation{
  font-family: Montserrat-Light;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
}

.my-presentation > p {
  color: #334961;
  opacity: .8;
  line-height: 18pt;
  font-size: 12pt;
  font-weight: 100;
}

/* max-width 400px */
@media (max-width: 500px) { 
  .about-me{
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }

  .my-photo{
    width: 30%;
  }

  .my-presentation{
    width: 85%;
  }
}

</style>