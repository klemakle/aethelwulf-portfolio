<template>
  <div class="global-project">
    <div class="header">
      <Header :resume="false" :projects="true" :line_white="true"/>
    </div>
    <div class="project-info">
      <div class="md:mx-12 mt-20 ">
        <img  class="rounded-md video-playing h-48 md:h-auto object-cover"  src="~/assets/images/project/capla.png"/>
      </div>
      <div class="icon-views">
        <div class="icon flex flex-col md:flex-row md:space-x-2 justify-between items-center">
          <svg width="24" height="24" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32zm-78.4 416.1c2.2 0 4.4-.1 6.7-.2 0 2.8 0 5.5.1 7.9 0 2.4 0 4.6.1 6.5-15.6-5.8-30.3-13.5-44.1-23 9.8 5.3 22.1 8.8 37.2 8.8zm11.4-72.9c-.8 2.2-1.5 4.5-2.1 6.9-3.4 1-7.5 1.8-11.7 1.8-10.9 0-19-5.4-25.6-16.9-2.4-4.6-6.8-10.7-12.9-16.3 16.8 14.1 36.3 20.9 52.3 24.5zm190 58.9c-15.8 11.9-33 21.3-51 28.2v-6.5-50.4c0-12.4-2.1-22.5-5-30.5 37.2-8.3 92-33.7 92-125.4 0-24.6-7.1-46.5-21.2-65.1 3.1-12.9 5.5-35.6-5.1-63l-2.7-7.1-7.2-2.4c-1.5-.5-4.8-1.3-10-1.3-11.5 0-30.9 4.1-59.5 22.8-17-4.2-34.8-6.4-53.1-6.4H255.9c-18.3 0-36.2 2.2-53.1 6.4-28.6-18.7-48-22.8-59.5-22.8-5.2 0-8.5.9-10 1.4l-7.2 2.4-2.7 7.1c-10.6 27.5-8.2 50.2-5.1 63-14.1 18.7-21.2 40.6-21.2 65.1 0 49.6 16 79.9 36.6 98.5-8.1-6.6-18.6-12.1-31.2-13h-1.3c-13.1 0-22.3 5.4-25.2 14.7-4.7 14.8 9.8 25 14.6 28.4l.5.6 1.5.6c1.6 1 10.1 7 16.9 24.5 2 6.2 6.3 14.5 13.6 22.2-13.1-11.2-24.8-24-34.9-38.1C61.9 351.2 48 307.5 48 261.7c0-28.9 5.5-56.9 16.4-83.3 10.5-25.5 25.5-48.3 44.7-67.9 19.1-19.6 41.4-35 66.1-45.7C200.8 53.7 228 48 256 48s55.2 5.6 80.8 16.7c24.8 10.7 47 26.1 66.1 45.7 19.1 19.6 34.2 42.5 44.7 67.9 10.9 26.4 16.4 54.4 16.4 83.3 0 45.8-13.8 89.5-40.1 126.3-12.6 17.7-27.7 33.2-44.9 46.2z" fill="#69c8d3"/></svg>
          <a href="https://github.com/klemakle/capla" target="_blank" class="text-sm md:text-base">Source</a>
        </div>
        <div class="icon flex flex-col md:flex-row md:space-x-2 justify-between items-center">
          <svg width="24" height="24" viewBox="0 0 512 512"><path d="M256 48h-.2H255.5C140.8 48.3 48 141.3 48 256s92.8 207.7 207.5 208h.5c114.9 0 208-93.1 208-208S370.9 48 256 48zm8.3 124.5c22.1-.6 43.5-3.5 64.2-8.5 6.2 24.5 10.1 52.8 10.7 83.8h-74.9v-75.3zm0-16.7V66c22.4 6.2 45.2 36.1 59.6 82-19.2 4.6-39.1 7.2-59.6 7.8zm-16.6-90v90.1c-20.7-.6-40.8-3.3-60.1-8 14.6-46.2 37.5-76.3 60.1-82.1zm0 106.7v75.2h-75.4c.6-31 4.5-59.3 10.7-83.8 20.8 5 42.5 8 64.7 8.6zm-92.2 75.2H64.9c1.8-42.8 17.8-82 43.3-113 18.5 10.2 38.2 18.6 58.8 24.8-6.8 26.5-10.8 56.4-11.5 88.2zm0 16.6c.6 31.7 4.6 61.7 11.4 88.2-20.6 6.3-40.2 14.6-58.8 24.8-25.5-31-41.4-70.2-43.3-113h90.7zm16.8 0h75.4v75.1c-22.2.6-43.9 3.6-64.7 8.7-6.2-24.5-10.1-52.8-10.7-83.8zm75.4 91.8v90.2c-22.6-5.9-45.5-35.9-60.1-82.1 19.3-4.8 39.4-7.5 60.1-8.1zm16.6 89.9v-90c20.5.6 40.4 3.3 59.7 7.9-14.5 46-37.2 75.9-59.7 82.1zm0-106.6v-75.1h74.9c-.6 30.9-4.5 59.2-10.7 83.7-20.7-5-42.1-8-64.2-8.6zm91.6-75.1h91.2c-1.8 42.8-17.8 81.9-43.3 113-18.7-10.3-38.5-18.7-59.3-25 6.8-26.5 10.8-56.3 11.4-88zm0-16.6c-.6-31.7-4.6-61.6-11.3-88.1 20.8-6.3 40.6-14.7 59.2-24.9 25.5 31 41.5 70.2 43.3 113.1h-91.2zm36.5-125.8c-16.6 8.8-34 16.1-52.3 21.6-9.7-31.3-23.4-56.8-39.5-73.6 35.4 8.5 67 26.9 91.8 52zM210.8 70.1c-16.1 16.7-29.7 42.2-39.3 73.3-18.1-5.5-35.4-12.7-51.8-21.5 24.5-25 55.9-43.3 91.1-51.8zM119.6 390c16.4-8.8 33.8-16 51.8-21.5 9.7 31.2 23.3 56.6 39.4 73.4-35.2-8.5-66.6-26.8-91.2-51.9zm181 52.1c16.2-16.8 29.8-42.3 39.6-73.7 18.3 5.5 35.7 12.8 52.3 21.6-24.8 25.2-56.5 43.6-91.9 52.1z" fill="#69c8d3"/></svg>
          <a href="https://capla-466655dd16dc.herokuapp.com/" target="_blank" class="text-sm md:text-base">Website</a>
        </div>
      </div>
      <div class="description">
        <div class="role text-sm md:text-lg"> 
          <span class="tech-text text-white">Roles</span> &nbsp;{{'< Web developer />'}}
        </div>
        <div class="bref-desc">
          <p> The Center for Practical English Language Learning (CAPLA in french) is a structure that supports professionals in the written and oral expression of English, which is essential in today's working world.</p>
        <p>
This center develops intensive courses with a language laboratory, relying on its bilingual experts and modern technologies while focusing on the practice of the professions.
        </p>
        <p class="mt-4">
          This is a project that I developed alone for a client who knew what he wanted. There was a complex constraint on this project. Indeed, it was necessary for the customer to be able to modify the date of the next session. 
I did not want to use a database for a single input in order to reduce the client's expenses. 
The solution was to extend the server, to add express.js and then write to a file that stores the sessions. 
        </p>

          <div class="tech-skills my-8">
            <span class="tech-text">Tools</span>
            <span class="skill">Nuxt js</span>
            <span class="skill">Vue js</span> 
            <span class="skill">Tailwind</span>
            <span class="skill">Express js</span>
            <span class="skill">Cloudfare</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/header.vue';
export default {
  components:{
    Header,
  },
  head:{
        title: `Project`,
  },
  mounted(){
  }
}
</script>

<style scoped>
@import url('~/assets/css/project.css');
</style>