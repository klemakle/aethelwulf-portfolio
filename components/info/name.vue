<template>
  <div class="name">
    <div class="card-name">
      <div class="text-name">
        <div class="hello-icon">
          <img src="~/assets/images/goodbye.png" alt="hello icon">
        </div>
        <div class="hello">
          <p class="hello-text">Hello, I'm</p>
          <h5>Kalidou Dia</h5>
        </div>
      </div>
       <div class="logo-social github">
        <a href="https://github.com/klemakle" target="_blank">
          <img src="../../assets/images/icones/github.png" alt="github">
        </a>
      </div>
      <div class="logo-social twitter">
        <a href="https://twitter.com/ka___lidou" target="_blank">
          <img src="../../assets/images/icones/twitter.png" alt="twitter">
        </a>
      </div>
      <div class="logo-social linkedin">
        <a href="https://www.linkedin.com/in/kalidou-dia-b0b63614a/" target="_blank">
          <img src="../../assets/images/icones/linkedin.png" alt="linkedin">
        </a>
      </div>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.name{
  /* transform: rotate(7deg); */
  transition: transform .2s ease-out;
  cursor: unset;
}

.name:hover{
  transform: rotate(0deg);
}

.card-name{
  width: 170px;
  max-width: 300px;
  height: auto;
  background-color: #fff;
  padding: 0;
  border: none;
  border-radius: 20px;
  outline-offset: 4px;
  background: #ededed;
  -webkit-box-shadow: 0px 10px 20px 1px #b9c5cda5; 
  box-shadow: 0px 10px 20px 1px #b9c5cda5;
  position: relative;
  z-index: 10;
}

.text-name{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  padding: 10px 5px;
  background-color: #fefefe;
  transform: translateY(-6px);
}

.hello{
  color: #6b7688;
  margin-top: 10px;
}

.hello .hello-text{
  opacity: .7;
  margin-bottom:5px ;
  font-size: 8pt;
}

.logo-social{
  width: 35px;
  height: auto;
  position: absolute;
  z-index: -1;
  transform: translate(10%, -40%);
  opacity:0;
  cursor: pointer;
  transition: transform .65s cubic-bezier(0.25, 0, 0, 1), opacity .25s cubic-bezier(0.25, 0, 0, 1);
}

.card-name:hover .logo-social{
  transform: translate(-190%, -190%);
  opacity: 1;
}

.logo-social img{
  width: 100%;
  height: 100%;
  filter: invert(70%);
  transition: .25s ease;
}

.logo-social a > img:hover{
  filter: invert(0);
}


.twitter{
  left:50.5%;
  top:18.75%;
}
.github{
  left:23.75%;
  top:18.5%;
}
.linkedin{
  left: 10%;
  top: 62%;
}


/* max-width 400px */
@media (max-width: 400px) { 
  .name{
    transform: rotate(0deg);
  }
}


</style>