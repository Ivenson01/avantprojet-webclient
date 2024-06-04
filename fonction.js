function changerCouleur(){
    var couleur = prompt('Veuillez entrer la couleur desirée');
    document.getElementById("content").style.color = couleur;
}
function ChangerTaille() {
    // Demander à l'utilisateur la nouvelle taille de police
    const nouvelleTaille = prompt("Saisissez la nouvelle taille de police (px) :");
    // Vérifier si l'utilisateur a annulé la saisie
    if (nouvelleTaille === null) {
      return;
    }
    // Convertir la saisie en nombre
    const nouvelleTailleNumerique = parseInt(nouvelleTaille);
    // Vérifier si la saisie est un nombre valide
    if (isNaN(nouvelleTailleNumerique)) {
      alert("La valeur saisie n'est pas un nombre valide.");
      return;
    }
    // Récupérer l'élément de texte (ici, on suppose l'identifiant "monTexte")
    const element = document.getElementById("content");
    // Vérifier si l'élément existe
    if (element) {
      // Définir la nouvelle taille de police
      element.style.fontSize = nouvelleTailleNumerique + 'px';
    } else {
      console.error(`Élément avec l'identifiant "monTexte" introuvable.`);
    }
  }
 // Fonction pour changer le style
function changeStyle1(){
  var font = prompt("Entrer le font :");
   document.getElementById("content").style.fontFamily = font;

  }
  function changeStyle() {
    // Demander à l'utilisateur le nom de la police avec une sécurité de base (envisager la validation des entrées pour des scénarios plus complexes):
    const nomPolice = prompt("Entrez le nom de la police (Times New Roman, Calibri): ");
    const elementContenu = document.getElementById("content");
    // Vérifier si l'élément existe avant d'appliquer le style :
    if (elementContenu) {
      // Informer l'utilisateur si la police est déjà appliquée (vérification de base):
      if (elementContenu.style.fontFamily.indexOf(nomPolice) !== -1) {
        alert("La police '" + nomPolice + "' est déjà appliquée.");
      } else {
        // Appliquer le nom de la police filtrée au style de l'élément :
        elementContenu.style.fontFamily = nomPolice;
      }
    } else {
      console.error("Élément avec l'ID 'content' introuvable. Le style n'a pas été appliqué.");
    }
  }
  function ajouterTexte() {
    // Demander à l'utilisateur le texte à ajouter:
    const texteSaisi = prompt("Entrez le texte à ajouter:");
  
    // Vérifier si l'utilisateur a annulé ou entré un texte vide:
    if (!texteSaisi || texteSaisi.trim() === "") {
      return; // Ne rien faire si l'utilisateur annule ou entre du texte vide
    }
  
    const paragrapheElement = document.getElementById("content"); // Remplacez par l'ID réel de votre élément de paragraphe
    if (paragrapheElement) {
  
      // Ajouter le texte filtré au paragraphe:
      paragrapheElement.textContent += texteSaisi;
    } else {
      console.error("Élément de paragraphe introuvable. Le texte n'a pas été ajouté.");
    }
  }
  function rechercherMot(){
    
    const mot = prompt("Entrer le mot");
    const dear = document.getElementById("content");
    const text = dear.innerHTML;
    const regex = new RegExp(`(${mot})`, 'gi');
    const nouveau = text.replace(regex, `<span class="highlight">$1</span>`);
    dear.innerHTML = nouveau;

  }