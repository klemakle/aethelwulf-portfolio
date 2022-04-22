<template>
   <div class="trophy">
    <img src="~/assets/images/award.png" alt="">
      <div class="flag-sn">
        <img src="~/assets/images/senegal2.png" alt="sn-flag"/>
        <span class="afcon">AFCON winners</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.trophy{
  width: 100px;
  height: auto;
  transform: rotate(0deg);
}
.trophy:hover{
  transform: rotate(0deg);
}

.trophy > img{
  width: 100%;
  height: 100%;
  transform: rotate(-25deg);
  filter: grayscale(1);
  transition: all .25s cubic-bezier(0.25, 0, 0, 1);
}

.trophy:hover > img{
  filter: grayscale(0);
  transform: rotate(-20deg);
}

.afcon{
  font-size: 7pt;
  text-align: center;
  color: #6b7688;
  font-weight: 600;
}

.flag-sn{
  width: auto;
  height: auto;
}

.flag-sn img{
  width: 20px;
  height: 100%;
}


</style>