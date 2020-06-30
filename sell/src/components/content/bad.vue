<template>
	<div>
		<div class="allOut">
			<div class="all">
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg2.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">谭***0</div>
							<div class="time">2019-12-13 12:55</div>
						</div>
						<font><img src="../../../resource/img/bad2.jpg" />60分钟送达</font>
						<div class="commentWord">这次太慢了，下次希望能直接和客户沟通而不是我一次次打电话问</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/bad.jpg" /></div>
							<div class="goodAndBadContent">雪梨银耳百合粥</div>
						</div>
						</div>
				</div>
				<div class="comment">
					<div class="headImg"><img src="../../../resource/img/headImg4.jpg" /></div>
					<div class="commentInfo">
						<div class="nameAndTime">
							<div class="name">风**淡</div>
							<div class="time">2019-12-13 12:55</div>
						</div>
						<font><img src="../../../resource/img/bad2.jpg" />72分钟送达</font>
						<div class="commentWord">时间有点久了，等了一个多小时，希望以后送餐效率可以高一点</div>
						<div>
							<div class="goodAndBad"><img src="../../../resource/img/bad.jpg" /></div>
							<div class="goodAndBadContent">莲子核桃黑米粥</div>
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
