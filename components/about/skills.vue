<template>
  <div>
    <div class="title-skills">Skills</div>
    <div class="tech-skills">
      <div class="line-skill">Web development</div>
      <div class="line-skill">Database modelling</div>
      <div class="line-skill">Cybersecurity</div>
      <div class="line-skill">Frontend</div>
      <div class="line-skill">Backend</div>
      <div class="line-skill">Mobile App</div>
      <div class="line-skill">Web Services</div>
      <div class="line-skill">REST API</div>
      <div class="line-skill">SQL & NoSQL</div>
      <div class="line-skill">Machine Learning</div>
      <div class="line-skill">Googling</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
    font-family: Montserrat-bold;
    src: url("~/assets/fonts/Montserrat/Montserrat-Bold.ttf");
}

@font-face {
    font-family: Montserrat-Regular;
    src: url("~/assets/fonts/Montserrat/Montserrat-Regular.ttf");
}

/* 5F848E */

.title-skills{
  font-size: 30pt;
  letter-spacing: .15rem;
  color: #80a6b0;
  font-family: Montserrat-bold;
  font-weight: 900;
  width: max-content;
}

.tech-skills{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap:20px;
  align-items: center;
  padding: 20px 0;
  text-align: justify;
}

.line-skill{
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 10pt;
  background-color: #334961d8 ;
  color: #fff;
  font-family: Montserrat-Regular;
}

@media (max-width: 450px){
  .title-skills{
    font-size:25pt;
  }

  .line-skill{
    font-size: 8pt;
  }
}

</style>