var imgFullBox = document.getElementById("imgFullBox");
var imgFull = document.getElementById("imgFull");

function cerrarImgFull(){
    imgFullBox.style.display = "none";
}


function abrirImgFull(pic){
    imgFullBox.style.display = "flex";
    imgFull.src = pic;
}
