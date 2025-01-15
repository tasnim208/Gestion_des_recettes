function verif3() {
    let name = document.getElementById('recipe-name').value.trim();
    let ingredients = document.getElementById('ingredients').value.trim();
    let instructions = document.getElementById('instructions').value.trim();
    let preparationTime = document.getElementById('preparation-time').value;
    let image = document.getElementById('recipe-image').files;

    if (name.length <= 0) {
        alert("Saisir le nom est obligatoire");
        return false;
    }

    if (ingredients.length <= 0) {
        alert("Saisir les ingrédients est obligatoire");
        return false;
    }

    if (instructions.length <= 0) {
        alert("Saisir les instructions est obligatoire");
        return false;
    }

    if (preparationTime <= 0) {
        alert("Le temps de préparation doit être supérieur à zéro");
        return false;
    }
    if (image.length === 0) {
        alert("Ajouter une image est obligatoire");
        return false;
    }

    return true;
}
