<template>
  <div class="formation-page">
     <div class="formation-title">EDUCATION</div>
    <div class="timeline">
		<ul>
			<li>
				<span>July 2017</span>
				<div class="content">
					<h3>High-School Degree</h3>
					<p>
						Scientific baccalaureate in S2 series (experimental sciences) at "College Yavuz Selim Bosphore" with honors.
					</p>
				</div>
			</li>
			<li>
				<span>2017-2022</span>
				<div class="content">
					<h3>Software engineering</h3>
					<p>
						I studied computer and telecom engineering at the Ecole Polytechnique de Thiès.
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
	align-items: center;
	gap: 1px;
	margin-bottom: 20px;
}
.formation-title{
	color: #9cc0c9;
	font-weight: 700;
	font-family: Montserrat-Regular;
	text-decoration: underline;
}

</style>