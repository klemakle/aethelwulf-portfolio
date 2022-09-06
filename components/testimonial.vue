<template>
    <div>
        <div class="testimonials-title" data-aos="fade-right" data-aos-duration="1600">
        Testimonials
      </div>
        <section class="text-gray-600 body-font bg-gray-100">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY">
          <p class="leading-relaxed">Mr. Dia is a serious student, very proactive and particularly assiduous and autonomous, who actively participates in the courses and class projects. During his studies as a student
engineering, he has developed qualities that have enabled him to acquire many skills in the field of
in the field of computer science.</p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ABDOU AZIZ CISS</h2>
          <p class="text-gray-500">Senior Lecturer at EPT</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-top rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="~/assets/images/testimonials/directeur.jpeg">
          <p class="leading-relaxed">We developed a great partnership with the web developer Kalidou Dia and his dedication to
our website is evident in all aspects of the site. We appreciate his attention to detail and creative
approach to bringing our new exhibit to life online. I and my teammates, we thank you so much
for the great job that you have done.
</p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ELHADJI ABDOU SARR</h2>
          <p class="text-gray-500">CEO of Capla</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="~/assets/images/testimonials/base.jpg">
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">SERIGNE AMOUYAKAR FALL</h2>
          <p class="text-gray-500">Software Engineer</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>

<style>
    .testimonials-title{
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
    .testimonials-title::after{
        content: "";
        background: #BBD3D9;
        height: 15pt;
        width: 110%;
        position: absolute;
        bottom: 15px;
        left: 0;
        opacity: 1;
        z-index: -1;
    }

    @media (max-width:700px) {

        .testimonials-title{
            font-size: 35pt;
        }

        .testimonials-title::after{
            height:10pt;
            width: 102%;
        }

    }
</style>