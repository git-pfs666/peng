<template>
	<div>
	<div class="header">
		<div class="info">
			<div class="info-left"><img src="../../../resource/img/header-logo.jpg" /></div>
			<div class="info-right">
				<span class="title"><img src="../../../resource/img/brand@2x.png" > 粥品香坊（大运村）</span><br />
				<span>蜂鸟专送/38分钟送达</span><br />
				<span class="discount"><img src="../../../resource/img/decrease_1@2x.png" />在线支付满28减5，满50减10</span>
				<div id="discount-info">5个</div>
			</div>
		</div>
		<div class="footer-info"><img src="../../../resource/img/bulletin@2x.png" /><a>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融...</a></div>
	</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.header{
		height: 120px;
	}
	.info{
		width:95%;
		height: 60%;
		position: relative;
		top: 15%;
		left:5%;
		display: flex;
	}
	.title{
		font-size: 20px;
	}
	.title img{
		position: relative;
		top: 4px;
		width: 10%;
		height: 30%;
	}
	.discount{
		font-size: 13px;
		position: relative;
		top: -2px;
	}
	.discount img{
		width: 7%;
		height: 25%;
		position: relative;
		top: 5px;
	}
	#discount-info{
		text-align: center;
		width: 15%;
		height: 20%;
		background-color: darkred;
		opacity: 0.5;
		border-radius: 10px;
		border: 1px solid #42B983;
		font-size: 13px;
		color: white;
		line-height: 100%;
		position: relative;
		top: -28%;
		left: 75%;
		cursor: pointer;
	}
	.info-left{
		width:17%;
		height: 90%;
		float: left;
	}
	.info-left img{
		width: 100%;
		height: 100%;
	}
	.info-right{
		margin-left: 3%;
		width: 80%;
		height: 100%;
		float: left;
	}
	.footer-info{
		background-color: black;
		opacity: 0.6;
		color: white;
		width: 100%;
		height: 25%;
		position: relative;
		top: 18px;
		font-size: 13px;
		line-height: 100%;
	}
	.footer-info img{
		width: 7%;
		height: 50%;
		position: relative;
		top: 20%;
		left: 5%;
	}
	.footer-info a{
		margin-left: 7%;
		position: relative;
		top: 3px;
	}
</style>
