//Récupération des works depuis le serveur web
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

console.log(works);

//Fonction qui génére toute la gallery de la page web:

function generateProjects(){

    for (let i = 0; i < works.length; i++) {
        const project = works[i];
        
        const titleElement = document.createElement("figcaption");
        titleElement.innerText = project.title;
        
        const imageElement = document.createElement("img");
        imageElement.src = project.imageUrl;
        
        const figureElement = document.createElement("figure");
        
        const galleryProjects = document.querySelector(".gallery");
        
        // Ajouter la figure à l'élément parent spécifique
        galleryProjects.appendChild(figureElement);
        
        // Ajouter les éléments enfants à la figure
        figureElement.appendChild(imageElement);
        figureElement.appendChild(titleElement);
    }
};

generateProjects();
