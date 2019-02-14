btnScroll=document.getElementById('scroll-projects');
projects=document.getElementsByClassName('project');
descriptions=document.getElementsByClassName('description');
implementOnClicks();

function implementOnClicks() {
    btnScroll.onclick = function () {
        document.getElementById('projects-content').scrollIntoView();
    };
    for (var i = 0; i < projects.length; i++) {
        showDescription(i);
    }
}
function showDescription(index){
    projects[index].onclick=function () {
        if(descriptions[index].style.height!=="auto")
            descriptions[index].style.height="auto";
        else
            descriptions[index].style.height="0";
    };
}
