<template>
	<div class="goods">
		<div class="contentChange">
		<div class="goodsName">
			<div class="nav">热销榜</div>
			<div class="nav" :style="Nav" id="Nav1"><img src="../../../resource/img/special_1@2x.png" />单人特色套餐</div>
			<div class="nav" id="Nav2">特色粥品</div>
			<div class="nav" id="Nav3">精选热菜</div>
			<div class="nav" id="Nav4">饭类</div>
		</div>
		<div style=" width: 75%;height: 450px;overflow: hidden;">
			<div class="goodsInfo" id="goodsInfo">
			<div class="goodsInfo-I">
				<div class="goodsInfo-h">皮蛋瘦肉粥配包子套餐</div>
				<div class="goodsInfo-content">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I1.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[0]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice1}}</font><s>￥28</s></font>
						<div class="count">
							<div :style="objstyleOne" class="reduce" @click="reduceOne">-</div><font style="float: left;margin-left: 10px;">{{countOne}}</font><div class="add" @click="addOne">+</div>
						</div>
						</div>
				</div>
			</div>
			<div class="goodsInfo-I">
				<div class="goodsInfo-h">特色粥品</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I2.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[1]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice2}}</font></font>
						<div class="count">
							<div :style="objstyleTwo" class="reduce" @click="reduceTwo">-</div><font style="float: left;margin-left: 10px;">{{countTwo}}</font><div class="add" @click="addTwo">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I3.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[2]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice3}}</font></font>
						<div class="count">
							<div :style="objstyleThree" class="reduce" @click="reduceThree">-</div><font style="float: left;margin-left: 10px;">{{countThree}}</font><div class="add" @click="addThree">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I4.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[3]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice4}}</font></font>
						<div class="count">
							<div :style="objstyleFour" class="reduce" @click="reduceFour">-</div><font style="float: left;margin-left: 10px;">{{countFour}}</font><div class="add" @click="addFour">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-h">精选热菜</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I5.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[4]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice5}}</font><s>￥50</s></font>
						<div class="count">
							<div :style="objstyleFive" class="reduce" @click="reduceFive">-</div><font style="float: left;margin-left: 10px;">{{countFive}}</font><div class="add" @click="addFive">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I6.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[5]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice6}}</font><s>￥30</s></font>
						<div class="count">
							<div :style="objstyleSix" class="reduce" @click="reduceSix">-</div><font style="float: left;margin-left: 10px;">{{countSix}}</font><div class="add" @click="addSix">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I7.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[6]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice7}}</font><s>￥36</s></font>
						<div class="count">
							<div :style="objstyleSeven" class="reduce" @click="reduceSeven">-</div><font style="float: left;margin-left: 10px;">{{countSeven}}</font><div class="add" @click="addSeven">+</div>
						</div>
						</div>
				</div>
				<div class="goodsInfo-h">饭类</div>
				<div class="goodsInfo-content border">
					<div class="goodsInfo-img"><img src="../../../resource/img/goodsInfo-I8.jpg" /></div>
					<div class="goodsInfo-products">
						<font class="foodName">{{goodsName[7]}}</font><br />
						<font class="foodDescription">月售1132份<font>好评率100%</font></font><br />
						<font class="foodPrice">￥<font>{{navPrice8}}</font></font>
						<div class="count">
							<div :style="objstyleEight" class="reduce" @click="reduceEight">-</div><font style="float: left;margin-left: 10px;">{{countEight}}</font><div class="add" @click="addEight">+</div>
						</div>
						</div>
				</div>
			</div>
		</div>
		</div>
		</div>
		<div class="cart">
			<div class="cir">
				<div class="cir-logo"><img src="../../../resource/img/cart.jpg" /><div class="cartNumer">{{cartNumber}}</div></div></div>
			<div class="cartPrice">
				<div class="cartPrice-price">￥{{price}}</div>
				<div class="cost">另需配送费￥4元</div>
				<div class="check" :style="pay">{{check}}</div>
			</div>
		</div>
		<div id="cartInfo">
			<div class="cartInfoList">
				<div class="List" :style="Null">
					<div v-show="show" class="listHeader">
						<div class="shopName">已选商品</div>
						<div class="clear"><div class="clearDiv" @click="clearAll"><img src="../../../resource/img/clear.jpg" /> 清空</div></div>
						</div>
					<div class="listContentMax">
						<div class="listContent">
							<div style="color:rgb(167,170,175)">{{no}}</div><div>{{no1}}{{countOne}}</div><div>{{no2}}{{countTwo}}</div><div>{{no3}}{{countThree}}</div><div>{{no4}}{{countFour}}</div><div>{{no5}}{{countFive}}</div><div>{{no6}}{{countSix}}</div><div>{{no7}}{{countSeven}}</div><div>{{no8}}{{countEight}}</div></div>
						</div>
					</div>
					</div>
			<div class="back"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				Nav:{
					backgroundColor:'white',
					lineHeight:'100%',
					paddingTop:'14px',
					height:'46px',
					textAlign:'left',
					paddingLeft:'10%',
					width:'90%'
				},
				Null:{
					color:'rgb(167,170,175)',
					textAlign:'center',
					lineHeight:'20px'
				},
				show:0,
				no:'',
				no1:'',
				no2:'',
				no3:'',
				no4:'',
				no5:'',
				no6:'',
				no7:'',
				no8:'',
				goodsName:['皮蛋瘦肉粥配包子套餐','莲子核桃黑米粥','雪梨银耳百合粥','南瓜粥','糖醋排骨','青椒炒板鸭','小炒鱼','米饭'],
				countOne:"",
				countTwo:"",
				countThree:"",
				countFour:"",
				countFive:"",
				countSix:"",
				countSeven:"",
				countEight:"",
				objstyleOne:{
					display:'block'
				},
				objstyleTwo:{
					display:'block'
				},
				objstyleThree:{
					display:'block'
				},
				objstyleFour:{
					display:'block'
				},
				objstyleFive:{
					display:'block'
				},
				objstyleSix:{
					display:'block'
				},
				objstyleSeven:{
					display:'block'
				},
				objstyleEight:{
					display:'block'
				},
				pay:{
					backgroundColor:''
				},
				navPrice1:24,
				navPrice2:10,
				navPrice3:24,
				navPrice4:24,
				navPrice5:44,
				navPrice6:27,
				navPrice7:32,
				navPrice8:1,
				price:0,
				check:'￥20起送',
				cartNumber:0
			}
		},
		mounted(){
			this.reduce_one();
			this.reduce_two();
			this.reduce_three();
			this.reduce_four();
			this.reduce_five();
			this.reduce_six();
			this.reduce_seven();
			this.reduce_eight();
			this.auto();
		},
		methods:{
			auto(){
				if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
					this.no="您还未购入商品";
					this.show=0;
				}
			},
			reduce_one(){
				if(this.countOne==""){
					this.$data.objstyleOne.display="none"
				}
			},
			reduceOne(){
				if(this.countOne==1){
					this.no1='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleOne.display="none";
					this.countOne="";
					this.price-=this.navPrice1;
					this.cartNumber--;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countOne--;
					this.price-=this.navPrice1;
					this.cartNumber--;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addOne(){
				this.show=1;
					this.no='';
					this.no1=this.goodsName[0]+' '+'x'+' ';
					this.countOne++;
					if(this.countOne>0){
						this.$data.objstyleOne.display="block";
						this.price+=this.navPrice1;
						this.cartNumber++;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_two(){
				if(this.countTwo==""){
					this.$data.objstyleTwo.display="none"
				}
			},
			reduceTwo(){
				if(this.countTwo==1){
					this.no2='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.cartNumber--;
					this.$data.objstyleTwo.display="none";
					this.countTwo="";
					this.price-=this.navPrice2;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.cartNumber--;
					this.countTwo--;
					this.price-=this.navPrice2;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addTwo(){
				this.show=1;
				this.no='';
				this.no2=this.goodsName[1]+' '+'x'+' ';
				this.cartNumber++;
					this.countTwo++;
					if(this.countTwo>0){
						this.$data.objstyleTwo.display="block";
						this.price+=this.navPrice2;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_three(){
				if(this.countThree==""){
					this.$data.objstyleThree.display="none";
				}
			},
			reduceThree(){
				this.cartNumber--;
				if(this.countThree==1){
					this.no3='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleThree.display="none";
					this.countThree="";
					this.price-=this.navPrice3;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countThree--;
					this.price-=this.navPrice3;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addThree(){
				this.show=1;
				this.no='';
				this.no3=this.goodsName[2]+' '+'x'+' ';
				this.cartNumber++;
					this.countThree++;
					if(this.countThree>0){
						this.$data.objstyleThree.display="block"
						this.price+=this.navPrice3;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_four(){
				if(this.countFour==""){
					this.$data.objstyleFour.display="none"
				}
			},
			reduceFour(){
				this.cartNumber--;
				if(this.countFour==1){
					this.no4='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleFour.display="none";
					this.countFour="";
					this.price-=this.navPrice4;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countFour--;
					this.price-=this.navPrice4;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addFour(){
				this.show=1;
				this.no='';
				this.no4=this.goodsName[3]+' '+'x'+' ';
				this.cartNumber++;
					this.countFour++;
					if(this.countFour>0){
						this.$data.objstyleFour.display="block";
						this.price+=this.navPrice4;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_five(){
				if(this.countFive==""){
					this.$data.objstyleFive.display="none"
				}
			},
			reduceFive(){
				this.cartNumber--;
				if(this.countFive==1){
					this.no5='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleFive.display="none";
					this.countFive="";
					this.price-=this.navPrice5;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countFive--;
					this.price-=this.navPrice5;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addFive(){
				this.show=1;
				this.no='';
				this.no5=this.goodsName[4]+' '+'x'+' ';
				this.cartNumber++;
					this.countFive++;
					if(this.countFive>0){
						this.$data.objstyleFive.display="block";
						this.price+=this.navPrice5;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_six(){
				if(this.countSix==""){
					this.$data.objstyleSix.display="none"
				}
			},
			reduceSix(){
				this.cartNumber--;
				if(this.countSix==1){
					this.no6='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleSix.display="none";
					this.countSix="";
					this.price-=this.navPrice6;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countSix--;
					this.price-=this.navPrice6;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addSix(){
				this.show=1;
				this.no='';
				this.no6=this.goodsName[5]+' '+'x'+' ';
				this.cartNumber++;
					this.countSix++;
					if(this.countSix>0){
						this.$data.objstyleSix.display="block";
						this.price+=this.navPrice6;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_seven(){
				if(this.countSeven==""){
					this.$data.objstyleSeven.display="none"
				}
			},
			reduceSeven(){
				this.cartNumber--;
				if(this.countSeven==1){
					this.no7='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleSeven.display="none";
					this.countSeven="";
					this.price-=this.navPrice7;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countSeven--;
					this.price-=this.navPrice7;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addSeven(){
				this.show=1;
				this.no='';
				this.no7=this.goodsName[6]+' '+'x'+' ';
				this.cartNumber++;
					this.countSeven++;
					if(this.countSeven>0){
						this.$data.objstyleSeven.display="block";
						this.price+=this.navPrice7;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			reduce_eight(){
				if(this.countEight==""){
					this.$data.objstyleEight.display="none"
				}
			},
			reduceEight(){
				this.cartNumber--;
				if(this.countEight==1){
					this.no8='';
					if(this.no1==''&&this.no2==''&&this.no3==''&&this.no4==''&&this.no5==''&&this.no6==''&&this.no7==''&&this.no8==''){
						this.no="您还未购入商品"
					}
					this.$data.objstyleEight.display="none";
					this.countEight="";
					this.price-=this.navPrice8;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
				else{
					this.countEight--;
					this.price-=this.navPrice8;
					if(this.price<20){
						this.check="￥20起算";
						this.$data.pay.backgroundColor="";
						this.$data.pay.color="rgb(148,150,152)";
					}
				}
			},
			addEight(){
				this.show=1;
				this.no='';
				this.no8=this.goodsName[7]+' '+'x'+' ';
				this.cartNumber++;
					this.countEight++;
					if(this.countEight>0){
						this.$data.objstyleEight.display="block";
						this.price+=this.navPrice8;
						if(this.price>=20){
							this.check="去结算";
							this.$data.pay.backgroundColor="rgb(0,168,255)";
							this.$data.pay.color="white";
						}
					}
			},
			clearAll(){
				this.show=0;
				this.no='您还未购入商品';
				this.no1='';
				this.$data.objstyleOne.display="none";
				this.countOne="";
				this.no2='';
				this.$data.objstyleTwo.display="none";
				this.countTwo="";
				this.no3='';
				this.$data.objstyleThree.display="none";
				this.countThree="";
				this.no4='';
				this.$data.objstyleFour.display="none";
				this.countFour="";
				this.no5='';
				this.$data.objstyleFive.display="none";
				this.countFive="";
				this.no6='';
				this.$data.objstyleSix.display="none";
				this.countSix="";
				this.no7='';
				this.$data.objstyleSeven.display="none";
				this.countSeven="";
				this.no8='';
				this.$data.objstyleEight.display="none";
				this.countEight="";
				this.price=0;
				this.cartNumber=0;
				this.check='￥20起送';
				this.$data.pay.backgroundColor="";
				this.$data.pay.color="rgb(148,150,152)";
			},
		}
	}
</script>

<style scoped="scoped">
	.goods{
		width: 100%;
		height: 505px;
		float: left;
		position: relative;
		overflow: hidden;
	}
	.goodsName{
		float: left;
		width: 25%;
		height: 450px;
		background-color: rgb(243,245,247);
	}
	.nav{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: rgb(105,108,112);
		position: relative;
	}
	.nav:hover{
		cursor: pointer;
	}
	.nav:before{
		content: '';
		position: absolute;
		left: 10%;
		top: auto;
		bottom: 0;
		right: auto;
		height: 1px;
		width: 80%;
		background-color: rgb(219,222,225);
	}
	.nav img{
		width: 18%;
		position: relative;
		top: 3px;
	}
	.goodsInfo{
		float: left;
		width: 105%;
		height: 450px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.goodsInfo-I{
		width: 100%;
		height: 130px;
		background-color: white;
	}
	.goodsInfo-h{
		background-color: rgb(244,245,247);
		width: 100%;
		height: 30px;
		line-height: 30px;
		border-left: 2px solid rgb(217,200,225);
		text-indent: 15px;
		color: rgb(167,170,175);
	}
	.goodsInfo-content{
		width: 90%;
		height: 80px;
		margin: 20px 5% 0;
	}
	.border{
		border-bottom: 1px solid rgb(220,221,223);
	}
	.goodsInfo-img{
		width: 25%;
		height: 60px;
		float: left;
	}
	.goodsInfo-img img{
		width: 100%;
		height: 100%;
	}
	.goodsInfo-products{
		width: 70%;
		height: 80px;
		float: left;
		margin-left: 5%;
	}
	.foodName{
		font-weight: bold;
		font-size: 14px;
	}
	.foodDescription{
		font-size: 10px;
		color: rgb(195,199,202);
	}
	.foodDescription font{
		margin-left: 10px;
	}
	.foodPrice{
		color: red;
		font-size: 10px;
	}
	.foodPrice font{
		font-size: 14px;
		font-weight: bold;
	}
	.foodPrice s{
		color: rgb(184,188,191);
		margin-left: 10px;
	}
	.count{
		width: 70px;
		height: 20px;
		line-height: 20px;
		position: relative;
		top: -20px;
		left: 60%;
	}
	.reduce{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		border:2px solid rgb(0,159,219);
		float: left;
		color: rgb(0,159,219);
		line-height: 8px;
		font-size: 30px;
		text-align: center;
	}
	.add{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		border:2px solid rgb(0,159,219);
		background-color: rgb(0,159,219);
		float: right;
		color: white;
		line-height: 13px;
		font-size: 20px;
		text-align: center;
	}
	.reduce,.add:hover{
		cursor: pointer;
	}
	.mainChange{
		width: 100%;
		height: 450px;
		opacity: 0.5;
		filter: blur(10px);
		position: relative;
		z-index: 5;
	}
	.cart{
		width: 100%;
		height: 55px;
		background-color: rgb(20,29,39);
		clear: both;
		z-index: 10;
		position: relative;
	}
	.cir{
		width: 55px;
		height: 55px;
		border-radius: 50%;
		position: relative;
		top:-20px;
		left: 5%;
		background-color: rgb(20,29,39);
		float: left;
	}
	.cir-logo{
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background-color: rgb(43,52,60);
		position: relative;
		top: 5px;
		left: 5px;
	}
	.cir-logo img{
		width: 60%;
		height: 60%;
		position: relative;
		top: 10px;
		left: 8px;
	}
	.cartNumer{
		font-size: 13px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: red;
		border: 2px solid white;
		text-align: center;
		line-height: 15px;
		color: white;
		position: relative;
		top: -40px;
		left: 30px;
	}
	.cartPrice{
		float: right;
		width: 75%;
		height: 55px;
		line-height: 55px;
		color: rgb(148,150,152);
	}
	.cartPrice-price{
		width: 20%;
		height: 100%;
		float: left;
		font-weight: bold;
		font-size: 20px;
	}
	.cost{
		width: 40%;
		height: 100%;
		float: left;
		font-size: 13px;
	}
	.check{
		width: 40%;
		height: 100%;
		float: left;
		text-align: center;
		font-weight: bold;
	}
	#cartInfo{
		width: 100%;
		height: 200px;
		z-index: 5;
		position: relative;
	}
	.cartInfoList{
		width: 100%;
		height: 145px;
		background-color: white;
		float: left;
		border: 1px solid rgb(219,222,225);
	}
	.List{
		width: 90%;
		height: 135px;
		margin: 5px 5%;
	}
	.listHeader{
		width: 100%;
		height: 30px;
		line-height: 30px;
		float: left;
	}
	.shopName{
		width: 50%;
		height: 30px;
		float: left;
		text-align: left;
		color: black;
		font-weight: bold;
	}
	.clear{
		width: 50%;
		height: 30px;
		float: left;
	}
	.clearDiv{
		width: 40%;
		height: 30px;
		margin-left: 40%;
		cursor: pointer;
	}
	.clearDiv img{
		width: 25%;
		position: relative;
		top: 3px;
	}
	.listContentMax{
		width: 100%;
		height: 80px;
		overflow: hidden;
		float: left;
	}
	.listContent{
		width: 105%;
		height: 80px;
		float: left;
		overflow: hidden;
		overflow-y: scroll;
		color: black;
	}
	.back{
		float: left;
		width: 100%;
		height: 55px;
	}
	.disable{
		pointer-events: none;
	}
</style>
