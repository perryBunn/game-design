let randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
let body = document.getElementById("body");
body.style.setProperty("--main-bg-color", randomColor, "important")

