<template>
  <div>
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

.card-profession{
  margin-top: 40px;
  width: 170px;
  color: #6b7688;
  max-width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #eee;
  border-radius: 20px;
  padding: 10px 15px;
  -webkit-box-shadow: 0px 20px 16px -2px rgba(239,239,239,0.68); 
  box-shadow: 0px 20px 16px -2px rgba(239,239,239,0.68);
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