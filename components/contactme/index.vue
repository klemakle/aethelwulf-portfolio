<template>
  <div class="global-contact">
    <div class="contact-me-section bg-testimonial">
      <div class="contact-me-title" data-aos="fade-right" data-aos-duration="1600">
        Contact
      </div>
      <div class="contact-me-page">
        <div class="contact-form" data-aos="fade-up" data-aos-duration="2400">
          <Formulaire/>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
        <div class="contact-me-photo" data-aos="fade-up" data-aos-duration="2000">
          <div class="call-me">
            <img src="~/assets/images/call-me.png" alt="call me">
          </div>
        </div>

        <div class=" mt-4 info-social-network flex justify-between items-center space-x-4">
          <div class="twitter"> 
            <a href="https://twitter.com/ka___lidou" target="blank">
              <svg width="32" height="32" viewBox="0 0 24 24"><path d="M17.71 9.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2z" fill="#BBD3D9"/></svg>
            </a>
          </div>
          <div class="github">
            <a href="https://github.com/klemakle" target="blank">
              <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#BBD3D9" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </a>
          </div>
          <div class="linkedin">
            <a href="https://www.linkedin.com/in/kalidou-dia-b0b63614a/" target="blank">
              <svg width="32" height="32" viewBox="0 0 20 20"><path fill="#BBD3D9" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"/></svg>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Formulaire from './formulaire.vue';
import Social from '../info/social.vue';

export default {
  components:{ Formulaire, Social},
  mounted() {
    AOS.init({});
  }
}
</script>

<style>

.contact-me-section{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  z-index: 10;
}

.contact-me-title::after{
  content: "";
  background: #BBD3D9;
  height: 15pt;
  width: 110%;
  position: absolute;
  bottom: 15px;
  left: 0;
  z-index: -1;
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
  width: 60%;
}

.contact-me-page .contact-me-photo{
  width: 40%;
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
    font-size: 50pt;
  }

  .contact-me-title::after{
    height: 11pt;
    width: 105%;
  }
  .contact-me-page{
    flex-direction: column-reverse;
  }

  .contact-me-page .contact-form{
    width: 100%;
  }
}


@media (max-width:350px) {

.contact-me-title{
  font-size: 40pt;
}

.contact-me-title::after{
  height: 8pt;
  width: 105%;
  bottom: 20px;
}
.contact-me-page{
  flex-direction: column-reverse;
}

.contact-me-page .contact-form{
  width: 100%;
}
}

</style>