<template>
	<view style="font-size: 10px;padding: 15rpx;box-sizing: border-box;">
		<view v-for="(content,index) in data" @tap="huoqu" style="display: flex;box-sizing: border-box;height: 4rem;width: 100%;" :value='index' :data-title="content.title" :data-nr="content.content">
			<view style="width: 25%;margin-bottom: 5rpx;"><image :src="content.cover" style="width: 100%;height: 100%;"></image></view>
			<view style="flex: 1;font-size: 0.8rem;overflow: hidden;text-overflow: ellipsis;padding-left: 8rpx;">{{content.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
				data1:[]
			}
		},
		onShow(){
			var that=this;
			uni.request({
				url:"https://unidemo.dcloud.net.cn/api/news",
				method:"GET",
				data:{},
				success: (res) => {
					for(var i=0;i<res.data.length;i++){
						this.data1+=res.data[i].content
					}
					this.data=res.data
				}
			})
		},
		methods: {
			huoqu(e){
				console.log(e)
				e.currentTarget.dataset.nr=e.currentTarget.dataset.nr.replace(/%/g, '%25' );
				var nr=e.currentTarget.dataset.nr;
				var title=e.currentTarget.dataset.title;
				uni.navigateTo({
					url:"info1?nr="+nr+"&title="+title
				})
			}
		}
	}
</script>

<style>

</style>
