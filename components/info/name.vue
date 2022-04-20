<template>
  <div class="name">
    <div class="card-name">
      <div class="text-name">
        <div class="hello-icon">
          <img src="~/assets/images/goodbye2.png" alt="hello icon">
        </div>
        <div class="hello">
          <p class="hello-text">Hello, I'm</p>
          <h5>Kalidou Dia</h5>
        </div>
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
  -webkit-box-shadow: 0px 12px 20px 2px #B9C5CD; 
  box-shadow: 0px 12px 20px 2px #B9C5CD;
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

</style>