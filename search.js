document.querySelector('.search').onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        window.location = "https://duckduckgo.com/?q=" + document.querySelector('.search').value;
        return false;
    }
}