var popup = document.getElementById("popup")
var btn = document.getElementById("open-popup")
var closeBtn = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    popup.style.display = "block"
}

closeBtn.onclick = function() {
    popup.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none"
    }
}