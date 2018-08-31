var openNav=document.getElementById("open-nav");
var navigation=document.getElementById("navigation");

var navOpen=false;
var site=0;

openNav.onclick=function(){toggle()}

function toggle(){
	if (navOpen) {
		navigation.style.height="0px";
	}else{
		navigation.style.height="auto";
	}
	navOpen=!navOpen
}