var theme;
var description;
var project;
var linksProjec;
var currentSite;
function initializeTheme(site){
	currentSite=site;
	switch(currentSite){
		case 0:
			description=document.getElementById("description");
			break;
		case 1: 
			project = document.getElementsByClassName("project");
			linksProject=document.getElementsByClassName("project-link");
			break;
	}
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

	switch(currentSite){
		case 0:
			description.style.color="#282828";
			break;
		case 1:
			for(var i=0; i<project.length; i++){
				project[i].style.color="black";
			}
			for(var i=0; i<linksProject.length; i++){
				linksProject[i].style.color="#3c3cc8";
			}
			break;
	}
	githubImg.src="img/GitHub-black.png"
	twitterImg.src="img/twitter-black.png";
	theme="Light";
	saveTheme(theme);
}

function changeDarkTheme() {
	changeTheme.innerHTML="Dark";
	document.body.style.backgroundColor="Black";
	switch(currentSite){
		case 0:
			description.style.color="white";
			break;
		case 1: 
			for(var i=0; i<project.length; i++){
				project[i].style.color="white";
			}
			for(var i=0; i<linksProject.length; i++){
				linksProject[i].style.color="#96c896";
			}
			break;
	}
	githubImg.src="img/GitHub-white.png"
	twitterImg.src="img/twitter-white.png";
	theme="Dark;"
	saveTheme(theme);
}