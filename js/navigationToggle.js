var navigation;
var changeTheme;
var githubImg;
var twitterImg;


function initialize(site){
	navigation=document.getElementById("navigation");
	changeTheme=document.getElementById("change-theme");
	githubImg=document.getElementById("github-network");
	twitterImg=document.getElementById("twitter-network");

	changeTheme.onclick=function(){switchTheme()};
	initializeTheme(site);
}
