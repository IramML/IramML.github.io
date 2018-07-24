var openNav;
var navigation;
var changeTheme;
var githubImg;
var twitterImg;

var navOpen=false;


function initialize(site){
	openNav=document.getElementById("open-nav");
	navigation=document.getElementById("navigation");
	changeTheme=document.getElementById("change-theme");
	githubImg=document.getElementById("github-network");
	twitterImg=document.getElementById("twitter-network");

	openNav.onclick=function(){toggle()};
	changeTheme.onclick=function(){switchTheme()};
	initializeTheme(site);
}

function toggle(){
	if (navOpen) {
		navigation.style.height="0px";
	}else{
		navigation.style.height="auto";
	}
	navOpen=!navOpen
}