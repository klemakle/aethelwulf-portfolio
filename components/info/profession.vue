<template>
  <div class="card">
    <div class="card-profession">
      <div class="title">
        Software engineer
      </div>
      <div class="dev">
        Fullstack Javascript developer
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.card{
  transform:rotate(-5deg);
  width: 170px;
  height: auto;
  padding: 0;
  border: none;
  border-radius: 20px;
  outline-offset: 4px;
  background: #efefef;
   -webkit-box-shadow: 0px 12px 20px 2px #b9c5cda5; 
  box-shadow: 0px 12px 20px 2px #b9c5cda5;
}

.card-profession{
  width: 170px;
  color: #6b7688;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 15px;
  transform: translateY(-8px);
}

.card-profession .title{
  font-size: 10pt;
  font-weight: 700;
}
.card-profession .dev{
  font-size: 7pt;
  opacity: .8;
}

</style>