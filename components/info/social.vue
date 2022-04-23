<template>
  <div class="social">
     <div class="social-network">
      <a href="https://twitter.com/ka___lidou" target="blank">
        <img src="~/assets/images/header/twitter.png" alt="twitter">
      </a>
    </div>
    <div class="social-network">
      <a href="https://github.com/klemakle" target="blank">
        <img src="~/assets/images/header/github.png" alt="github">
      </a>
    </div>
    <div class="social-network">
      <a href="https://www.linkedin.com/in/kalidou-dia-b0b63614a/" target="blank">
        <img src="~/assets/images/header/linkedin.png" alt="linkedin">
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.social{
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  z-index: 15;
}

a{
  text-decoration: none;
}

.social-network{
  width: 40px;
  height: auto;
}
.social-network > a img{
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  opacity:.4;
  cursor: pointer;
  transform: all .35s ease-out;
}
.social-network > a img:hover{
  filter: grayscale(.3);
  opacity:.9;
}

@media (max-width: 750px) { 
  .social{
    flex-direction: row;
  }
}

</style>