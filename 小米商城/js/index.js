window.onload=function(){
			var a=document.documentElement.clientWidth;
			var b=document.documentElement.clientHeight;
			document.getElementsByClassName('content-box')[0].style.height=b+'px';
			document.getElementsByClassName('content-box')[0].style.width=a+'px';
			var img=document.getElementById("img-logo");
			img.onmouseover=function(){
				img.src="images/fire_hover.png";
				
			}
			img.onmouseout=function(){
					img.src="images/fire.png"
				}

			document.getElementById("search-text").onfocus=function(){
				document.getElementById("keywords_s").style.display="none";
				document.getElementById("keywords_s1").style.display="none";
				document.getElementById("menu").style.display="block";
				this.style.borderColor="rgb(255,69,0)";
				document.getElementById("search-button").style.borderColor="rgb(255,69,0)";
				document.getElementById("search-button").style.borderLeft="none";
			}
			document.getElementById("search-text").onblur=function(){
				document.getElementById("keywords_s").style.display="inline";
				document.getElementById("keywords_s1").style.display="inline";
				document.getElementById("menu").style.display="none";
				this.style.borderColor="rgb(205,201,201)";
				document.getElementById("search-button").style.borderColor="rgb(205,201,201)";
			}

			document.getElementById("sidebar_one").onmouseover=function(){
				document.getElementById("sidebar_banner").onmouseover=function(){
				document.getElementById("sidebar_banner").style.display="block";	
				}
				document.getElementById("sidebar_img_one").src="images/74c4fcb4475af8308e9a670db9c01fdf.png";
				document.getElementById("sidebar_word_one").style.color="rgb(255,103,0)";
				document.getElementById("sidebar_banner").style.display="block";
			}
			document.getElementById("sidebar_one").onmouseout=function(){
				document.getElementById("sidebar_banner").onmouseout=function(){
				document.getElementById("sidebar_banner").style.display="none";	
				}
				document.getElementById("sidebar_img_one").src="images/98a23aae70f25798192693f21c4d4039.png";
				document.getElementById("sidebar_word_one").style.color="rgb(153,153,153)";
				document.getElementById("sidebar_banner").style.display="none";
			}

			document.getElementById("sidebar_two").onmouseover=function(){
				document.getElementById("sidebar_img_two").src="images/41f858550f42eb1770b97faf219ae215.png";
				document.getElementById("sidebar_word_two").style.color="rgb(255,103,0)";
			}
			document.getElementById("sidebar_two").onmouseout=function(){
				document.getElementById("sidebar_img_two").src="images/55cad219421bee03a801775e7309b920.png";
				document.getElementById("sidebar_word_two").style.color="rgb(153,153,153)";
			}

			document.getElementById("sidebar_three").onmouseover=function(){
				document.getElementById("sidebar_img_three").src="images/95fbf0081a06eec7be4d35e277faeca0.png";
				document.getElementById("sidebar_word_three").style.color="rgb(255,103,0)";
			}

			document.getElementById("sidebar_three").onmouseout=function(){
				document.getElementById("sidebar_img_three").src="images/12eb0965ab33dc8e05870911b90f3f13.png";
				document.getElementById("sidebar_word_three").style.color="rgb(153,153,153)";
			}

			document.getElementById("sidebar_four").onmouseover=function(){
				document.getElementById("sidebar_img_four").src="images/5e9f2b1b0da09ac3b3961378284ef2d4.png";
				document.getElementById("sidebar_word_four").style.color="rgb(255,103,0)";
			}
			document.getElementById("sidebar_four").onmouseout=function(){
				document.getElementById("sidebar_img_four").src="images/4f036ae4d45002b2a6fb6756cedebf02.png";
				document.getElementById("sidebar_word_four").style.color="rgb(153,153,153)";
			}

			document.getElementById("sidebar_five").onmouseover=function(){
				document.getElementById("sidebar_img_five").src="images/692a6c3b0a93a24f74a29c0f9d68ec71.png";
				document.getElementById("sidebar_word_five").style.color="rgb(255,103,0)";
			}
			document.getElementById("sidebar_five").onmouseout=function(){
				document.getElementById("sidebar_img_five").src="images/d7db56d1d850113f016c95e289e36efa.png";
				document.getElementById("sidebar_word_five").style.color="rgb(153,153,153)";
			}

			document.getElementById("sidebar_six").onmouseover=function(){
				document.getElementById("sidebar_img_six").src="images/totop_hover.png";
				document.getElementById("sidebar_word_six").style.color="rgb(255,103,0)";
			}
			document.getElementById("sidebar_six").onmouseout=function(){
				document.getElementById("sidebar_img_six").src="images/totop.png";
				document.getElementById("sidebar_word_six").style.color="rgb(153,153,153)";
			}

			document.getElementById("h-right-right").onmouseover=function(){
				document.getElementById("shop_icon").src="images/692a6c3b0a93a24f74a29c0f9d68ec71.png";
				document.getElementById("shop_car_hover").style.display="block";
				document.getElementById("shop_car_hover").style.animation="key 0.5s";
				document.getElementById("shop_car_word").style.animation="a 2.5s";
				this.style.backgroundColor="white";
				this.style.color="rgb(255,103,0)";
			}
			document.getElementById("h-right-right").onmouseout=function(){
				document.getElementById("shop_icon").src="images/d7db56d1d850113f016c95e289e36efa.png";
				document.getElementById("shop_car_hover").style.display="none";
				this.style.backgroundColor="rgb(66,66,66)";
				this.style.color="rgb(205,193,193)";
			}

			document.getElementById("a-one").onmouseover=function(){
				document.getElementById("nav-message-one").style.display="block";
				document.getElementById("nav-message-one").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-one").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-one").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-one").onmouseout=function(){
				document.getElementById("nav-message-one").style.display="none";
			}

			document.getElementById("a-two").onmouseover=function(){
				document.getElementById("nav-message-two").style.display="block";
				document.getElementById("nav-message-two").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-two").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-two").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-two").onmouseout=function(){
				document.getElementById("nav-message-two").style.display="none";
			}

			document.getElementById("a-three").onmouseover=function(){
				document.getElementById("nav-message-three").style.display="block";
				document.getElementById("nav-message-three").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-three").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-three").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-three").onmouseout=function(){
				document.getElementById("nav-message-three").style.display="none";
			}

			document.getElementById("a-four").onmouseover=function(){
				document.getElementById("nav-message-four").style.display="block";
				document.getElementById("nav-message-four").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-four").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-four").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-four").onmouseout=function(){
				document.getElementById("nav-message-four").style.display="none";
			}

			document.getElementById("a-five").onmouseover=function(){
				document.getElementById("nav-message-five").style.display="block";
				document.getElementById("nav-message-five").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-five").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-five").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-five").onmouseout=function(){
				document.getElementById("nav-message-five").style.display="none";
			}

			document.getElementById("a-six").onmouseover=function(){
				document.getElementById("nav-message-six").style.display="block";
				document.getElementById("nav-message-six").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-six").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-six").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-six").onmouseout=function(){
				document.getElementById("nav-message-six").style.display="none";
			}

			document.getElementById("a-seven").onmouseover=function(){
				document.getElementById("nav-message-seven").style.display="block";
				document.getElementById("nav-message-seven").style.border="1px solid rgb(235,235,235)";
			}
			document.getElementById("nav-message-seven").onmouseover=function(){
					this.style.display="block";
				}
				document.getElementById("nav-message-seven").onmouseout=function(){
					this.style.display="none";
				}
			document.getElementById("a-seven").onmouseout=function(){
				document.getElementById("nav-message-seven").style.display="none";
			}

			document.getElementById("li-message-one").onmouseover=function(){
				document.getElementById("main-nav-message-one").style.display="block";				
			}
			
			document.getElementById("main-nav-message-one").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("li-message-one").onmouseout=function(){
				document.getElementById("main-nav-message-one").style.display="none";
			}
			document.getElementById("main-nav-message-one").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-two").onmouseover=function(){
				document.getElementById("main-nav-message-two").style.display="block";
			}
			document.getElementById("li-message-two").onmouseout=function(){
				document.getElementById("main-nav-message-two").style.display="none";
			}
			document.getElementById("main-nav-message-two").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-two").onmouseout=function(){
				this.style.display="none";
			}		

			document.getElementById("li-message-three").onmouseover=function(){
				document.getElementById("main-nav-message-three").style.display="block";
			}
			document.getElementById("li-message-three").onmouseout=function(){
				document.getElementById("main-nav-message-three").style.display="none";
			}
			document.getElementById("main-nav-message-three").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-three").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-four").onmouseover=function(){
				document.getElementById("main-nav-message-four").style.display="block";
			}
			document.getElementById("li-message-four").onmouseout=function(){
				document.getElementById("main-nav-message-four").style.display="none";
			}
			document.getElementById("main-nav-message-four").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-four").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-five").onmouseover=function(){
				document.getElementById("main-nav-message-five").style.display="block";
			}
			document.getElementById("li-message-five").onmouseout=function(){
				document.getElementById("main-nav-message-five").style.display="none";
			}
			document.getElementById("main-nav-message-five").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-five").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-six").onmouseover=function(){
				document.getElementById("main-nav-message-six").style.display="block";
			}
			document.getElementById("li-message-six").onmouseout=function(){
				document.getElementById("main-nav-message-six").style.display="none";
			}
			document.getElementById("main-nav-message-six").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-six").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-seven").onmouseover=function(){
				document.getElementById("main-nav-message-seven").style.display="block";
			}
			document.getElementById("li-message-seven").onmouseout=function(){
				document.getElementById("main-nav-message-seven").style.display="none";
			}
			document.getElementById("main-nav-message-seven").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-seven").onmouseout=function(){
				this.style.display="none";
			}


			document.getElementById("li-message-eight").onmouseover=function(){
				document.getElementById("main-nav-message-eight").style.display="block";
			}
			document.getElementById("li-message-eight").onmouseout=function(){
				document.getElementById("main-nav-message-eight").style.display="none";
			}
			document.getElementById("main-nav-message-eight").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-eight").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-nine").onmouseover=function(){
				document.getElementById("main-nav-message-nine").style.display="block";
			}
			document.getElementById("li-message-nine").onmouseout=function(){
				document.getElementById("main-nav-message-nine").style.display="none";
			}
			document.getElementById("main-nav-message-nine").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-nine").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("li-message-ten").onmouseover=function(){
				document.getElementById("main-nav-message-ten").style.display="block";
			}
			document.getElementById("li-message-ten").onmouseout=function(){
				document.getElementById("main-nav-message-ten").style.display="none";
			}
			document.getElementById("main-nav-message-ten").onmouseover=function(){
				this.style.display="block";
			}
			document.getElementById("main-nav-message-ten").onmouseout=function(){
				this.style.display="none";
			}

			document.getElementById("jiadian-two").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("jiadian-one").style.borderBottom="none";
				document.getElementById("jiadian-one").style.color="rgb(100,100,100)";
				document.getElementById("jiadain-second").style.display="block";
				document.getElementById("jiadian-first").style.display="none";
			}
			document.getElementById("jiadian-one").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("jiadian-two").style.borderBottom="none";
				document.getElementById("jiadian-two").style.color="rgb(100,100,100)";
				document.getElementById("jiadian-first").style.display="block";
				document.getElementById("jiadain-second").style.display="none";
			}

			document.getElementById("zhineng-one").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("zhineng-two").style.borderBottom="none";
				document.getElementById("zhineng-two").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-three").style.borderBottom="none";
				document.getElementById("zhineng-three").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-first").style.display="block";
				document.getElementById("zhineng-second").style.display="none";
				document.getElementById("zhineng-third").style.display="none";
			}

			document.getElementById("zhineng-two").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("zhineng-one").style.borderBottom="none";
				document.getElementById("zhineng-one").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-three").style.borderBottom="none";
				document.getElementById("zhineng-three").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-first").style.display="none";
				document.getElementById("zhineng-second").style.display="block";
				document.getElementById("zhineng-third").style.display="none";
			}
			
			document.getElementById("zhineng-three").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("zhineng-one").style.borderBottom="none";
				document.getElementById("zhineng-one").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-two").style.borderBottom="none";
				document.getElementById("zhineng-two").style.color="rgb(100,100,100)";
				document.getElementById("zhineng-first").style.display="none";
				document.getElementById("zhineng-third").style.display="block";
				document.getElementById("zhineng-second").style.display="none";
			}

			document.getElementById("dapei-two").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("dapei-one").style.borderBottom="none";
				document.getElementById("dapei-one").style.color="rgb(100,100,100)";
				document.getElementById("dapei-second").style.display="block";
				document.getElementById("dapei-first").style.display="none";
			}
			document.getElementById("dapei-one").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("dapei-two").style.borderBottom="none";
				document.getElementById("dapei-two").style.color="rgb(100,100,100)";
				document.getElementById("dapei-first").style.display="block";
				document.getElementById("dapei-second").style.display="none";
			}	

			document.getElementById("zhoubian-two").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("zhoubian-one").style.borderBottom="none";
				document.getElementById("zhoubian-one").style.color="rgb(100,100,100)";
				document.getElementById("zhoubian-second").style.display="block";
				document.getElementById("zhoubian-first").style.display="none";
			}
			document.getElementById("zhoubian-one").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("zhoubian-two").style.borderBottom="none";
				document.getElementById("zhoubian-two").style.color="rgb(100,100,100)";
				document.getElementById("zhoubian-first").style.display="block";
				document.getElementById("zhoubian-second").style.display="none";
			}	

			document.getElementById("peijian-one").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("peijian-two").style.borderBottom="none";
				document.getElementById("peijian-two").style.color="rgb(100,100,100)";
				document.getElementById("peijian-three").style.borderBottom="none";
				document.getElementById("peijian-three").style.color="rgb(100,100,100)";
				document.getElementById("peijian-first").style.display="block";
				document.getElementById("peijian-second").style.display="none";
				document.getElementById("peijian-third").style.display="none";
			}

			document.getElementById("peijian-two").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("peijian-one").style.borderBottom="none";
				document.getElementById("peijian-one").style.color="rgb(100,100,100)";
				document.getElementById("peijian-three").style.borderBottom="none";
				document.getElementById("peijian-three").style.color="rgb(100,100,100)";
				document.getElementById("peijian-first").style.display="none";
				document.getElementById("peijian-second").style.display="block";
				document.getElementById("peijian-third").style.display="none";
			}
			
			document.getElementById("peijian-three").onmouseover=function(){
				this.style.borderBottom="3px solid rgb(255,103,0)";
				this.style.color="rgb(255,103,0)";
				document.getElementById("peijian-one").style.borderBottom="none";
				document.getElementById("peijian-one").style.color="rgb(100,100,100)";
				document.getElementById("peijian-two").style.borderBottom="none";
				document.getElementById("peijian-two").style.color="rgb(100,100,100)";
				document.getElementById("peijian-first").style.display="none";
				document.getElementById("peijian-third").style.display="block";
				document.getElementById("peijian-second").style.display="none";
			}

			document.getElementById("video_pointer1").onmouseover=function(){
				this.src="images/video-1hover.jpg";
			}
			document.getElementById("video_pointer1").onmouseout=function(){
				this.src="images/video-1.gif";
			}
			document.getElementById("video_pointer2").onmouseover=function(){
				this.src="images/video-2hover.jpg";
			}
			document.getElementById("video_pointer2").onmouseout=function(){
				this.src="images/video-2.gif";
			}
			document.getElementById("video_pointer3").onmouseover=function(){
				this.src="images/video-3hover.jpg";
			}
			document.getElementById("video_pointer3").onmouseout=function(){
				this.src="images/video-3.gif";
			}
			document.getElementById("video_pointer4").onmouseover=function(){
				this.src="images/video-4hover.jpg";
			}
			document.getElementById("video_pointer4").onmouseout=function(){
				this.src="images/video-4.jpg";
			}

			var myVideo1=document.getElementById("video1");
			document.getElementById("video_play1").onclick=function(){
				document.getElementById("video_box1").style.display="block";
				myVideo1.play(); 
			}
			document.getElementById("cansel_video1").onclick=function(){
				document.getElementById("video_box1").style.display="none";
				myVideo1.pause();
			}

			var myVideo2=document.getElementById("video2");
			document.getElementById("video_play2").onclick=function(){
				document.getElementById("video_box2").style.display="block";
				myVideo2.play(); 
			}
			document.getElementById("cansel_video2").onclick=function(){
				document.getElementById("video_box2").style.display="none";
				myVideo2.pause();
			}

			var myVideo3=document.getElementById("video3");
			document.getElementById("video_play3").onclick=function(){
				document.getElementById("video_box3").style.display="block";
				myVideo3.play(); 
			}
			document.getElementById("cansel_video3").onclick=function(){
				document.getElementById("video_box3").style.display="none";
				myVideo3.pause();
			}

			var myVideo4=document.getElementById("video4");
			document.getElementById("video_div").onclick=function(){
				document.getElementById("video_box4").style.display="block";
				myVideo4.play(); 
			}
			document.getElementById("cansel_video4").onclick=function(){
				document.getElementById("video_box4").style.display="none";
				myVideo4.pause();
			}
			// var xmlhttp = new XMLHttpRequest();
			// xmlhttp.open("GET", "json.json");
			// xmlhttp.send();
			// xmlhttp.onreadystatechange = function() {
   //  		if (this.readyState == 4 && this.status == 200) {   	
   //    		var myObj = JSON.parse(this.responseText);
   //      //document.getElementById("sidebar_word_one").innerHTML = myObj.qw[1].Key;
   //  			}
			// };
			clock();
			function clock(){
			  var timer=null;
			  var today=new Date(),//当前时间
			    h=today.getHours(),//当前小时
			    m=today.getMinutes(),//当前分钟
			    s=today.getSeconds();//当前秒钟
		    var stopDate=new Date();
			    stopDay=stopDate.getDate();//结束在几号
			    stopMouth=stopDate.getMonth();//结束月份
			    stopYears=stopDate.getFullYear();//结束年份
		    var sn=stopYears+'/'+Number(stopMouth+1)+'/'+stopDay+' 20:00:00';//结束时间
		    console.log(sn)
			  var stopTime=new Date(sn),//结束时间定在stopYears年stopMouth月stopDay号
			    stopH=stopTime.getHours(),//结束小时
			    stopM=stopTime.getMinutes(),//结束分钟
			    stopS=stopTime.getSeconds();//结束秒钟
			  var shenyu=stopTime.getTime()-today.getTime(),//倒计时总毫秒数  getTime()/Number()将当前时间转换为毫秒数
			    shengyuD=parseInt(shenyu/(60*60*24*1000)),//转换为天
			    D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000),//除去天的毫秒数
			    shengyuH=parseInt(D/(60*60*1000)),//除去天的毫秒数转换成小时
			    H=D-shengyuH*60*60*1000,//除去天、小时的毫秒数
			    shengyuM=parseInt(H/(60*1000)),//除去天的毫秒数转换成分钟
			    M=H-shengyuM*60*1000;//除去天、小时、分的毫秒数
			    S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)//除去天、小时、分的毫秒数转化为秒
			    if(shengyuH<10){
			    document.getElementById("timer_Hourse").innerHTML=("0"+shengyuH);
			    }
			    else{
			    document.getElementById("timer_Hourse").innerHTML=(shengyuH);
			    // document.getElementById("timer_Munites").innerHTML=(shengyuM);
			    // document.getElementById("timer_Sceonds").innerHTML=(S);
			}	
			if(shengyuM<10){
			    document.getElementById("timer_Munites").innerHTML=("0"+shengyuM);
			    }
			    else{
			    document.getElementById("timer_Munites").innerHTML=(shengyuM);
			    // document.getElementById("timer_Munites").innerHTML=(shengyuM);
			    // document.getElementById("timer_Sceonds").innerHTML=(S);
			}
			if(S<10){
			    document.getElementById("timer_Sceonds").innerHTML=("0"+S);
			    }
			    else{
			    document.getElementById("timer_Sceonds").innerHTML=(S);
			    // document.getElementById("timer_Munites").innerHTML=(shengyuM);
			    // document.getElementById("timer_Sceonds").innerHTML=(S);
			}
			    // setTimeout("clock()",500);
			    timer=setTimeout(clock,1000);
			    if(S<0){
			        clearInterval(timer);
			        
			    document.getElementById("timer_Hourse").innerHTML=("00");
			    document.getElementById("timer_Munites").innerHTML=("00");
			    document.getElementById("timer_Sceonds").innerHTML=("00");
			    document.getElementById("time_word").innerHTML="开始抢购";
			    }
		}

			// run(); 
			// var interval; 
			// function run(){ 
			// interval = setInterval(chat,"3000"); 
			// } // www.jbxue.com
			// function chat(){
			// 	var arr=new Array(3);
		 //  	arr[1]=$("#div1");
		 //  	arr[2]=$("#div2");
		 //  	arr[3]=$("#div3");
		 //  	for(var j=1;j<4;j++){
		 //  		arr[j].animate({
		 //  			right:"+=100%",
		 //  		})
		 //  		if(j>=4){
		 //  			j=0
		 //  		}
		 //  	}

				
			// }
			$("#btn_left").attr("disabled",true);
			$("#btn_left").css("color","rgba(0,0,0,0.1)");
			var a=0;
			var b=0;
			var arr=new Array(3);
		  	arr[1]=$("#div1");
		  	arr[2]=$("#div2");
		  	arr[3]=$("#div3");  	
		  	$("#btn_left").hover(function(){
		  		$(this).css("color","rgb(255,103,0)");
		  	}).mouseout(function(){
		  		$(this).css("color","rgb(181,181,181)");
		  	});
		  	$("#btn_right").hover(function(){
		  		$(this).css("color","rgb(255,103,0)");
		  	}).mouseout(function(){
		  		$(this).css("color","rgb(181,181,181)");
		  	})
		  	
		  	$("#btn_left").click(function(){
		  	$("#btn_right").attr("disabled",false);	
		  	b++;
		  	a--;
		  	for(var i=1;i<4;i++){
		  		arr[i].animate({
		    	left:'+=100%'
		    });}
		  		
		  		if(b==0){
		  			$(this).attr("disabled",true);
		  			$("#btn_left").css("color","rgba(0,0,0,0.1)");
		  			$("#btn_right").css("color","rgb(181,181,181)");
		  		}
		  		// if(i=4){
		  		// 	$("#button").attr("disabled", true); 
		  		// }
		  });
		  	$("#btn_right").click(function(){
		  	$("#btn_left").attr("disabled",false);
		  	$("#btn_left").css("color","rgb(181,181,181)");	
		  	b--;
		  	for(var i=1;i<4;i++){		
				arr[i].animate({
		    	left:'-=100%'
		    });}
		  		a++;
		  		if(a==2){
		  			$(this).attr("disabled",true);
		  			$("#btn_right").css("color","rgba(0,0,0,0.1)");
		  		}
		  		// if(i=4){
		  		// 	$("#button").attr("disabled", true); 
		  		// }
		  	
		  });
		  $(window).scroll(function (){
    		if ($(window).scrollTop()>1000) {
          $("#sidebar_six").css("display","block");
    	  	}
    		if ($(window).scrollTop()<=1000) {
          $("#sidebar_six").css("display","none");
    	  	}
		  });
		  
}