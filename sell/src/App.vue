<template>
  <div id="app">
	<div class="Information">
		<div class="content">
			<h2>粥品香坊（大运村）</h2>
			<div class="NameImg"><img src="../resource/img/four.png" /></div>
			<div class="header">
				<div>优惠信息</div>
			</div>
			<div class="discount">
				<div class="discount-info"><img src="../resource/img/decrease_3@2x.png" /> 在线支付满28减5，满50减10</div>
				<div class="discount-info"><img src="../resource/img/discount_3@2x.png" /> 单人精彩赛</div>
				<div class="discount-info"><img src="../resource/img/discount_3@2x.png" /> 清肺雪梨汤8折抢购</div>
				<div class="discount-info"><img src="../resource/img/special_3@2x.png" /> 特价饮品八折抢购</div>
				<div class="discount-info"><img src="../resource/img/special_3@2x.png" /> 单人特色套餐</div>
			</div>
			<div class="header">
				<div>商家公告</div>
			</div>
			<div class="sellInfo">粥品香坊其烹饪粥料的秘方源于中国前年古法，再融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</div>
			<div id="close">+</div>
		</div>
	</div>
	<div id="main">
	<div class="headerChange">
   <v-header></v-header>
   <div class="tab">
	<div class="tab-item" id="goods">
		<router-link :to="{path:'goods'}" tag="div">商品{{a}}</router-link>
	</div>
	<div class="tab-item" id="ratings">
		<router-link :to="{path:'ratings'}" tag="div">评论</router-link>
		</div>
	<div class="tab-item" id="seller">
		<router-link :to="{path:'seller'}" tag="div">商家</router-link>
	</div>
   </div>
   </div>
   <keep-alive><!--使改变路由数据不变-->
	<router-view name="viewA"></router-view>
	</keep-alive>
	</div>
  </div>
</template>

<script>
	
import header from './components/header/header.vue'//引入header模板

export default{
	components:{
		'v-header':header,
	},
}
</script>

<style scoped="scoped">
	.Information{
		width: 375px;
		height: 667px;
		background-color: black;
		position: absolute;
		z-index: 100;
		opacity: 0.7;
		display: none;
	}
	.content{
		width: 80%;
		height: 547px;
		margin: 60px 10%;
	}
	h2{
		color: white;
		text-align: center;
	}
	.header{
		width:100%;
		height:36px;
		line-height: 36px;
		text-align:center;
		position:relative;
		color: white;
		font-weight: bold;
	}
	.header div:before,.header div:after{
		position:absolute;
		background:rgb(57,65,73);
		content:"";
		height:1px;
		top:50%;
		width:30%;
	}
	.header div:before{left:10px;}
	.header div:after{right:10px;}
	.discount{
		width: 100%;
		height: 150px;
	}
	.discount-info{
		padding-left: 5px;
		width: 100%-5px;
		height: 30px;
		line-height: 30px;
		color: white;
	}
	.discount-info img{
		width: 7%;
		position: relative;
		top: 5px;
	}
	.sellInfo{
		width: 100%-10px;
		height: 200px;
		line-height: 30px;
		color: white;
		margin: 0 5px;
	}
	#close{
		width: 100%;
		height: 30px;
		color: rgb(145,150,154);
		font-size: 40px;
		text-align: center;
		transform: rotate(45deg);
		cursor: pointer;
	}
	.NameImg{
		text-align: center;
	}
	.AppChange{
		width: 100%;
		height: 160px;
		opacity: 0.5;
		position: relative;
		z-index: 5;
	}
	#app{
		width: 375px;
		height: 667px;
		border: #42B983 1px solid;
	}
	#main{
		width: 100%;
		height: 100%;
	}
.tab{
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border: beige solid 1px;
	color: rgb(77,85,93);
}
.tab-item{
	text-align: center;
	flex: 1;
	cursor: pointer;
}
</style>
