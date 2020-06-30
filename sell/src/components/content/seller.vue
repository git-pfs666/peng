<template>
	<div class="seller">
		<div class="basic">
			<div class="sellName">
				<div class="sellName-score">粥品香坊（大运村）<br /><img src="../../../resource/img/eachScore.jpg" /><font>月售690单</font></div>
				<div class="userLike" @click="show=!show"><img src="../../../resource/img/notredHeart.jpg" v-if="show" /><img src="../../../resource/img/redHeart.jpg" v-else /><br /><font v-if="show">收藏</font><font v-else>已收藏</font></div>
			</div>
			<div class="service">
				<div class="serviceEach"><font style="font-size: 14px;">起送价</font><br /><font style="font-size: 30px;color: black;">20</font><font style="color: black;">元</font></div>
				<div class="serviceEach"><font style="font-size: 14px;">商家配送</font><br /><font style="font-size: 30px;color: black;">4</font><font style="color: black;">元</font></div>
				<div id="serviceEach"><font style="font-size: 14px;">平均配送时间</font><br /><font style="font-size: 30px;color: black;">39</font><font style="color: black;">分钟</font></div>
			</div>
		</div>
		<div class="division"></div>
		<div class="contentOut">
			<div class="content">
				<div class="sellInfo"><font>公告和活动</font><br /><p>粥品香坊其烹饪粥料的秘方源于中国前年古法，再融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p></div>
				<div class="discount"><img src="../../../resource/img/decrease_3@2x.png" /> 在线支付满28减5，满50减10</div>
				<div class="discount"><img src="../../../resource/img/discount_3@2x.png" /> 单人精彩赛</div>
				<div class="discount"><img src="../../../resource/img/special_3@2x.png" /> 特价饮品八折抢购</div>
				<div class="discount"><img src="../../../resource/img/invoice_3@2x.png" /> 该商家支持开发票，请在下单时填好发票抬头</div>
				<div class="discount" style="border: none;"><img src="../../../resource/img/guarantee_3@2x.png" /> 已加入“外卖保”计划，食品安全保障</div>
				<div id="division"></div>
				<div class="discount" style="color: black;font-size: 20px;">商家信息</div>
				<div class="discount"><font>该商家支持开发票，请在下单时填写好发票抬头</font></div>
				<div class="discount"><font>品类：其他菜系、包子粥店</font></div>
				<div class="discount"><font>地址：北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</font></div>
				<div class="discount" style="border: none;"><font>营业时间：10:00 - 20:30</font></div>
			</div>
		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:1
			}
		}
	}
</script>

<style scoped="scoped">
	.seller{
		width: 100%;
		height: 505px;
	}
	.basic{
		width: 100%;
		height: 180px;
	}
	.sellName{
		width: 80%;
		height: 70px;
		margin: 10px 10%;
		border-bottom: 1px solid rgb(230,231,232);
		float: left;
	}
	.sellName-score{
		width: 70%;
		height: 70px;
		float: left;
		font-size: 20px;
		line-height: 150%;
	}
	.sellName-score img{
		width: 50%;
		position: relative;
		top: 2px;
	}
	.sellName-score font{
		color: rgb(77,85,93);
		font-size: 15px;
		margin-left: 7px;
	}
	.userLike{
		width: 20%;
		height: 70px;
		float: left;
		margin-left: 10%;
		text-align: center;
		line-height: 150%;
		color: rgb(77,85,93);
	}
	.userLike img{
		width: 50%;
		position: relative;
		top: 5px;
		cursor: pointer;
	}
	.service{
		width: 80%;
		height: 70px;
		margin: 10px 10%;
		float: left;
	}
	.serviceEach{
		width: 33%;
		height: 70px;
		float: left;
		border-right: 1px solid rgb(230,231,232);
		text-align: center;
	}
	.serviceEach>font{
		color: rgb(147,153,159);
	}
	#serviceEach{
		width: 33%;
		height: 70px;
		float: left;
		text-align: center;
	}
	#serviceEach>font{
		color: rgb(147,153,159);
	}
	.division{
		width: 100%;
		height: 15px;
		background-color: rgb(243,245,247);
		border-top: 1px solid rgb(230,231,232);
		border-bottom: 1px solid rgb(230,231,232);
	}
	#division{
		position: relative;
		left: -5%;
		width: 110%;
		height: 15px;
		background-color: rgb(243,245,247);
		border-top: 1px solid rgb(230,231,232);
		border-bottom: 1px solid rgb(230,231,232);
		margin-bottom: 10px;
	}
	.contentOut{
		width: 100%;
		height: 290px;
		overflow: hidden;
	}
	.content{
		width: 95%;
		height: 280px;
		overflow: hidden;
		overflow-y: scroll;
		padding: 10px 5% 0;
	}
	.sellInfo{
		width: 100%;
		height: 190px;
		border-bottom: 1px solid rgb(230,231,232);
	}
	.sellInfo font{
		font-size: 20px;
	}
	.sellInfo p{
		color: red;
		position: relative;
		top: -10px;
		left: 5px;
		line-height: 25px;
	}
	.discount{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 17px;
		color: rgb(130,130,130);
		border-bottom: 1px solid rgb(230,231,232);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.discount img{
		width: 7%;
		height: 20px;
	}
	.discount font{
		margin-left: 15px;
		color: rgb(110,113,116);
	}
	.footer{
		width: 100%;
		height: 17px;
		background-color: rgb(243,245,247);
		border-top: rgb(230,231,232) 1px solid;
	}
</style>
