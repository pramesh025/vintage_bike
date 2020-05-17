let flag = true;

function bgchange() {
    let el = document.getElementById("nav_button");
    el.style.backgroundcolor = flag ? "rgba(247, 247, 247,0.75)" : "";
    flag = !flag;
}