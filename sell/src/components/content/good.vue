<template>
	<div>
		<div class="allOut">
			<div class="all">
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg1.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">聚***家</div>
							<div class="time">2019-12-15 20:33</div>
						</div>
						<font><img src="../../../resource/img/eachScore.jpg" />80分钟送达</font>
						<div class="commentWord">75分钟才到，太慢了，不过外卖小哥态度蛮好的</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/good.jpg" /></div>
							<div class="goodAndBadContent">皮蛋瘦肉粥配包子套餐</div>
						</div>
						</div>
				</div>
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg3.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">陈*麟</div>
							<div class="time">2019-12-13 12:55</div>
						</div>
						<font><img src="../../../resource/img/good5.jpg" />45分钟送达</font>
						<div class="commentWord">挺不错的一家店，味道超棒</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/good.jpg" /></div>
							<div class="goodAndBadContent">皮蛋瘦肉粥配包子套餐</div>
						</div>
						</div>
				</div>
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg5.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">1********5</div>
							<div class="time">2019-12-13 12:55</div>
						</div>
						<font><img src="../../../resource/img/good5.jpg" />58分钟送达</font>
						<div class="commentWord">超好吃，下次还点</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/good.jpg" /></div>
							<div class="goodAndBadContent">糖醋排骨</div>
						</div>
						</div>
				</div>
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg6.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">至**诚</div>
							<div class="time">2019-12-13 12:55</div>
						</div>
						<font><img src="../../../resource/img/eachScore.jpg" />52分钟送达</font>
						<div class="commentWord">口感不错，点个赞</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/good.jpg" /></div>
							<div class="goodAndBadContent">青椒炒板鸭</div>
						</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped="scoped">
	.all{
		width: 105%;
		height: 298px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.allOut{
		width: 100%;
		height: 298px;
		overflow: hidden;
	}
	.comment{
		width: 86%;
		height: 130px;
		margin: 20px 7%;
		border-bottom: 1px solid rgb(230,231,232);
	}
	.headImg{
		width: 15%;
		height: 130px;
		float: left;
	}
	.headImg img{
		width: 80%;
		position: relative;
		left: 5px;
	}
	.nameAndTime{
		width: 100%;
		height: 30px;
	}
	.name{
		width: 30%;
		height: 30px;
		line-height: 30px;
		float: left;
	}
	.time{
		width: 70%;
		height: 30px;
		line-height: 30px;
		float: left;
		text-align: right;
		color: rgb(147,153,159);
		font-size: 14px;
	}
	.commentInfo{
		width: 82%;
		height: 130px;
		float: left;
		margin-left: 3%;
	}
	.commentInfo font{
		color: rgb(180,184,187);
	}
	.commentInfo font img{
		width: 40%;
		position: relative;
		top: 2px;
		margin-right: 10px;
	}
	.commentWord{
		font-size: 17px;
	}
	.goodAndBad{
		float: left;
	}
	.goodAndBad img{
		width: 70%;
		position: relative;
		top: 3px;
	}
	.goodAndBadContent{
		text-overflow: ellipsis;
		width: 25%;
		height: 20px;
		border: 1px solid rgb(230,231,232);
		float: left;
		overflow: hidden;
		line-height: 20px;
		color: rgb(147,153,159);
		white-space: nowrap;
		position: relative;
		left: -10px;
	}
</style>
