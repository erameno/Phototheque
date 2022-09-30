var btnDark = document.getElementById('btnColorDark');
var btnWhite = document.getElementById('btnColorWhite');
var main = document.getElementById("main");
var footer = document.getElementById("footer");
var body = document.getElementById("body");
var header = document.getElementById("header");

var theme = localStorage.getItem('theme');
if(theme == 'Dark'){
    Dark();
}
else{
    White();
}

function Dark(){

    header.className = 'headerDark';
    main.className = 'bodyDark';
    footer.className = 'bodyDark';
    body.className = 'bodyDark';


    localStorage.setItem('theme','Dark');
    
    console.log(theme); 
}

function White(){
    
    header.className = 'headerWhite';
    main.className = 'bodyWhite';
    footer.className = 'bodyWhite';
    body.className = 'bodyWhite';

    localStorage.setItem('theme','White');

    console.log(theme); 
}

btnWhite.addEventListener("click", White);
btnDark.addEventListener("click", Dark);