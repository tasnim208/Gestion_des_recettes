function verif() {
    let nom = document.getElementById('recipe-name').value.trim();
    let ingredients = document.getElementById('ingredients').value.trim();
    let instructions = document.getElementById('instructions').value.trim();
    let preparation = document.getElementById('preparation-time').value.trim();
    let image = document.getElementById('recipe-image').files
    let nomMessage = document.getElementById('nomMessage');
    let ingredientsMessage = document.getElementById('ingredientsMessage');
    let instructionsMessage = document.getElementById('instructionsMessage');
    let préparationMessage = document.getElementById('préparationMessage');
    let imageMessage = document.getElementById('imageMessage');


    if (nom.length <= 0) {
        nomMessage.textContent = "saisir le nom est obligatoire";
        nomMessage.style.color = 'red';
        return false;
    } else {
        nomMessage.textContent = ' ';
    }

    if (ingredients.length <= 0) {
        ingredientsMessage.textContent = "saisir les ingredients est obligatoire";
        ingredientsMessage.style.color = 'red';
        return false;
    } else {
        ingredientsMessage.textContent = ' ';
    }
    if (instructions.length <= 0) {
        instructionsMessage.textContent = "saisir les instructions est obligatoire";
        instructionsMessage.style.color = 'red';
        return false;
    } else {
        instructionsMessage.textContent = ' ';
    }
    if (preparation == "" ) {
        préparationMessage.textContent = "saisir le temp de preparation est obligatoire";
        préparationMessage.style.color = 'red';
        return false;
    } else {
        préparationMessage.textContent = ' ';
    }
    if (image.length === 0) { 
        imageMessage.textContent = "choisir photo est obligatoire";
        imageMessage.style.color = 'red';
        return false;
    } else {
        imageMessage.textContent = ' ';
    }
   
}


