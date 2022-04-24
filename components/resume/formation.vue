<template>
  <div class="formation-page">
     <div class="formation-title">TRAINING</div>
    <div class="timeline">
		<ul>
			<li>
				<span>July 2017</span>
				<div class="content">
					<h3>High-School Degree</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
				</div>
			</li>
			<li>
				<span>November 2017</span>
				<div class="content">
					<h3>Computer Science Degree</h3>
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

.formation-page{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	align-items: center;
}
.formation-title{
	color: #9cc0c9;
	font-weight: 700;
	font-family: Montserrat-Regular;
}

</style>