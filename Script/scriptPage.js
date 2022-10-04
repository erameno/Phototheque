let img = [...document.getElementsByClassName("imgC")];
var divImgFull = document.getElementById("divImgFull");
var imgFull = document.getElementById("imgFull");

var btnR = document.getElementById("btnReturn");
var btnDownload = document.getElementById("btnDel");
var ADel = document.getElementById("ADel");

for (let i = 0; i < img.length; i++) {
    console.log(img[i]);
};

function Full(e){
    let imgC = e.target.closest(".img");
    console.log(imgC.src);

    imgC.classList.remove("imgHide");
    divImgFull.classList.replace("divImgHide", "divImgShow");

    imgFull.src = imgC.src;
    ADel.href = imgC.src;

}

function Return(){
    divImgFull.classList.replace("divImgShow", "divImgHide");

}


img.forEach((e => e.addEventListener("click", Full)));
btnR.addEventListener("click", Return);

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        Return();
   }
});