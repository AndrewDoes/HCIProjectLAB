function toggleMenu(){
    var nav = document.getElementById("links");
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        return
    }
    nav.classList.add("active");
}