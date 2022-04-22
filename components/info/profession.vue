<template>
  <div class="card">
    <div :class="end ? 'card-profession align-end' :'card-profession'">
      <div class="title">
        {{title}}
      </div>
      <div class="dev">
        {{desc}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title", "desc","end"]
}
</script>

<style>

.card{
  /* transform:rotate(7deg); */
  width: 170px;
  height: auto;
  padding: 0;
  border: none;
  border-radius: 20px;
  outline-offset: 4px;
  transition: transform .2s ease-out;
  background: #efefef;
   -webkit-box-shadow: 0px 10px 20px 1px #b9c5cda5; 
  box-shadow: 0px 10px 20px 1px #b9c5cda5;
}

.card:hover{
  transform:rotate(0deg);
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

.align-end{
  align-items: flex-end !important;
}

.card-profession .title{
  font-size: 10pt;
  font-weight: 700;
}
.card-profession .dev{
  font-size: 7pt;
  opacity: .8;
}

/* max-width 350px */
@media (max-width: 400px) { 
  .card{
    transform: rotate(0deg);
  }
}

</style>