navbarVisible = false;

showNavbar = function(){
    navbarVisible = !navbarVisible;
    document.getElementById("navbar").style.display = navbarVisible ? "flex" : "none";
}