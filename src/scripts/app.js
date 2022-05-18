"use strict";

/*   --Carte identité--   */

//  -Variable-  //
// Variable tableau pour les cartes d'identité
var tab_identity = [];
//Ciblage du bouton pour tirer la carte d'identité
var btn_identity = document.querySelector(".btn_identity");

//  -Importation du Json-  //
fetch("./assets/json/json.json")
  .then(
    (response) => {
      response.json().then((text) => {
        for (let i=0; i<text.Profil.length; i++){
          tab_identity.push(text.Profil[i]);
          console.log(tab_identity); //à supprimer
        }
      }
    );
  }
);  

//  -Bouton carte identité-  //
btn_identity.addEventListener("click", (e)=>{
  //Random du tableau
  shuffleArray(tab_identity);
  //Prise du dernier élément du tableau
  var identity = tab_identity.pop();
  console.log(identity); //à supprimer
  }
)

//  -Fonction-  //
//Fonction random
function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}   
