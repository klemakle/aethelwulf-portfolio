<template>
    <div>
        <div class="testimonials-title" data-aos="fade-right" data-aos-duration="1600">
        Testimonials
      </div>
        <section class="text-gray-600 body-font bg-testimonial">
  <div class="container px-5 py-24 mx-auto" data-aos="fade-up" data-aos-duration="1900">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-top rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="~/assets/images/testimonials/directeur.jpeg">
          <p class="leading-relaxed">"We developed a great partnership with the web developer Kalidou Dia and his dedication to
our website is evident in all aspects of the site. We appreciate his attention to detail and creative
approach to bringing our new exhibit to life online. I and my teammates, we thank you so much
for the great job that you have done."
</p>
          <span class="inline-block h-1 w-10 rounded bg-line-testimonial mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ELHADJI ABDOU SARR</h2>
          <p class="text-gray-500">CEO of Capla</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/png;base64,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">
          <p class="leading-relaxed">"I would like to express my satisfaction with the exceptional work of DIA Kalidou on our recent project. 
            His technical expertise, commitment and collaboration were invaluable. With Kalidou's advanced technical skills, we were able to overcome the complex challenges facing the company. He was an exemplary collaborator, responsive to requests and highly flexible in the face of last-minute changes.
I highly recommend Kalidou for any project requiring high-level technical expertise and a professional approach."</p>
          <span class="inline-block h-1 w-10 rounded bg-line-testimonial mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ABOU KOUTA</h2>
          <p class="text-gray-500">Engineer at TransCure</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="~/assets/images/testimonials/base.jpg">
          <p class="leading-relaxed">
            "Having had to work with Mr Kalidou DIA on quite a few projects, I can attest that he is a serious, hard-working and very disciplined person. Besides that, he knows how to work in a team, how to deal with team members to get the best in everyone. The company that will have Mr DIA in its ranks can consider itself very lucky."
          </p>
          <span class="inline-block h-1 w-10 rounded bg-line-testimonial mt-6 mb-4"></span>
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

  .bg-testimonial{
    background-color: #81b2cf1c;
  }

  .bg-line-testimonial{
    background-color: #334961;
  }
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
            font-size: 39pt;
            margin-left:30px ;
        }

        .testimonials-title::after{
            height:9pt;
            width: 103%;
        }

    }

@media (max-width:350px) {

  .testimonials-title{
      font-size: 30pt;
  }

  .testimonials-title::after{
      height:8pt;
      width: 103%;
}

}
</style>