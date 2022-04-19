<template>
    <div id="kele-lek">
      
      <div class="content">
        <div class="title1">Kele Lek</div>
        <div class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae et dicta ea consectetur eveniet nisi nam explicabo nobis, debitis asperiores esse, enim sit eos aliquid inventore, unde laudantium fuga quam.</div>
      </div>

      <div class="photo-kele">
        <img src="~/assets/images/kele-lek.png" alt="kele-lek_photo">
      </div>

    </div>
</template>


<script>
export default {
  
}
</script>



<style >
@font-face {
  font-family: Ubuntu-bold;
  src: url("~/assets/fonts/Ubuntu/Ubuntu-Bold.ttf");
}

@font-face {
  font-family: Montserrat-medium;
  src: url("~/assets/fonts/Montserrat/Montserrat-Light.ttf");
}

#kele-lek{
  background-color: #FDF2E9  ;
  height:100vh;
  display: flex;
  padding-left: 4rem;
  padding-right: 7rem;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
}

.content{
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  z-index: 10;
  height: auto;
}

.content .title1{
  font-size: 60pt;
  font-weight: bold;
  font-family: Ubuntu-bold;
  margin-bottom: 5px;
  color:#E67E22 ;
}

.description{
  font-family: Montserrat-medium;
  color:#3C4459;
  font-size:14pt;
  z-index:0;
}

.photo-kele{
  border-radius: 3px;
  width: 45%;
  height: auto;
  background-color: none;
  transform:
    perspective(750px)
    translate3d(0px, 0px, -20px)
    rotateX(15deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  border: none;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  animation: bounce 1s ease-in alternate;
  animation-iteration-count: 5;
  transition: 0.4s ease-in-out transform ;
  clip-path: circle(10, 10);
  opacity: 0.95;
}


.photo-kele:hover{
  cursor: pointer;
  transform: translate3d(0px, 0px, -250px);
  opacity:1;
}

.photo-kele img{
  width:100%;
  height:100%;
  border-radius: 3px;
  object-fit: cover;
  transform: scale(1, 1.1);
  z-index:-1;
}



@keyframes bounce {
  0%{
    transform:  perspective(750px)
    translate3d(0px, 0px, 20px)
    rotateX(25deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  }
  25%{
     transform:  perspective(750px)
    translate3d(0px, 0px, 10px)
    rotateX(25deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  }
  50%{
     transform:  perspective(750px)
    translate3d(0px, 0px, 0px)
    rotateX(25deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  }
  75%{
     transform:  perspective(750px)
    translate3d(0px, 0px, -10px)
    rotateX(25deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  }
  100%{
     transform:  perspective(750px)
    translate3d(0px, 0px, -20px)
    rotateX(15deg)
    rotateY(-10deg)
    scale(0.9, 0.9);
  }
}


</style>