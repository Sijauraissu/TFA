"use strict";

/*   --Carte identité--   */

let localLinks = JSON.parse(localStorage.getItem('Avis'));
console.log(localLinks);

//  -Variables/Constante-  //
// Variable tableau pour les cartes d'identité
var tab_identity = [];

var storage = [];
//Ciblage du bouton pour tirer la carte d'identité
var btn_identity = document.querySelector(".btn_identity");
//Ciblage du bouton pour valider son avis
var btn_submit = document.querySelector(".btn_submit");
//Ciblage de la classe de la carte d'identité
const selectionClass = document.querySelectorAll(".identity__box--el");
//Ciblage des classes input
const inputname = document.querySelector(".inputname");
const inputsurname = document.querySelector(".inputsurname");
const inputage = document.querySelector(".inputage");
const inputnotice = document.querySelector(".inputnotice");

//  -Importation du Json dans un tableau-  //
fetch("./assets/json/json.json")
  .then(
    (response) => {
      response.json().then((text) => {
        for (let i=0; i<text.Profil.length; i++){
          tab_identity.push(text.Profil[i]);

        }
        //
        if(localLinks != null){
          tab_identity.push(localLinks[0]);
        }
      }
    );
  }
);  

if(btn_identity){
  //  -Bouton carte identité-  //
  btn_identity.addEventListener("click", (e)=>{
    //Random du tableau
    shuffleArray(tab_identity);
    //Prise du dernier élément du tableau
    var identity = tab_identity.length-1;

    //Insertion des données de la carte d'identité dans le tableau 
    var tab_identitycard = [tab_identity[0].name,tab_identity[0].surname,tab_identity[0].notice,];
    //Ecriture dans l'Html des données du Json
    for (let i=0; i<selectionClass.length; i++){
      selectionClass[i].innerHTML = tab_identitycard[i];
    }
  });
}

if(btn_submit){
    //  -Bouton ajout avis-  //
  btn_submit.addEventListener("submit", (e)=>{
    //Ici our éviter de recharger la page
    e.preventDefault();
    //Ajouts de l'avis de l'utilisateur dans le tableau identity
    tab_identity.push({
      name: inputname.value, surname: inputsurname.value, notice: inputnotice.value
    });



    storage.push({
      name: inputname.value, surname: inputsurname.value, notice: inputnotice.value
    });

    localStorage.setItem("Avis",JSON.stringify(storage));
    //clean du formulaire
    clearForm();

    close();
});
}


//  -Fonction-  //
//Fonction random
function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}   

//Fonction de clear du formulaire
function clearForm() {
  inputname.value = "";
  inputsurname.value = "";
  inputnotice.value = "";
}

//Copyright
let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector(".copyright");
yr.innerText = year;





var critics = document.querySelector(".critics");
var closing = document.querySelector(".close");

if(critics){
  critics.addEventListener("click", close);
  closing.addEventListener("click", close);
}

function close(){
  document.querySelector(".popup").classList.toggle("removeblock");
}


//Gsap

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.from(".anim1",{ 
  x:600,
  opacity:0,
  scrollTrigger: {
      trigger:".anim1",
      start: "0 75%",
      end: "15% 30%",
      toggleActions: "play pause reverse reset",
      scrub: true,

  }
});

gsap.from(".anim2",{ 
  x:-600,
  opacity:0,
  scrollTrigger: {
      trigger:".anim2",
      start: "0 75%",
      end: "15% 30%",
      toggleActions: "play pause reverse reset",
      scrub: true,
  }
});
