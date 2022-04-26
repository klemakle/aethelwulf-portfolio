<template>
  <div class="global-contact">
    <div class="contact-me-title">
     Contact me
    </div>
    <div class="contact-me-page">
      <div class="contact-form">
       <Formulaire/>
      </div>
      <div class="contact-me-photo">
        <div class="call-me">
          <img src="~/assets/images/call-me.png" alt="call me">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Formulaire from './formulaire.vue'
export default {
  components:{ Formulaire}
}
</script>

<style>

.global-contact{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #F1F7FA;
}

.contact-me-title{
  font-family: Montserrat-Regular;
  font-weight: 900;
  margin-bottom: -30px;
  margin-left:50px ;
  width: fit-content;
  padding: auto 10px;
  font-size: 60pt;
  color: #334961;
  position: relative;
}

.contact-me-title::after{
  content: "";
  background: #BBD3D9;
  height: 12pt;
  width: 110%;
  position: absolute;
  bottom: 20px;
  left: 0;
}


.contact-me-page{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #334961;
  color: #fff;
  padding: 40px;
}

.contact-me-page .contact-form{
  width: 65%;
}

.contact-me-page .contact-me-photo{
  width: 27%;
  color: #334961;
  height: auto;
  background-image: url('~/assets/images/about/blob1.png');
  background-repeat: no-repeat;
  background-position: 40% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-me-photo .call-me{
  width: 300px;
  height: auto;
}
.contact-me-photo .call-me > img{
  width: 100%;
  height: 100%;
}


/* max-width: 700px */
@media (max-width:700px) {

  .contact-me-title{
    font-size: 45pt;
      margin-bottom: -20px;
  }

  .contact-me-title::after{
    height: 10px;
  }
  .contact-me-page{
    flex-direction: column-reverse;
  }

  .contact-me-page .contact-form{
    width: 100%;
  }
}


</style>