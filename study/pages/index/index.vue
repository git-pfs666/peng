<template>
	<view class="content">
		<view class="banner">
			<swiper 
			indicator-dots="dots"
			indicator-active-color="#0055ff"
			:autoplay="autoplay"
			interval="2000"
			circular="true"
			>
				<swiper-item v-for="img in data"><image :src="img.img"></image></swiper-item>
			</swiper>
			<view @tap="naviRead" class="read"></view>
			<view @tap="naviWelfare" class="read1"></view>
			<view style="text-align: center;position: relative;top: 120rpx;font-weight: bold;">读书的十四个好处</view>
			<view style="padding: 150rpx 0;height: auto;width: 100%;">
				<view v-for="(i,index) in goodData">
					<view class="title">{{i.title}}</view>
					<view class="text">{{i.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				autoplay:true,
				data:[
					{img:'http://img2.imgtn.bdimg.com/it/u=2370117616,884008690&fm=26&gp=0.jpg'},
					{img:'http://img1.imgtn.bdimg.com/it/u=1100255529,3468421808&fm=26&gp=0.jpg'},
					{img:'http://img0.imgtn.bdimg.com/it/u=3980282353,526507311&fm=26&gp=0.jpg'}
				],
				goodData:[{
					title:'获取知识',
					text:'我们读书的最大原因之一就是获取知识。书籍是丰富的信息来源。阅读不同主题的书籍也会帮助我们更加深入的了解这一类别。每当你读一本书时，你都会学到一些本来不为人所知的新信息。'
				},{
					title:'改善大脑',
					text:'研究表明，阅读对大脑有很强的积极作用。通过保持精神刺激，可以预防老年痴呆症和阿尔茨海默病。这是因为，保持大脑活跃可以防止它失去力量。大脑是肌肉，就像身体的其他肌肉一样，运动使它保持强壮和健康。与解决谜题类似，阅读书籍是锻炼大脑并保持健康的好方法。'
				},{
					title:'减轻压力',
					text:'阅读对身体也有积极影响。读书比放松或听音乐更能缓解压力。根据研究，阅读更多时候可以帮助我们放松心情。'
				},{
					title:'改善记忆力',
					text:'每次读书时，你都要记住书的设置，人物，背景，历史，人物，子图等等。当你的大脑学会记住这一切时，你的记忆会变得更好。更重要的是，随着你创造的每一个新记忆，你扩展了新的途径，这加强了现有的记忆。'
				},{
					title:'提高想象力',
					text:'你阅读的越多，你就越有想象力。每当你读一本小说书时，它都会带你到另一个世界。在新的世界里，当你试图在自己的脑海中看到事物时，你的想象力是最好的。'
				},{
					title:'培养批判性思维技能',
					text:'阅读书籍的主要好处之一是其培养批判性思维技能的能力。例如，阅读一本神秘小说会使你的思绪更加敏锐。在制定重要的日常决策时，批判性思维技能至关重要。阅读要求我们，不能像看电视那样的方式去思考。您阅读的越多，您对正在阅读的内容及其应用的理解就越深刻。'
				},{
					title:'建立词汇量',
					text:'阅读可以提高你的语言词汇和命令。在您阅读时，您会遇到新单词，成语，短语和写作风格。'
				},{
					title:'提高写作技巧',
					text:'读一本写得很好的书，会具有影响你成为一个更好的作家的能力。就像艺术家影响他人一样，作家也是如此。许多成功的作者通过阅读他人的作品获得了他们的专业知识。所以，如果你想成为一个更好的作家，首先要从以前的大师作品那里学习。'
				},{
					title:'提高沟通技巧',
					text:'提高您的词汇量和写作技巧与发展您的沟通技巧密切相关。您阅读和写作越多，沟通就越好。提高沟通能力，改善人际关系，帮助你成为更好的员工或学生。'
				},{
					title:'改善焦点和注意力',
					text:'在我们忙碌的生活方式中，每天都在不同的方向吸引我们的注意力，因为我们每天都在尝试多任务。例如，您可能会发现自己在处理任务，通过qq与人聊天，查看电子邮件，关注微博以及与同事互动之间分配时间。所有这些多任务处理都会导致高压力和低生产率。当你读一本书时，所有的注意力都集中在你正在阅读的内容上。你的眼睛和思想沉浸在故事的细节中。这可以提高您的注意力和注意力每天至少阅读一本书20分钟，你会惊讶于你将会更加专注。'
				},{
					title:'阅读是一个富有成效的爱好',
					text:'阅读书籍不仅可以帮助我们摆脱烦恼，还可以使我们的思想从单调中转移出来。书籍是娱乐的绝佳来源。喜欢阅读的人永远不会感到无聊，因为这是摆脱厌倦的完美方式。随着书籍带你到另外一个不同的世界，你可以充分放松和释放活力。'
				},{
					title:'性价比高的娱乐方式',
					text:'生活充满了挑战。当我们在不同的阶段中经历不同的事情时，一点点的动力就会有很大的帮助。阅读关于生活经历的励志书籍可以改变我们的生活。读一本好书，名人的自传会鼓励你，你也会学到帮助你实现个人目标的技巧。几乎一切，书籍都会告诉我们，怎样才要成为一个更好的丈夫、妻子、女儿、儿子、母亲、父亲，甚至是员工。'
				},{
					title:'改善健康',
					text:'书实际上可以帮助改善健康。阅读这样的书可以减少抑郁的程度。患有严重抑郁症的人可以从阅读书籍中获益。除此之外，书还提供了关于锻炼、节食和其他健康生活方式的重要建议。所有这些都有助于改善心理和身体健康。'
				},{
					title:'让你更善解人意',
					text:'根据研究，沉浸在书中，尤其是小说中，会增加你的同理心。在荷兰进行的一项研究中，研究人员发现，被小说作品“情感转移”的人，同情心会得到提升。通过阅读一本书，你成为故事的一部分，感受角色的痛苦和其他情感。这反过来又能让你意识到不同的事物是如何影响他人的。最终，这会提高你和别人共情的能力。所以，继续读这个故事吧，一个有更多善解人意的人的世界肯定会更美好!'
				}]
			}
		},
		onLoad() {
		},
		onShow(){
				
		},
		methods: {
			naviRead(){
				uni.switchTab({
					url:"../read/read"
				})
			},
			naviWelfare(){
				uni.switchTab({
					url:"../welfare/welfare"
				})
			}
		},
		onTabItemTap(index) {
			index='0'
			alert(1)
		}
	}
</script>

<style>
	page{
		margin: 0;
		padding: 0;
	}
	.content {
		width: 100%;
		padding: 25rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.banner{
		width: 100%;
		height: 50rpx;
	}
	.banner swiper-item{
		width: 100%;
		height: 100%;
	}
	swiper-item image{
		width: 100%;
		height: 100%;
	}
	.read{
		width: 10%;
		height: 40rpx;
		position: relative;
		background-color: #ffaa00;
		float: left;
		top: 30rpx;
		left: 82%;
	}
	.read::after{
		content: '';
		width: 0;
		height: 0;
		border: 40rpx solid #ffaa00;
		position: absolute;
		left: 100%;
		top: -20rpx;
		border-color: transparent transparent transparent #ffaa00;
		box-sizing: border-box;
	}
	.read1{
		width: 10%;
		height: 40rpx;
		position: relative;
		background-color: #ffaa00;
		float: right;
		top: 30rpx;
		right: 82%;
	}
	.read1::after{
		content: '';
		width: 0;
		height: 0;
		border: 40rpx solid #ffaa00;
		position: absolute;
		top: -20rpx;
		right: 100%;
		border-color: transparent #ffaa00 transparent transparent ;
		box-sizing: border-box;
	}
	.title{
		font-size: 35rpx;
		font-weight: bold;
		margin: 10rpx 0;
		text-indent: 2em;
	}
	.text{
		font-size: 25rpx;
		text-indent: 2em;
	}
</style>
