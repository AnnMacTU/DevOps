const text = document.getElementById("flashing-text");

setInterval(() => {
    text.style.visibility = (text.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);
