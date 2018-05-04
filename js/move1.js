function move(ele,json,cb){
					
					if(move.moving){
						move.stop();
					}
					
					ele.timer={};
					for(var attr in json){
//						ele.timer[attr]=setIntercal(function(){})
						
						(function(myattr){
							ele.timer[myattr]=setInterval(function(){
								console.log(1);
//								console.log(myattr);
								if(myattr=="opacity"){
									var now=parseInt(getstyle(ele,myattr)*100);
								}
								else{
									var now=parseInt(getstyle(ele,myattr));
								}
								var speed=(json[myattr]-now)/6;
								speed=speed>0?Math.ceil(speed):Math.floor(speed);
								if(json[myattr]==now){
									clearInterval(ele.timer[myattr]);
									delete ele.timer[myattr];
//									console.log(Object.keys(ele.timer));
									if(Object.keys(ele.timer).length==0){
//										console.log(2);
										if(cb){
												cb();
											}
										move.moving=false;
									}
								}
								else{
									if(myattr=="opacity"){
										now=now+speed;
										ele.style.opacity=now/100;
									}
									else{
										ele.style[myattr]=now+speed+"px";
									}
								}
							},50)
						})(attr)
					}
					move.stop=function(bool){
						for(var attr in ele.timer){
							clearInterval(ele.timer[attr]);
							delete ele.timer[attr];
						}
						if(bool){
							for(var attr in json){
								if(attr=="opacity"){
									ele.style.opacity=json[attr]/100;
								}
								else{
									ele.style[attr]=json[attr]+"px";
								}
							}
							console.log(2);
						}
						
					}
					
					move.moving=true;
				}
			
			function getstyle(ele,attr){
				if(getComputedStyle){
					return getComputedStyle(ele)[attr];
				}else{
					return ele.currentStyle[attr];
				}
			}