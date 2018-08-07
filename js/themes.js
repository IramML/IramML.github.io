var theme="Light";
var description;
var project;
var linksProjec;
var currentSite;
var navigation;
var changeTheme;
var githubImg;
var twitterImg;

initialize();
function initialize(){
	navigation=document.getElementById("navigation");
	changeTheme=document.getElementById("change-theme");
	githubImg=document.getElementById("github-network");
	twitterImg=document.getElementById("twitter-network");

	changeTheme.onclick=function(){switchTheme()};
	initializeTheme();
}

function initializeTheme(){
	description=document.getElementById("description");
	project = document.getElementsByClassName("project");
	linksProject=document.getElementsByClassName("project-link");
	restoreTheme();
}

function saveTheme(value){
	localStorage.setItem("chosenTheme", value);
}
function restoreTheme(){
	var themeSaved=localStorage.getItem("chosenTheme");
	if (themeSaved!=null){
		if (themeSaved=="Light") changeLightTheme();
		else changeDarkTheme();
		
	}
}

function switchTheme() {
	if (theme=="Light") changeDarkTheme();
	else changeLightTheme(); 
}

function changeLightTheme() {
	changeTheme.innerHTML="Light";
	document.body.style.backgroundColor="white";
	document.body.style.color="black";
	description.style.color="#282828";
	for(var i=0; i<project.length; i++){
		project[i].style.color="black";
	}
	for(var i=0; i<linksProject.length; i++){
		linksProject[i].style.color="#3c3cc8";
	}
	githubImg.src="img/GitHub-black.png"
	twitterImg.src="img/twitter-black.png";
	theme="Light";
	saveTheme(theme);
}

function changeDarkTheme() {
	changeTheme.innerHTML="Dark";
	document.body.style.backgroundColor="Black";
	document.body.style.color="white";
	description.style.color="white";
	for(var i=0; i<project.length; i++){
		project[i].style.color="white";
	}
	for(var i=0; i<linksProject.length; i++){
		linksProject[i].style.color="#96c896";
	}
	githubImg.src="img/GitHub-white.png"
	twitterImg.src="img/twitter-white.png";
	theme="Dark;"
	saveTheme(theme);
}