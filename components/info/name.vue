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
       <div class="logo-social facebook">
        <img src="../../assets/images/facebook.png" alt="">
      </div>
      <div class="twitter logo-social">
        <img src="../../assets/images/twitter.png" alt="">
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
  transform: rotate(-5deg);
  cursor: pointer;
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
  background: #ddd;
  -webkit-box-shadow: 0px 12px 20px 2px #b9c5cda5; 
  box-shadow: 0px 12px 20px 2px #b9c5cda5;
  position: relative;
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
  width: 40px;
  height: auto;
  position: absolute;
  transform: translate(-50%, -20%);
  opacity:.3;
  transition: all .5s cubic-bezier(0.25, 0, 0, 1);
}

.logo-social img{
  width: 100%;
  height: 100%;
}


.twitter{
  left:45.5%;
  top:18.75%;

}

.facebook{
  left:15.75%;
  top:39.5%;
}

.card-name:hover .logo-social{
  display: block;
  transform: translate(-190%, -190%);
  opacity: .8;
}

</style>