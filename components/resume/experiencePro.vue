<template>
  <div class="experience-pro-page">
    <div class="experience-pro-title">WORK EXPERIENCE</div>
     <div class="timeline">
      <ul>
        <li>
          <span>Aug 2020 - Jan 2021</span>
          <div class="content">
            <h3>CRI - EPT</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </li>
        <li>
          <span>Feb 2021 - Apr 2022</span>
          <div class="content">
            <h3>TeamX - GROUP</h3>
            <p>
              I studied computer and telecom engineering at the Ecole Polytechnique de Thiès
            </p>
          </div>
        </li>
      </ul>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '~/assets/css/timeline.css';

.experience-pro-page{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
	gap: 20px;
	align-items: center;
}

.experience-pro-title{
  color: #9cc0c9;
	font-weight: 700;
	font-family: Montserrat-Regular;
}

</style>