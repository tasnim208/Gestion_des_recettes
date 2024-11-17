function filterRecipes(searchValue) {
    // Ajoute l'animation à la barre de recherche quand on clique sur le bouton
    const searchContainer = document.querySelector('.search-container');
    
    if (!searchContainer.classList.contains('active')) {
        searchContainer.classList.add('active');
    } else {
        // Ajoutez ici votre logique de recherche
        console.log("Recherche de la recette:", searchValue);
    }
}

