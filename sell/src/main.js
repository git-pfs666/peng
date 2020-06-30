import Vue from 'vue'//自定义一个变量名为Vue的变量
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false//阻止启动生产消息
import goods from './components/content/goods.vue'
import ratings from './components/content/ratings.vue'
import seller from './components/content/seller.vue'
import all from './components/content/all.vue'
import good from './components/content/good.vue'
import bad from './components/content/bad.vue'
let router=new VueRouter({
	routes:[
		{
			path:'/',//默认初始为goods模板
			redirect:'goods'
		},
		{
			path:"/goods",
			components:{
				viewA:goods,
			}
		},
		{
			path:'/ratings',
			components:{
				viewA:ratings
			},
			children:[//在ratings模板下的子模板(嵌套模板)
				{
					path:'/',
					redirect:'/all'
				},
				{
					path:'/all',
					components:{
						viewB:all
					}
				},
				{
					path:'/good',
					components:{
						viewB:good
					},
				},
				{
				path:'/bad',
				components:{
					viewB:bad
				}
				}]
		},
		{
			path:'/seller',
			components:{
				viewA:seller
			},
		},
	]
})
new Vue({
	router,//引入自定义的路由
  render: h => h(App),//给App(App.vue文件)渲染一个视图，然后提供给el挂载
}).$mount('#app')//App下id为app的标签

