//récupération du token
const token = localStorage.getItem("token");

// ajout de la condition si token existe
if (token) {
  // retrait du filter en mode édition
  document.querySelector(".filter").style.display = "none";

  // Navbar du mod Edition
  const editionModNav = document.createElement("div");
  editionModNav.innerHTML = "";

  //Ajout d'un ID à la div
  editionModNav.id = "navbar-edition";

  const bodyElement = document.querySelector("body");
  const headerElement = document.querySelector("header");

  // placer la div avant le header
  bodyElement.insertBefore(editionModNav, headerElement);

  // Ajout du bouton "publier" dans la navbar du edition mod
  const buttonEditionModNav = document.createElement("button");
  buttonEditionModNav.innerHTML = "publier les changements";

  //ajout de l'id button
  buttonEditionModNav.id = "btn-publier";

  //Ajout du boutton à l'élément parent
  editionModNav.appendChild(buttonEditionModNav);

  //Ajout de l'icone mode édition
  const iconEditionModNav = document.createElement("img");
  iconEditionModNav.src = "./assets/icons/mod-edition-icon-archiwebos.png";

  //placer l'image avant le button
  // bodyElement.insertBefore(iconEditionModNav, buttonEditionModNav);

  //Création du message "modifier" et de l'icone "edit" qui le précéde (INTRODUCTION)
  const iconEditionModIntroduction = document.createElement("img");
  iconEditionModIntroduction.src = "./assets/icons/icon-edit-archiwebos.png";
  const modifierEditionModIntroduction = document.createElement("button");
  modifierEditionModIntroduction.innerText = "modifier";

  //Ajout d'un id à l'icone et au bouton:
  iconEditionModIntroduction.id = "icon-introduction";
  modifierEditionModIntroduction.id = "btn-modifier-introduction";

  //Sélection de l'élément parent
  const figureIntroduction = document.querySelector("#introduction figure");

  //Affichage des éléments dans le parent
  figureIntroduction.appendChild(iconEditionModIntroduction);
  figureIntroduction.appendChild(modifierEditionModIntroduction);

  //Création de l'icone "edit" et du message modifier (PROJET)
  const iconEditionModProjet = document.createElement("img");
  iconEditionModProjet.src = "./assets/icons/icon-edit-archiwebos.png";
  const modifierEditionModProjet = document.createElement("button");
  modifierEditionModProjet.innerText = "modifier";

  //Ajout d'un id à l'icone et du bouton
  iconEditionModProjet.id = "icon-projet";
  modifierEditionModProjet.id = "btn-modifier-projet";

  //Séléction des éléments parents
  const projetElement = document.querySelector("#portfolio");
  const filterElement = document.querySelector(".filter");

  //Affichage de l'icon-projet dans l'element parent (inutile car insetBefore le fait)
  // projetElement.appendChild(iconEditionModProjet);

  //On place l'icon-projet et le message modifier avant le filter
  projetElement.insertBefore(iconEditionModProjet, filterElement);
  projetElement.insertBefore(modifierEditionModProjet, filterElement);

  //Ajout d'un listener pour déclencher une animation au survol du boutton modifier (INTRODUCTION)
  const boutonIntroduction = document.getElementById(
    "btn-modifier-introduction"
  );

  boutonIntroduction.addEventListener("mouseover", () => {
    boutonIntroduction.classList.add("mon-animation");
  });

  boutonIntroduction.addEventListener("animationend", () => {
    boutonIntroduction.classList.remove("mon-animation");
  });

  //Ajout d'un listener pour déclencher une animation au survol du boutton modifier (PROJET)
  const boutonProjet = document.getElementById("btn-modifier-projet");

  boutonProjet.addEventListener("mouseover", () => {
    boutonProjet.classList.add("mon-animation");
  });

  boutonProjet.addEventListener("animationend", () => {
    boutonProjet.classList.remove("mon-animation");
  });

  //Ajout de l'icone à lélément parent
  editionModNav.appendChild(iconEditionModNav);

  //Ajout du boutton à l'élément parent
  editionModNav.appendChild(buttonEditionModNav);

  //sélection du lien login
  const loginLink = document.getElementById("login-link");

  // Création d'un nouveau lien logout
  const logoutLink = document.createElement("a");
  loginLink.href = "#";
  logoutLink.innerText = "logout";

  //remplacement du lien Login par Logout
  loginLink.replaceWith(logoutLink);

  //Création du listener pour le logout
  logoutLink.addEventListener("click", function () {
    //supression du token
    localStorage.removeItem("token");
    //actualisation de la page
    window.location.reload();
  });

  //création de la fenêtre modale pour la partie PROJET
  const modal = document.createElement("aside");
  modal.classList.add("modal");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("role", "dialog");
  modal.setAttribute(
    "aria-label",
    "Fenêtre modale pour la galerie des projets"
  );
  modal.style.display = "none";

  //Ajout du listener pour l'ouverture de la fenetre modale quand on clique sur le bouton btn-modifier projet

  boutonProjet.addEventListener("click", function (event) {
    event.preventDefault();

    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-modal", "true");
  });

  //Séléction des éléments parents
  const galleryElement = document.querySelector(".gallery");

  //On place la balise aside et son contenue juste avant la div gallery
  projetElement.insertBefore(modal, galleryElement);

  //Création de la div qui contidendra l'ensemble des éléments du modal
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container-gallery", "js-modal-stop");
  modal.appendChild(modalContainer);

  //Création du boutton close X de la modal
  const modalButtonClose = document.createElement("button");
  // modalButtonClose.innerText = "x";
  modalButtonClose.classList.add("js-modal-close");
  modalContainer.appendChild(modalButtonClose);

  //Ajout de l'icone X font Awesome au bouton
  const closeButtonIcon = document.createElement("i");
  closeButtonIcon.classList.add("fa", "fa-xmark");
  modalButtonClose.appendChild(closeButtonIcon);

  //Création du titre la modale
  const titleModalGallery = document.createElement("h4");
  titleModalGallery.innerText = "Galerie photo";
  modalContainer.appendChild(titleModalGallery);

  //Création de la div qui contiendra les images des projets
  const modalGallery = document.createElement("div");
  modalGallery.classList.add("js-modal-gallery");
  modalContainer.appendChild(modalGallery);

  // Fonction pour générer la galerie modale
  function generateModalGallery(works) {
    for (let i = 0; i < works.length; i++) {
      const modalProjet = works[i];
      // Création d'une div pour chaque paire d'image et de message "Éditer"
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");

      const imageElementModal = document.createElement("img");
      imageElementModal.src = modalProjet.imageUrl;

      const modalEditerMessage = document.createElement("p");
      modalEditerMessage.classList.add("editer-message");
      modalEditerMessage.innerText = "éditer";

      const modalDeleteIcon = document.createElement("i");
      modalDeleteIcon.classList.add("fa", "fa-trash", "icon-delete-photo");

      const modalMoveIcon = document.createElement("i");
      modalMoveIcon.classList.add(
        "fa",
        "fa-arrows-up-down-left-right",
        "move-icon"
      );

      imageWrapper.appendChild(imageElementModal);
      imageWrapper.appendChild(modalEditerMessage);
      imageWrapper.appendChild(modalDeleteIcon);
      imageWrapper.appendChild(modalMoveIcon);
      modalGallery.appendChild(imageWrapper);

      //on cache l'icône move-edit par défaut
      modalMoveIcon.style.display = "none";

      //Ajout d'un listner au survol de l'image pour faire apparaitre l'icone move
      imageElementModal.addEventListener("mouseover", function () {
        //on affiche l'icone en hover
        modalMoveIcon.style.display = "block";
      });

      //Ajout d'un listener qui masque l'icone quand la souris n'est plus sur l'image sélectionné
      imageElementModal.addEventListener("mouseout", function () {
        modalMoveIcon.style.display = "none";
      });
    }
    //Ajout d'un listener au bouton x pour la fermeture du modale
    modalButtonClose.addEventListener("click", function () {
      modal.style.display = "none";
      modalButtonClose.setAttribute("aria-hidden", "true");
      modal.removeAttribute("arial-modal");
    });

    //Ajout d'un listner pour la fermeture du modal quand on clique en dehors du modale
    document
      .querySelector(".modal")
      .addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          modalButtonClose.setAttribute("aria-hidden", "true");
          modal.removeAttribute("arial-modal");
        }
      });
  }

  // Récupération des works depuis le serveur web
  const reponse = await fetch("http://localhost:5678/api/works");
  const works = await reponse.json();

  // Génération de la galerie modale avec les données des projets récupérées
  generateModalGallery(works);

  //Ajout d'une div pour y placer les bouton add et delete du modal
  const buttonModalContainer = document.createElement("div");
  buttonModalContainer.classList.add("modal-button-container");
  modalContainer.appendChild(buttonModalContainer);

  //Ajout du bouton "Ajouter une photo"
  const addPhotoButton = document.createElement("button");
  addPhotoButton.innerText = "Ajouter une photo";
  addPhotoButton.classList.add("btn-add-photo");
  buttonModalContainer.appendChild(addPhotoButton);

  //Ajout du bouton "supprimer la galerie"
  const addButtonDeleteGallery = document.createElement("button");
  addButtonDeleteGallery.innerText = "Supprimer la galerie";
  addButtonDeleteGallery.classList.add("btn-delete-gallery");
  buttonModalContainer.appendChild(addButtonDeleteGallery);
} else {
  console.log("le token n'existe pas");
}

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
const buttons = document.querySelectorAll(".filter button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    for (const button of buttons) {
      button.classList.remove("active");
    }
    button.classList.add("active");
  });
}

//Ajout du Listener pour afficher tous les projets (Tous)
const bouttonFilterTous = document.querySelector(".btn-tous");
bouttonFilterTous.classList.add("active");
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
