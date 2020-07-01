<template>
	<view class="content">
		<view class="card" v-for="(da,index) in data" :key='index' @tap="cardNav(index)"  @touchstart="touchStr(index)" @touchend="touchEnd(index)">
			<view>
				<view class="card-img"><image :src="da.img"></image></view>
				<view class="text">
					<text class="title">{{da.title}}</text>
					<text class="time">{{da.time}}</text>
					<button class="btn">{{da.btn}}</button>
				</view>
			</view>
		</view>
		<view>
			<text style="font-size: 25rpx;">你还可以通过“阅读时长积累”获得无限卡</text><br />
			<text style="font-size: 20rpx;color: #a6a19a;">1.阅读即送无限卡。阅读时间越长，赠送无限卡越多。每周最多可获得4天无限卡。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navarr:['second/1','second/2','second/3','second/4'],
				data:[
					{
						img:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1621301879,4151041795&fm=26&gp=0.jpg',
						title:'每日一答',
						btn:'玩一玩',
						time:'挑战连续答对12道题'
					},
					{
						img:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=576019308,1837405679&fm=26&gp=0.jpg',
						title:'读书小队',
						btn:'立即组队',
						time:'3人成队，共攒积分兑大奖'
					},
					{
						img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2533215658,320580699&fm=26&gp=0.jpg',
						title:'组队抽终身无限卡',
						btn:'立即组队',
						time:'第 80 期间 04.11-04.18'
					},
					{
						img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3402838417,1335912759&fm=26&gp=0.jpg',
						title:'免费图书馆',
						btn:'立即查看',
						time:'第 143 期 04.10-04.17'
					},
					{
						img:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1291875475,4230022255&fm=26&gp=0.jpg',
						title:'免费听书馆',
						btn:'立即收听',
						time:'第 143 期 04.07-04.14'
					},
					{
						img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1195892844,3822833482&fm=26&gp=0.jpg',
						title:'集赞得12天无限卡',
						btn:'立即参与',
						time:'第 56 期 04.09-04.16'
					},
					{
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=855363113,2656565861&fm=26&gp=0.jpg',
						title:'好书好礼翻出来',
						btn:'翻一翻',
						time:'第 55 期 04.07-04.14'
					},
					{
						img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2562574247,2304042826&fm=26&gp=0.jpg',
						title:'本周飙升榜',
						btn:'立即查看',
						time:'第 84 期 04.08-04.15'
					}
				]
			}
		},
		methods: {
			cardNav(index){
				uni.navigateTo({
					url:this.navarr[index]
				})
			},
			touchStr(da,index){

			},
			touchEnd(index){

			}
		},
		onShow(){
			
		},
		computed:{
		},
	}
</script>

<style>
	page{
		padding: 0;
		margin: 0;
	}
	.content{
		padding: 50rpx 20rpx;
		background-color: #f4f3f3;
	}
	.card{
		width: 100%;
		height: 380rpx;
		border-radius: 15rpx;
		overflow: hidden;
		box-sizing: border-box;
		flex-direction: column;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 50rpx;
		box-shadow: 0 7rpx 5rpx #F1F1F1;
	}
	.card-img{
		height: 250rpx;
		background-color: #A5C261;
	}
	.card-img image{
		width: 100%;
		height: 100%;
	}
	.text{
		height: 130rpx;
		position: relative;
		background-color: white;
	}
	.title{
		font-size: 45rpx;
		font-weight: bold;
		position: absolute;
		font-family: 楷体;
		top: 20rpx;
		left: 50rpx;
	}
	.time{
		position: absolute;
		color: #a6a39a;
		font-size: 23rpx;
		top: 80rpx;
		left: 50rpx;
	}
	.btn{
		position: absolute;
		right: 50rpx;
		top: 40rpx;
		width: 170rpx;
		line-height: 60rpx;
		height: 60rpx;
		font-size: 26rpx;
		border-radius: 30rpx;
		text-align: center;
		background-color: #f48c24;
	}
</style>
