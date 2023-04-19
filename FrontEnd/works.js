//récupération du token
 const token = localStorage.getItem("token");


//Récupération des works depuis le serveur web
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

// console.log(works);

//Fonction qui génére  la gallery de la page web:

function generateProjects(works) {
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
}

generateProjects(works);

//Ajout du listener pour changer la couleur d'un bouton du filter lorsque l'on clique dessus
const buttons = document.querySelectorAll('.filter button');

for (const button of buttons) {
  button.addEventListener('click', () => {
      for (const button of buttons) {
       button.classList.remove('active');
     }
    button.classList.add('active');
  });
}




//Ajout du Listener pour afficher tous les projets (Tous)
const bouttonFilterTous = document.querySelector(".btn-tous");
bouttonFilterTous.addEventListener("click", function () {
  const filterTous = works.filter(function (objet) {
    return objet.category.name;
  });
  // effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(filterTous);
});

//Ajout du Listener pour filtrer les projets qui on pour catégorie "Objets"
const bouttonFilterObjet = document.querySelector(".btn-objets");
bouttonFilterObjet.addEventListener("click", function () {
  const filterObjet = works.filter(function (objet) {
    return objet.category.name === "Objets";
  });

  // effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(filterObjet);
});

//Ajout du listener pour filtrer les projets qui on pour catégorie "Appartements"
const bouttonFilterAppartements = document.querySelector(".btn-appartements");
bouttonFilterAppartements.addEventListener("click", function () {
  const filterAppartements = works.filter(function (objet) {
    return objet.category.name === "Appartements";
  });

  // effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(filterAppartements);
});




