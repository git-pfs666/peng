<template>
	<div class="ratings">
		<div class="score">
			<div class="average"><div class="averageNumber">3.9</div>综合评分<div class="averageFont">高于周边商家69.2%</div></div>
			<div class="each">
				<div>
					<div class="score1">服务态度 <img src="../../../resource/img/eachScore.jpg" /></div>
					<div class="score1">餐品包装 <img src="../../../resource/img/eachScore.jpg" /></div>
					<div class="score1">送达时间<font>44分钟</font></div>
				</div>
			</div>
		</div>
		<div class="division"></div>
		<div class="select">
			<div class="total"><router-link :to="{path:'all'}" tag="div">全部<font>{{total}}</font></router-link></div>
			<div class="total" style="background-color: rgb(204,236,248);color: rgb(145,166,176);"><router-link :to="{path:'good'}" tag="div">满意<font>{{good}}</font></router-link></div>
			<div class="bad"><router-link :to="{path:'bad'}" tag="div">不满意<font>{{bad}}</font></router-link></div>
		</div>
		<router-view name="viewB"></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				total:6,
				good:4,
				bad:2,
			}
		}
	}
</script>

<style scoped="scoped">
	.ratings{
		width: 100%;
		height: 505px;
	}
	.score{
		width: 100%;
		height: 130px;
	}
	.average{
		width: 40%;
		height: 90px;
		float: left;
		padding: 20px 0;
		text-align: center;
		position: relative;
	}
	.averageNumber{
		font-size: 25px;
		color: rgb(255,153,0);
		position: relative;
		top: -3px;
	}
	.averageFont{
		font-size: 12px;
		color: rgb(164,169,174);
		position: relative;
		top: 3px;
	}
	.average:before{
		content: '';
		position: absolute;
		left: auto;
		top: 10%;
		bottom: auto;
		right: 0;
		height: 80%;
		width: 1px;
		background-color: rgb(230,231,232);
	}
	.each{
		width: 60%;
		height: 130px;
		float: left;
	}
	.each>div{
		width: 80%;
		height: 90px;
		margin: 20px 10%;
		line-height: 25px;
	}
	.score1 img{
		width: 50%;
		margin-left: 3px;
	}
	.score1 font{
		margin-left: 11px;
		color: rgb(147,153,159);
	}
	.division{
		width: 100%;
		height: 15px;
		background-color: rgb(243,245,247);
		border-top: 1px solid rgb(230,231,232);
		border-bottom: 1px solid rgb(230,231,232);
	}
	.select{
		width: 90%;
		height: 60px;
		position: relative;
		padding-left: 10%;
	}
	.select:before{
		content: '';
		position: absolute;
		left: 10%;
		top: auto;
		bottom: 0;
		right: auto;
		height: 1px;
		width: 80%;
		background-color: rgb(230,231,232);
	}
	.total{
		width: 65px;
		height: 35px;
		background-color: rgb(0,160,220);
		float: left;
		margin: 12px 15px 13px 0;
		text-align: center;
		line-height: 35px;
		color: white;
		cursor: pointer;
	}
	.bad{
		width: 75px;
		height: 35px;
		background-color: rgb(233,235,236);
		float: left;
		margin: 12px 15px 13px 0;
		text-align: center;
		line-height: 35px;
		color: rgb(77,85,93);
		cursor: pointer;
	}
	.select div font{
		font-size: 13px;
		margin-left: 3px;
	}
	hr{
		border: none;
		height: 2px;
		background-color: rgb(230,231,232);
	}
</style>
