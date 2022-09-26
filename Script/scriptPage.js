let img = [...document.getElementsByClassName("img")];
var divInfo = document.getElementById("divInfo");
var btnR = document.getElementById("btnReturn");
var btnDownload = document.getElementById("btnDel");
var ADel = document.getElementById("ADel");

for (let i = 0; i < img.length; i++) {
    console.log(img[i]);
};

function Full(e){
    let imgC = e.target.closest(".img");
    console.log(imgC);

    for (let i = 0; i < img.length; i++) {
        img[i].classList.add("imgHide");
    };

    if(imgC.classList.contains("imgHori"))
    {
        imgC.classList.add("imgHoriFull");
    }
    else
    {
        imgC.classList.add("imgVertiFull");
    }

    imgC.classList.remove("imgHide");
    divInfo.classList.replace("divInfoHide", "divInfoShow");

    ADel.href = imgC.src;

}

function Return(){
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("imgHide");
    };

    for(let i = 0; i < img.length; i++)
    {
        img[i].classList.remove("imgHoriFull");
        img[i].classList.remove("imgVertiFull");
    }

    divInfo.classList.replace("divInfoShow", "divInfoHide");

}

img.forEach((e => e.addEventListener("click", Full)));
btnR.addEventListener("click", Return);
