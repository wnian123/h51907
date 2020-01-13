var shoot=document.getElementsByClassName("shoot")[0];
var h4s=shoot.getElementsByTagName("h4");
var dress1=shoot.getElementsByClassName("dress1")[0];
var dress2=shoot.getElementsByClassName("dress2")[0];
var subs=shoot.getElementsByClassName("sub");
var dl=shoot.getElementsByTagName("dl")[0];
var spans=dl.getElementsByTagName("span");
var bases=shoot.getElementsByClassName("base");
var pro=shoot.getElementsByClassName("profile");

//------------------------------------一级标题点击事件----------------------------------------
for(var i=0;i<h4s.length;i++){
	h4s[i].onclick=function(){
//-------------------设置导航中一级标题内容
		var b=this.getElementsByTagName("b")[0];
		dress1.innerHTML=b.innerHTML;
//----------------------获取当前二级标题数组				
		var this_sub=this.nextElementSibling;
//---------------------获取当前一级标题图标
		var this_span=this.getElementsByTagName("span")[0];
//--------------------------清除样式
		for(var i=0;i<subs.length;i++){
			subs[i].className="sub";
			h4s[i].className="";
		}
//------------------------当前二级标题数组显示	
			if(this_span.innerHTML=="+"){
				this_sub.className="sub active";				
				for(var i=0;i<spans.length;i++){
					spans[i].innerHTML="+"
				}
				this_span.innerHTML="-";
				this.className="active";
			}else{
				this_sub.className="sub";
				this_span.innerHTML="+";
				this.className="";
			}
			
			
			
//		this_sub.className="sub active";
//------------------------当前一级标题字体设置红色
//		this.className="active";
//---------------------设置选中一级标题“-”图标
//		this_span.innerHTML="-";	
	}
}

//------------------------------------二级标题点击事件----------------------------------------
var t2=shoot.getElementsByClassName("t2")[0];
var h6s=t2.getElementsByTagName("h6")
for(var i=0;i<h6s.length;i++){
	h6s[i].onclick=function(){
		var this_dy=this.getAttribute("dy2");
		var fa1=this.parentNode;
		var fa1_dy=fa1.getAttribute("dy");
		var this_h4=fa1.previousElementSibling;
		var this_base=bases[fa1_dy];
		var pro2=this_base.getElementsByClassName("profile");
		var this_profile=pro2[this_dy];
		for(var i=0;i<h4s.length;i++){
			h4s[i].className=""
		}
		this_h4.className="active";
		for(var i=0;i<h6s.length;i++){
			h6s[i].className="";
			pro[i].className="profile";
		}
		this.className="active";
		dress2.innerHTML=this.innerHTML;
		this_profile.className="profile active";				
	}
}
//--------------------------------------------轮播-----------------------------------------------
var carousel=document.getElementsByClassName("carousel")[0];
var imgs=carousel.getElementsByClassName("imgs")[0];
var boxs=imgs.getElementsByClassName("box")
var btns=carousel.getElementsByTagName("i");

function carousels(boxs,btns){
	this.boxs=boxs;	
	this.btns=btns;
}
var car1=new carousels(boxs,btns);
carousels.prototype.init=function(me){
	this.bind(me);
	this.index();
}
carousels.prototype.bind=function(me){
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].onclick=function(){
			if(this.className=="iconfont icon-changyongicon-"){
				me.dh(-1);
			}else{
				me.dh(1);				
			}
		}
	}
	
}
carousels.prototype.dh=function(x){
	if(x==1){		
		for(var i=0;i<this.boxs.length;i++){					
			var index=parseInt(this.boxs[i].style.left)-290+"px";
			if(index=="-850px"){
				this.boxs[i].style.left="1180px";
				this.boxs[i].style.transition="none";				
			}else{
				this.boxs[i].style.left=index;
				this.boxs[i].style.transition="1s";						
			}							
		}					

	}else{
		
		for(var i=0;i<this.boxs.length;i++){					
			var index=parseInt(this.boxs[i].style.left)+290+"px";
			if(index=="1470px"){
				this.boxs[i].style.left="-560px";
				this.boxs[i].style.transition="none";				
			}else{
				this.boxs[i].style.left=index;
				this.boxs[i].style.transition="1s";						
			}							
		}

	}

}

carousels.prototype.index=function(){
	for(var i=0;i<this.boxs.length;i++){
		var pos=(-560+i*290)+"px"
		this.boxs[i].style.left=pos;
	}
}
window.onload=function(){
	car1.init(car1);
	
}
