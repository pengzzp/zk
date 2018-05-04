function move(ele,target,attr){
	//ele:元素     target:要到达的终点   attr:要改变的属性
				clearInterval(ele.timer);
				ele.timer=setInterval(function(){
					if(attr=="opacity"){
						//属性为透明度时 定义不同
						var op=parseInt(getstyle(ele,attr)*100);
					}
					else{
						var op = parseInt(getstyle(ele,attr));
					}
				var speed = (target - op) /6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(op == target){
					clearInterval(ele.timer);
				}else{
					op = op + speed;
					if(attr=="opacity"){
						ele.style[attr]=op/100;
					}
					else{
					   ele.style[attr]=op+"px";
					}
					
				}
				},50)
		}
function getstyle(ele,attr){
				if(getComputedStyle){
					return getComputedStyle(ele)[attr];
				}
				else{
					return ele.currentStyle[attr];
				}
			}