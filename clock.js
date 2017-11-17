function clockUpdate() {
    document.querySelector('.time').innerHTML = new Date().toTimeString().split(" ")[0];
}

clockUpdate();

setInterval(clockUpdate,1000);