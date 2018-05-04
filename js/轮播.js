var div2_u0=document.querySelector(".div2 .u0");
			var div2_u0_oimg=div2_u0.querySelectorAll("li");
			div2_u0_oimg=[].slice.call(div2_u0_oimg);
			var next_btn=document.getElementById("next");
			var prev_btn=document.getElementById("prev");
			var index=0;
			var w=div2_u0_oimg[0].offsetWidth;
			var timer=null;
			div2_u0.onmouseover=function(){
				next_btn.style.zIndex=2;
				prev_btn.style.zIndex=2;
				clearInterval(timer)
			}
			div2_u0.onmouseout=function(){
				next_btn.style.zIndex=0;
				prev_btn.style.zIndex=0;
				timer=setInterval(next_btn.onclick,2000);
			}
			next_btn.onclick=function(){
				var show,hidden;
				hidden=index;
				if(index==div2_u0_oimg.length-1){
					index=0;
					show=index;
				}
				else{
					index++;
					show=index;
				}
				div2_u0_oimg[show].style.left="1120px";
				div2_u0_oimg[show].style.zIndex=1;
				move(div2_u0_oimg[show],0,"left");
				
				div2_u0_oimg[hidden].style.left="0px";
				div2_u0_oimg[hidden].style.zIndex=1;
				move(div2_u0_oimg[hidden],-w,"left");
			}
			prev_btn.onclick=function(){
				var show,hidden;
				hidden=index;
				if(index==0){
					index=div2_u0_oimg.length-1;
					show=index;
				}
				else{
					index--;
					show=index;
				}
				div2_u0_oimg[show].style.left=-w+"px";
				div2_u0_oimg[show].style.zIndex=1;
				move(div2_u0_oimg[show],0,"left");
				
				div2_u0_oimg[hidden].style.left="0px";
				div2_u0_oimg[hidden].style.zIndex=1;
				move(div2_u0_oimg[hidden],w,"left");
			}
			timer=setInterval(next_btn.onclick,2000);