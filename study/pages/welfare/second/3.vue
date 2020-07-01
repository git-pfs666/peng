<template>
	<view style="width: 100%;text-align: center;padding-top: 20px;">
		<view style="height: 44px;width: 100%;background-color: red;">
			<text @tap="back">后退</text>
		</view>
		<audio style="text-align: left;margin: 0 auto;" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" :controls='ass'>123</audio>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: {
				                poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
				                name: '致爱丽丝',
				                author: '暂无',
				                src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
				            },
				            audioAction: {
				                method: 'pause'
				            },
							ass:true
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onLoad() {
		},
		onUnload() {
		}
	}
</script>

<style>

</style>
