var shoot=document.getElementsByClassName("shoot")[0];
var dress2=shoot.getElementsByClassName("dress2")[0];
var h4s=shoot.getElementsByTagName("h4");
var dls=shoot.getElementsByTagName("dl")[0];
var spans=dls.getElementsByTagName("span");
var sections=document.getElementsByTagName("section");
for(var i=0;i<h4s.length;i++){
	h4s[i].onclick=function(){		
		var this_b=this.getElementsByTagName("b")[0];
		var this_span=this.getElementsByTagName("span")[0];
		var dy=this.getAttribute("dy");
		dress2.innerHTML=this_b.innerHTML;
		for(var i=0;i<h4s.length;i++){
			h4s[i].className="";
			spans[i].innerHTML="+";
			sections[i].className="";
		}
		this.className="active";
		this_span.innerHTML="-";
		sections[dy].className="active";
	}
}
