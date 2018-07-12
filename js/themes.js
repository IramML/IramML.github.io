var changeTheme=document.getElementById("change-theme");
var githubImg=document.getElementById("github-network");

switch(site){
	case 0:
		var description=document.getElementById("description");
		break;
	case 1: 
		var project = document.getElementsByClassName("project");
		var linksProject=document.getElementsByClassName("project-link");
		break;
}
var lightTheme=true;

changeTheme.onclick=function(){theme()}

function theme() {
	if (lightTheme) changeDarkTheme();
	else changeLightTheme();
	lightTheme=!lightTheme;
}

function changeLightTheme() {
	changeTheme.innerHTML="Light";
	document.body.style.backgroundColor="white";

	switch(site){
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
	githubImg.src="img/GitHub-Mark-64px.png"
}

function changeDarkTheme() {
	changeTheme.innerHTML="Dark";
	document.body.style.backgroundColor="Black";
	switch(site){
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
	githubImg.src="img/GitHub-Mark-64px-white.png"
}