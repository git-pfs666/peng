<template>
	<view>
		<view :style="{height:getHeight,padding:padding}">
			<view style="text-align: center;font-weight: bold;font-size: 30rpx;margin: 15rpx 0;">{{title}}</view>
			<view style="text-indent: 2em;overflow-x: hidden;">
				<rich-text :nodes="nr" style="font-size: 25rpx;"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nr:'',
				title:'',
				padding:'15rpx',
			}
		},
		onLoad(e){
			e.nr=e.nr.replace(/\<img/gi,'<img style="width:100%"');//给富文本图片适应屏幕大小
			e.nr=e.nr.replace(/\<p/gi,'<p style="text-indent:2em"');
			this.nr=e.nr;
			this.title=e.title
		},
		onShow() {
			
		},
		methods: {
			
		},
		computed:{
			getHeight(){
				var height;
				uni.getSystemInfo({
					success: (res) => {
						height=res.windowHeight+'px'
					}
				})
				return height
			}
		}
	}
</script>

<style>

</style>
