<template>
  <div class="location">
    <div class="location-icon">
      <img src="~/assets/images/location3d.png" alt="">
    </div>
    <div class="location-text">Dakar, Senegal</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.location{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  max-width: 150px;
  color: #6b7688;
  /* transform: rotate(20deg); */
}

.location-icon{
  width: 40px;
  height: auto;
}

.location-icon img{
  width: 100%;
  height: 100%;
}

.location-text{
  opacity:1 ;
  font-weight: 500;
  font-size: 9pt;
}

</style>