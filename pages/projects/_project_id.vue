<template>
  <div class="global-project">
    <div class="header">
      <Header :resume="false" :projects="true"/>
    </div>
    <div class="project-info">
      <div class="image">
        <img src="~/assets/images/kele-lek.png" alt="">
      </div>
      <div class="icon-views">
        <div class="icon">
          <img src="~/assets/images/project/eye.png" alt="github">
        </div>
        <div class="icon">
          <img src="~/assets/images/project/github2.png" alt="github">
        </div>
      </div>
      <div class="description">
        <div class="role"> 
          <span class="role-text">Role</span>  < Fullstack developer />
        </div>
        <div class="bref-desc">
         Kele lek is a culinary blog where you can share your most delicious recipes. It is a class project counting for the 'NoSQL database' course that I developed alone in 2019.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/header.vue'
export default {
  components:{
    Header
  }
}
</script>

<style scoped>
.global-project{
  background-color: #334961;
  color: #fff;
  height: 100%;
}

.header{
  background-color: #334961;
}

.project-info{
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.project-info .image{
  width: 60%;
  height: auto;
}

.project-info .image > img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.project-info .icon-views{
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-right: 20% ;
  margin-top: 10px;
}

.project-info .icon-views .icon{
  width: 40px;
  height: auto;
  text-decoration: none;
}

.project-info .icon-views .icon > img{
  width: 100%;
  height: 100%;
  opacity: .5;
  cursor: pointer;
  transition: all .25s;
}

.project-info .icon-views .icon > img:hover{
  opacity: .9;
}

.project-info .description{
  color: #fff;
  margin: 20px 10% 0 10%;
  display: flex;
  flex-direction: column;
}

.project-info .description .role{
  font-family: Montserrat-Thin;
  font-size: 11pt;
  font-style: italic;
  color: #8CC2E1;
  font-family: Montserrat-Regular;
}

.project-info .description .role .role-text{
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-family: Montserrat-Regular;
  background-color: #1685b8;
  padding: 5px 10px;
  border-radius: 20px;
}

.project-info .description .bref-desc{
  font-family: Montserrat-Thin;
  margin: 20px auto ;
  font-size: 12pt;
}


</style>