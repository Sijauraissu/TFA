"use strict";

/*   --Carte identité--   */

//  -Variables/Constante-  //
// Variable tableau pour les cartes d'identité
var tab_identity = [];
//Ciblage du bouton pour tirer la carte d'identité
var btn_identity = document.querySelector(".btn_identity");
//Ciblage de la classe de la carte d'identité
const selectionClass = document.querySelectorAll(".identity__box--el");

//  -Importation du Json dans un tableau-  //
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
  var identity = tab_identity.length-1;
  console.log(identity); //à supprimer
  //
  var tab_identitycard = [tab_identity[0].name,tab_identity[0].birthday,tab_identity[0].phone,tab_identity[0].zip,tab_identity[0].city,tab_identity[0].email,];
  //Ecriture dans l'Html des données du Json
  for (let i=0; i<selectionClass.length; i++){
    selectionClass[i].innerHTML = tab_identitycard[i];
  }

  }
)

//  -Fonction-  //
//Fonction random
function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}   
