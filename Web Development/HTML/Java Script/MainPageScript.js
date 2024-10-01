var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
    } else {
    document.getElementById("navBar").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;

}
