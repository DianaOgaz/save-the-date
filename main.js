const navMenuMovile = document.getElementsByClassName("menu-list-movile")
const navMenuDesk = document.getElementsByClassName("menu-list")

const isNavDeskActive = navMenuDesk.classList.contains("inactive")
if(!isNavDeskActive){
    navMenuMovile.classList.add("inactive")
}