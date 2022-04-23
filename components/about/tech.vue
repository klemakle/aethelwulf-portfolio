<template>
  <div>
    <!-- <div class="tech">Techno</div> -->
    <div class="tech-list">
      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/javascript.png" alt="Javascript"></div>
        <div class="tech-label">Javascript</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/html.png" alt="Html"></div>
        <div class="tech-label">Html</div>
      </div>

       <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/css.png" alt="Css"></div>
        <div class="tech-label">CSS</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image grayscale"><img src="~/assets/images/technos/node.png" alt="Node"></div>
        <div class="tech-label">Node Js</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/vue.png" alt="Vue"></div>
        <div class="tech-label">Vue</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/react.png" alt="React"></div>
        <div class="tech-label">React</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/expressjs.png" alt="Express"></div>
        <div class="tech-label">Express</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/nestjs.png" alt="Nest Js"></div>
        <div class="tech-label">Nest Js</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/django.png" alt="Django"></div>
        <div class="tech-label">Django</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/mongodb.png" alt="Mongo DB"></div>
        <div class="tech-label">Mongo</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/mysql.png" alt="Mysql"></div>
        <div class="tech-label">MySQL</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/github.png" alt="Github"></div>
        <div class="tech-label">Github</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/heroku.png" alt="Heroku"></div>
        <div class="tech-label">Heroku</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/bitbucket1.png" alt="Bitbucket"></div>
        <div class="tech-label">Bitbucket</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/jira.png" alt="Jira"></div>
        <div class="tech-label">Jira</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.tech-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 20px;
  flex-wrap: wrap;
}

.tech-line{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding-bottom: 40px;
  flex: 1 1 17%;
}

.tech-line .tech-image{
  width: 50px;
  height: auto;
}
.tech-line .tech-image img{
  width: 100%;
  height: 100%;
}
.grayscale{
  filter: grayscale(1);
}

.tech-line .tech-label{
  font-family: Montserrat-Light;
  color: #5F848E;
}

@media (max-width: 460px){
  .tech-line{
    flex: 1 1 25%;
  }

  .tech-line .tech-label{
    font-size: 8pt;
  }
}

</style>