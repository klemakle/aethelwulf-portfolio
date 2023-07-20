<template>
  <div>
    <div class="tech-list">
      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/javascript.png" alt="Javascript"></div>
        <div class="tech-label">Javascript</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/typescript.png" alt="Typescript"></div>
        <div class="tech-label">Typescript</div>
      </div>
      
      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/java.png" alt="Java"></div>
        <div class="tech-label">Java</div>
      </div>
      
      <div class="tech-line"> 
        <div class="tech-image grayscale"><img src="~/assets/images/technos/node.png" alt="Node"></div>
        <div class="tech-label">Node Js</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image grayscale"><img src="~/assets/images/technos/nuxt.png" alt="Nuxt js"></div>
        <div class="tech-label">Nuxt js</div>
      </div>
      
      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/vuejs.png" alt="Vue"></div>
        <div class="tech-label">Vue</div>
      </div>
      
      
      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/reactjs.png" alt="React"></div>
        <div class="tech-label">React</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/express.png" alt="Express"></div>
        <div class="tech-label">Express Js</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/nestjs.png" alt="Nest Js"></div>
        <div class="tech-label">Nest Js</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/spring.png" alt="Spring boot"></div>
        <div class="tech-label">Spring boot</div>
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
        <div class="tech-image"><img src="~/assets/images/technos/gitlab.png" alt="Gitlab"></div>
        <div class="tech-label">Gitlab</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/bitbucket.png" alt="Bitbucket"></div>
        <div class="tech-label">Bitbucket</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/heroku.png" alt="Heroku"></div>
        <div class="tech-label">Heroku</div>
      </div>

      <div class="tech-line"> 
        <div class="tech-image"><img src="~/assets/images/technos/gcp.png" alt="Gcp"></div>
        <div class="tech-label">Google cloud</div>
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
  gap: 1px;
  align-items: center;
  padding-bottom: 40px;
  flex: 1 1 22%;
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
  filter: grayscale(.7);
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