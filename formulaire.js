function resetForm()
{
    document.getElementById("Formulaire").rest;
   
}

function validerForm() {
    const form = document.querySelector('form');
    const requiredInputs = form.querySelectorAll('input:required');
    for (const input of requiredInputs) {
      if (!input.value) {
        alert("Veuillez remplir tous les champs d'entrée obligatoires.");
        return false;
      }
    }
    alert("Formulaire validé avec succès!");
    return true;
  }