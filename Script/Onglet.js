var ongletEspace = document.getElementById("imgEspace");
var ongletStarCitizen = document.getElementById("imgStarCitizen");
var ongletDune = document.getElementById("imgDune");
var ongletMandalorian = document.getElementById("imgMandalorian");

var tabEspace = document.getElementById("nav-Espace");
var tabStarCitizen = document.getElementById("nav-Star_Citizen");
var tabDune = document.getElementById("nav-Dune");
var tabMandalorian = document.getElementById("nav-Mandalorian");

var tabEspaceHaut = document.getElementById("nav-home-tab");
var tabStarCitizenHaut = document.getElementById("nav-profile-tab");
var tabDuneHaut = document.getElementById("nav-contact-tab");
var tabMandalorianHaut = document.getElementById("nav-contact2-tab");




function changementTab(e){
    tabEspaceHaut.classList.remove("active");

    tabStarCitizenHaut.classList.remove("active");

    tabDuneHaut.classList.remove("active");

    tabMandalorianHaut.classList.remove("active");


    tabEspace.classList.remove("show");
    tabEspace.classList.remove("active");

    tabStarCitizen.classList.remove("show");
    tabStarCitizen.classList.remove("active");

    tabDune.classList.remove("show");
    tabDune.classList.remove("active");

    tabMandalorian.classList.remove("show");
    tabMandalorian.classList.remove("active");

    let actif = e.target.closest("button");

    console.log(actif.id);

    for(let i = 0; i < 4; i++)
    {
        switch(actif.id)
        {
            
            case "imgEspace": tabEspace.classList.add("show"); tabEspace.classList.add("active"); tabEspaceHaut.classList.add("active");break;
            case "imgStarCitizen": tabStarCitizen.classList.add("show"); tabStarCitizen.classList.add("active"); tabStarCitizenHaut.classList.add("active");break;
            case "imgDune": tabDune.classList.add("show"); tabDune.classList.add("active"); tabDuneHaut.classList.add("active");break;
            case "imgMandalorian": tabMandalorian.classList.add("show"); tabMandalorian.classList.add("active"); tabMandalorianHaut.classList.add("active");break;
        }   
    }
}


ongletEspace.addEventListener("click", changementTab);
ongletStarCitizen.addEventListener("click", changementTab);
ongletDune.addEventListener("click", changementTab);
ongletMandalorian.addEventListener("click", changementTab);