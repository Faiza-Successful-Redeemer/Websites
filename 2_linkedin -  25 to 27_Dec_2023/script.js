const profileMenu = document.querySelector("#profile-menu");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}


const sidebarActivity = document.querySelector("#sidebarActivity");
const moreLink = document.querySelector("#show-more-link");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    } else{
        moreLink.innerHTML = "Show more <b>+</b>";

    }
}


