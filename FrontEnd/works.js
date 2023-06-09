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
  //changement du curseur de la souris pour le bouton modifier
  modifierEditionModIntroduction.style.cursor = "pointer";

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
  //changement du curseur de la souris pour le bouton modifier
  modifierEditionModProjet.style.cursor = "pointer";

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

  //modification du curseur de la souris pour le lien logout
  logoutLink.style.cursor = "pointer";

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

    if (modal.style.display != "block") {
      modal.style.display = "block";
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("aria-modal", "true");
    }
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
      const id = works[i].id;
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

      imageWrapper.setAttribute("data-id", id);
      modalDeleteIcon.setAttribute("data-id", id);
      imageWrapper.appendChild(imageElementModal);
      imageWrapper.appendChild(modalEditerMessage);
      imageWrapper.appendChild(modalDeleteIcon);
      imageWrapper.appendChild(modalMoveIcon);
      modalGallery.appendChild(imageWrapper);

      //ajout fonction deletImage
      async function deleteImage(imageId) {
        try {
          const response = await fetch(
            `http://localhost:5678/api/works/${imageId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            alert(`Une erreur est survenue: ${response.statusText}`);
          } else {
            /* await response.json();
            return true; */
            console.log("Élément supprimé avec succès.");
            const imageId = imageWrapper.getAttribute("data-id"); // On récupère l'id
            var imageElement = document.querySelector(`[data-id="${imageId}"]`); // item dans le modal
            var figureElement = document.querySelector(
              `[figure-id="${imageId}"]`
            ); // item dans la galerie

            // Vérifier si l'élément existe
            if (imageElement && figureElement) {
              // Récupérer l'élément parent
              var parentElement = imageElement.parentNode;
              var parentElement2 = figureElement.parentNode;
              // Supprimer l'élément du DOM
              parentElement.removeChild(imageElement);
              parentElement2.removeChild(figureElement);
            } else {
              // L'élément avec le data-id spécifié n'a pas été trouvé
              console.log("L'élément n'existe pas.");
              console.log("data id  = " + imageId);
            }
          }
        } catch (error) {
          console.log("Erreur lors de la suppression de l'image:", error);
        }
      }

      //ajout d'un listener a l'icone trash pour supprimer une image
      modalDeleteIcon.addEventListener("click", async function (event) {
        event.stopPropagation();

        const imageId = imageWrapper.getAttribute("data-id");
        const imageElement = document.querySelector(
          `img[data-id="${imageId}"]`
        );

        const ImageApiDeleteSucces = await deleteImage(imageId);

        if (ImageApiDeleteSucces && imageElement) {
          imageElement.remove();
          imageWrapper.remove();
        }
      });

      // const id = event.target.dataset.id;
      // console.log("tu as clik sur le bouton ");
      // console.log("l'ID de ton bouton est :" + buttonId);
      // console.log("La valeur de data-id est :" + imageId);
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
        event.preventDefault();
        console.log("Modal clicked");
        // Check if the clicked element is not the delete icon
        if (
          event.target === modal &&
          !event.target.classList.contains("icon-delete-photo")
        ) {
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

  //Ajout du listner au bouton "ajouter une photo" pour fermer cette fenetre modale et en ouvrir une autre
  addPhotoButton.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modalButtonClose.setAttribute("aria-hidden", "true");
    modal.removeAttribute("arial-modal");

    if (modal2.style.display != "block") {
      modal2.style.display = "block";
      modal2.setAttribute("aria-hidden", "false");
      modal2.setAttribute("aria-modal", "true");
    }
  });
  //Ajout du bouton "supprimer la galerie"
  const addButtonDeleteGallery = document.createElement("button");
  addButtonDeleteGallery.innerText = "Supprimer la galerie";
  addButtonDeleteGallery.classList.add("btn-delete-gallery");
  buttonModalContainer.appendChild(addButtonDeleteGallery);

  //Création d'une nouvelle fenetre modale pour "ajout dune photo"
  const modal2 = document.createElement("aside");
  modal2.classList.add("modal2");
  modal2.setAttribute("aria-hidden", "true");
  modal2.setAttribute("role", "dialog");
  modal2.setAttribute("aria-label", "Fenêtre modale pour l'ajout de projet");
  modal2.style.display = "none";
  //Séléction des éléments parents
  const galleryElement2 = document.querySelector(".gallery");

  //On place la balise aside et son contenue juste avant la div gallery
  projetElement.insertBefore(modal2, galleryElement2);

  //Création de la div qui contidendra l'ensemble des éléments du modal
  const modalContainerAddProjet = document.createElement("div");
  modalContainerAddProjet.classList.add(
    "modal-container-add-projet",
    "js-modal-add-stop"
  );
  modal2.appendChild(modalContainerAddProjet);

  //Création du boutton précédent <-
  const modal2ButtonBefore = document.createElement("button");
  modal2ButtonBefore.innerText = "";
  modal2ButtonBefore.classList.add("modal-button-before");
  modalContainerAddProjet.appendChild(modal2ButtonBefore);

  // Ajout de l'icone <- font Awesome au bouton
  const beforeButtonIconModal2 = document.createElement("i");
  beforeButtonIconModal2.classList.add(
    "fa",
    "fa-arrow-left",
    "icon-before-modal2"
  );
  modal2ButtonBefore.appendChild(beforeButtonIconModal2);

  //Ajout du listener au bouton <- pour femrer la modal2 et ouvrir la modale1
  modal2ButtonBefore.addEventListener("click", function () {
    //fermeture modal2
    modal2.style.display = "none";
    modal2ButtonClose.setAttribute("aria-hidden", "true");
    modal2.removeAttribute("arial-modal");

    // ouverture modal1
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-modal", "true");
  });

  //Création du boutton close X de la modal
  const modal2ButtonClose = document.createElement("button");
  modal2ButtonClose.innerText = "";
  modal2ButtonClose.classList.add("js-modal2-close");
  modalContainerAddProjet.appendChild(modal2ButtonClose);

  //Ajout de l'icone X font Awesome au bouton
  const closeButtonIconModal2 = document.createElement("i");
  closeButtonIconModal2.classList.add("fa", "fa-xmark", "icon-close-2");
  modal2ButtonClose.appendChild(closeButtonIconModal2);

  // Ajout un listener au bouton X pour fermer la modal2
  modal2ButtonClose.addEventListener("click", function () {
    modal2.style.display = "none";
    modal2ButtonClose.setAttribute("aria-hidden", "true");
    modal2.removeAttribute("arial-modal");
  });

  //Ajout d'un listner pour la fermeture du modal2 quand on clique en dehors du modale
  document.querySelector(".modal2").addEventListener("click", function (event) {
    console.log("Modal clicked");
    if (event.target === modal2) {
      modal2.style.display = "none";
      modal2ButtonClose.setAttribute("aria-hidden", "true");
      modal2.removeAttribute("arial-modal");
    }
  });

  //Création du titre la modale
  const titleModalAddProjet = document.createElement("h4");
  titleModalAddProjet.innerText = "Ajout photo";
  modalContainerAddProjet.appendChild(titleModalAddProjet);

  //Création du formulaire pour la modal2
  const FormModal2 = document.createElement("form");
  FormModal2.id = "form-modal2";
  modalContainerAddProjet.appendChild(FormModal2);

  //Création de la div qui contiendra l'imaga du fichier chargé
  const containerImageModal2 = document.createElement("div");
  containerImageModal2.className = "container-img-modal2";
  FormModal2.appendChild(containerImageModal2);

  //Création de l'icone image dans le formulaire
  const imageIconeModal2 = document.createElement("img");
  imageIconeModal2.id = "icone-image-modal2";
  imageIconeModal2.src = "./assets/icons/icon-img-modal2.png";
  containerImageModal2.appendChild(imageIconeModal2);

  //Création de l'input pou ajouter un fichier image
  const addImageInput = document.createElement("input");
  addImageInput.type = "file";
  addImageInput.id = "image";
  addImageInput.name = "image";
  addImageInput.accept = ".png, .jpg";
  addImageInput.innerText = "ajouter une photo";
  addImageInput.style.display = "none";
  containerImageModal2.appendChild(addImageInput);

  // Création du bouton qui déclenchera l'input
  const addImageButton = document.createElement("button");
  addImageButton.type = "button"; // important pour ne pas soumettre le formulaire
  addImageButton.id = "btn-add-image";
  addImageButton.innerText = "+Ajouter photo";
  containerImageModal2.appendChild(addImageButton);

  // Ajout d'un listeners sur le bouton qui permettra d'enclenché la fonction de l'input addImageInput
  addImageButton.addEventListener("click", function () {
    // déclenche le clic sur l'input
    addImageInput.click();
  });

  //Ajout du texte p qui precisera les types de fichier acceptés
  const typeFileAccepted = document.createElement("p");
  typeFileAccepted.className = "file-accepted";
  typeFileAccepted.innerText = "jpg. png : 4mo max";
  containerImageModal2.appendChild(typeFileAccepted);

  //Création  de la div pour le titre
  const ContainerTitleInputModal2 = document.createElement("div");
  ContainerTitleInputModal2.className = "title-container";
  FormModal2.appendChild(ContainerTitleInputModal2);

  //Création du Label pour l'input titre
  const titleLabelModal2 = document.createElement("label");
  titleLabelModal2.for = "titre";
  titleLabelModal2.innerText = "Titre";
  ContainerTitleInputModal2.appendChild(titleLabelModal2);

  //Création de l'input de type texte Titre
  const titleInputModal2 = document.createElement("input");
  titleInputModal2.type = "text";
  titleInputModal2.id = "titre";
  titleInputModal2.name = "titre";
  ContainerTitleInputModal2.appendChild(titleInputModal2);

  //Création de la div du sélecteur de catégorie
  const ContainerSelectModal2 = document.createElement("div");
  ContainerSelectModal2.className = "container-select";
  FormModal2.appendChild(ContainerSelectModal2);

  //Création du Label Catégorie
  const categoryLabel = document.createElement("label");
  categoryLabel.for = "categorie";
  categoryLabel.innerText = "Catégorie";
  ContainerSelectModal2.appendChild(categoryLabel);

  // Création du selecteur de catégories
  const categorySelect = document.createElement("select");
  categorySelect.id = "categorie";
  categorySelect.name = "categorie";

  const categories = [
    { id: 1, name: "Objets" },
    { id: 2, name: "Appartements" },
    { id: 3, name: "Hotels & Restaurants" },
  ];

  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  }

  ContainerSelectModal2.appendChild(categorySelect);

  //Création du bouton valider
  const submitButtonModal2 = document.createElement("button");
  submitButtonModal2.type = "submit";
  submitButtonModal2.innerText = "Valider";
  submitButtonModal2.id = "btn-submit-modal2";
  FormModal2.appendChild(submitButtonModal2);

  // Ajout d'un écouteur d'événements sur le formulaire pour vérifier son état
  document.getElementById("form-modal2").addEventListener("input", function () {
    // On vérifie si le formulaire est entièrement rempli
    const image = document.getElementById("image").files[0];
    const titre = document.getElementById("titre").value;
    const categorie = document.getElementById("categorie").value;

    if (image && titre && categorie) {
      // la couleur du bouton passe au vert
      submitButtonModal2.style.backgroundColor = "rgb(29,97,84)";

      // Ajout un écouteur d'événement pour le survol du bouton
      submitButtonModal2.addEventListener("mouseenter", function () {
        // Ajout les styles d'effet de survol
        submitButtonModal2.style.backgroundColor = "rgb(14,47,40)";
      });

      // Ajout un écouteur d'événement pour la sortie du survol du bouton
      submitButtonModal2.addEventListener("mouseleave", function () {
        // Supprission les styles d'effet de survol
        submitButtonModal2.style.backgroundColor = "rgb(29,97,84)";
      });
    } else {
      // Supprimez la classe CSS pour le bouton Valider en vert
      submitButtonModal2.style.backgroundColor = "";
    }
  });

  //Ajout d'un listener au boutton valider pour vérifier que le formulaire est totalement remplie
  document
    .getElementById("form-modal2")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const token = localStorage.getItem("token");
      const image = document.getElementById("image").files[0];
      const titre = document.getElementById("titre").value;
      const categorie = document.getElementById("categorie").value;

      if (image && titre && categorie) {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", titre);
        formData.append("category", categorie);

        fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            // work = data; ne peut pas etre stockée

            // Rajout dans la gallerie
            const project = data;
            const id = data.id;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = project.title;

            const imageElement = document.createElement("img");
            imageElement.src = project.imageUrl;

            const figureElement = document.createElement("figure");

            const galleryProjects = document.querySelector(".gallery");

            // Ajouter la figure à l'élément parent spécifique
            galleryProjects.appendChild(figureElement);

            // Ajouter les éléments enfants à la figure
            figureElement.setAttribute("figure-id", id);
            figureElement.appendChild(imageElement);
            figureElement.appendChild(titleElement);

            // Rajout dans le modal
            const modalProjet = data;
            // Création d'une div pour chaque paire d'image et de message "Éditer"
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");

            const imageElementModal = document.createElement("img");
            imageElementModal.src = modalProjet.imageUrl;

            const modalEditerMessage = document.createElement("p");
            modalEditerMessage.classList.add("editer-message");
            modalEditerMessage.innerText = "éditer";

            const modalDeleteIcon = document.createElement("i");
            modalDeleteIcon.classList.add(
              "fa",
              "fa-trash",
              "icon-delete-photo"
            );

            const modalMoveIcon = document.createElement("i");
            modalMoveIcon.classList.add(
              "fa",
              "fa-arrows-up-down-left-right",
              "move-icon"
            );

            imageWrapper.setAttribute("data-id", id);
            modalDeleteIcon.setAttribute("data-id", id);
            imageWrapper.appendChild(imageElementModal);
            imageWrapper.appendChild(modalEditerMessage);
            imageWrapper.appendChild(modalDeleteIcon);
            imageWrapper.appendChild(modalMoveIcon);
            modalGallery.appendChild(imageWrapper);
          })
          .catch((error) => console.error("Erreur Fetch:", error));
      } else {
        //Création d'un message d'erreur si le formulaire n'es pas remplie correctement
        const messageErrorModal2 = document.createElement("p");
        messageErrorModal2.className = "msg-error-modal2";
        messageErrorModal2.innerText =
          "Le formulaire n’est pas correctement rempli.";
        // FormModal2.insertBefore(messageErrorModal2, submitButtonModal2);
        FormModal2.appendChild(messageErrorModal2);

        // Ajout du listener au bouton valider pour supprimer le message d'erreur et éviter les répétitions
        submitButtonModal2.addEventListener("click", function () {
          messageErrorModal2.innerHTML = "";
        });
      }

      //Ajout d'un listener a mon bouton valider pour le rendre vert une fois le formualire entièrement rempli
      // Sélectionnez le bouton Valider
      // const btnValider = document.getElementById('btn-valider');
    });

  //Ajout du fait que des que je charge une image que je puisse la voir dans le container img modal 2
  const imageInput = document.getElementById("image");

  //Ajout d'un listener change à l'input imageInput
  imageInput.addEventListener("change", function () {
    //on récupère le fichier sélectionné
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        //création de l'image a afficher

        const imageVisual = document.createElement("img");
        imageVisual.id = "image-visual";

        //mise a jour de la source de l'image avec son url
        imageVisual.src = this.result;

        //Ajout de l'image au DOM
        containerImageModal2.appendChild(imageVisual);

        imageIconeModal2.style.display = "none";
        addImageButton.style.display = "none";
        addImageInput.style.display = "none";
        typeFileAccepted.style.display = "none";

        //Ajout d'un listener à l'image quand on clique dessus pour lancer le choix du file
        imageVisual.addEventListener("dblclick", function () {
          addImageInput.click();
          modal2.style.display = "block";
          imageVisual.remove();
          imageIconeModal2.style.display = "";
          addImageButton.style.display = "";
          addImageInput.style.display = "none";
        });
      });

      reader.readAsDataURL(file);
    } else {
      imageVisual.src = "";
    }
  });

  //Création de la div qui contiendra les images des projets
  //  const modalGallery = document.createElement("div");
  //  modalGallery.classList.add("js-modal-gallery");
  //  modalContainer.appendChild(modalGallery);
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
    const id = works[i].id;
    const titleElement = document.createElement("figcaption");
    titleElement.innerText = project.title;

    const imageElement = document.createElement("img");
    imageElement.src = project.imageUrl;

    const figureElement = document.createElement("figure");

    const galleryProjects = document.querySelector(".gallery");

    // Ajouter la figure à l'élément parent spécifique
    galleryProjects.appendChild(figureElement);

    // Ajouter les éléments enfants à la figure
    figureElement.setAttribute("figure-id", id);
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

//Ajout du listener pour filtrer les projets qui on pour catégorie "Hotels & restaurants"
const bouttonFilterHotelRestaurant = document.querySelector(
  ".btn-hotels-restaurants"
);
bouttonFilterHotelRestaurant.addEventListener("click", function () {
  const filterHotelRestaurant = works.filter(function (objet) {
    return objet.category.name === "Hotels & restaurants";
  });

  // effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(filterHotelRestaurant);
});
