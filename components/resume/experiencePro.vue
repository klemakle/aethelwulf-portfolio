<template>
  <div class="experience-pro-page">
    <div class="experience-pro-title">WORK EXPERIENCE</div>
     <div class="timeline">
      <ul>
        <li>
          <span>Aug 2020 - Jan 2021</span>
          <div class="content">
            <h3>CRI - EPT</h3>
            <p>
              It was a 6 months internship during which we worked from the beginning to the delivery
              of a Digital Workspace MVP (ERP) for the Polytechnic School of Thies.
            </p>
            <!-- <div><div class="technos"> <span>Technos :</span>React js, Django, Django-Rest-Framework, MongoDB, Github </div> </div> -->
            <div> 
              <div class="technos"> <span>Tools :</span>React js, Django, Django-Rest-Framework, MongoDB, Github </div>
            </div>
          </div>
        </li>
        <li>
          <span>Feb 2021 - Apr 2022</span>
          <div class="content">
            <h3>TeamX - GROUP</h3>
            <p>
              This experience was my immersion internship of the 4th year of training. 
              It lasted 8 months during which I worked in 3 projects:
            </p>
               <div> 
                <div> 1 - Health-tech </div>
                <div class="technos"> <span>Tools :</span>Angular, Ionic, Express, MongoDB, Bitbucket, Heroku, Socket io, axios </div>
               </div>

               <div> 
                <div>2 - Web-app for safe driving </div>
                <div class="technos"> <span>Tools :</span>Vue js, Nuxt js, Nuxt-auth, Nest js, MongoDB, Bitbucket, Heroku </div>
               </div>

               <div> 
                <div>3 - E-commerce B2B platform</div>
                <div class="technos"> <span>Tools :</span>Vue js, Nuxt js, Heroku, Jira, Bitbucket </div>
               </div>
          </div>
        </li>
      </ul>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '~/assets/css/timeline.css';

.experience-pro-page{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
	align-items: center;
	gap: 1px;
  margin-bottom: 20px;
}

.experience-pro-title{
  color: #9cc0c9;
	font-weight: 700;
	font-family: Montserrat-Regular;
  text-decoration: underline;
}

</style>