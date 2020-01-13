//----------------------------------轮播图------------------------------------------
	var banner=document.getElementsByClassName("banner")[0];
	var banner_imgs=banner.getElementsByTagName("img");
	var banner_btns=banner.getElementsByTagName("button");
	var banner_lis=banner.getElementsByTagName("li");
	var n=0;
	for(var i=0;i<banner_btns.length;i++){
		banner_btns[i].onclick=function(){
			if(this.className=="iconfont icon-jiantouzuo"){
				carousel(-1);
			}else{
				carousel(1);
			}
		}
	}
	for(var i=0;i<banner_lis.length;i++){
		banner_lis[i].onclick=function(){
			n=this.getAttribute("dy");
			carousel(n,1);
		}
	}			
	function carousel(x,y){
		if(y==undefined){
			n+=x;
			if(n==5){
				n=0;
			}
			if(n==-1){
				n=4;
			}
		}else{
			n=parseInt(x);					
		}
		for(var i=0;i<banner_lis.length;i++){
			banner_imgs[i].className="";
			banner_lis[i].className="";
		}
		banner_imgs[n].className="active";
		banner_lis[n].className="active";
	}
	timer=setInterval(function(){
		carousel(1);
	},2000);
	banner.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	};
	banner.onmouseout=function(){
		timer=setInterval(function(){
			carousel(1);
		},2000);
	};