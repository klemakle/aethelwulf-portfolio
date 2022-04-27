<template>
  <div>
    <div class="footer">
      Made with  <span class="heart"> <img src="~/assets/images/heart.png" alt="heart"></span> by <span class="nickname">@Aethelwulf</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  font-family: Montserrat-Light;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d2937;
  color: #fff;
  letter-spacing: 2px;
}

.footer .heart{
  margin:0 7px;
  width: 20px;
  height: auto;
}

.footer .heart > img{
  width: 100%;
  height: 100%;
}

.nickname{
  color: #BBD3D9;
  margin: 0 3px;
}

.nickname:hover{
  color: #8dbcc7; 
}


</style>