// Récupération de l'élément formulaire par sa classe
const loginForm = document.getElementsByClassName("login")[0];

// Ajout d'un listener à la validation du formulaire
loginForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // on bloque le comportement par défaut du navigateur qui recharge la page
  // Création de l'objet identification
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // création de la charge utile au format JSON
  const chargeUtile = JSON.stringify({ email, password });
  if (!email || !password){
    const errorMessageElement = document.createElement("p");
    errorMessageElement.innerText =
    "Veuillez entrer un Email et un mot de passe valides.";
    const errorMessage = document.querySelector(".error-msg-1");
    errorMessage.appendChild(errorMessageElement);

    //Ajout d'un listener sur le bouton qui fait que le message se supprime pour éviter
    //les répétition
    const submitButton = document.querySelector("#connect");
    submitButton.addEventListener("click", () => {
      document.querySelector(".error-msg-1").innerHTML = ""; // ou errorMessageElement.remove();
    });
  }

  if (email && password) {
    const rep = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: chargeUtile,
    });
   

    if (rep.ok) {
      //si la reponse est ok, on récupère les données JSON de la réponse
      const data = await rep.json();
      //on récupère ensuite le token de la reponse
      const token = data.token;

      // Enregistrement du token dans localStorage pour une utilisation ultérieure
      localStorage.setItem("token", token);

      // On définit l'en-tête Authorization pour les requêtes ultérieures
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);

      // redirection vers la page d'accueil
      window.location.href = "./index.html";
    } else {
      const errorMessageElement = document.createElement("p");
      errorMessageElement.innerText =
        "Adresse email ou mot de passe incorrect.";
      const errorMessage = document.querySelector(".error-msg-2");
      errorMessage.appendChild(errorMessageElement);

      //Ajout d'un listener sur le bouton qui fait que le message se supprime pour éviter
      //les répétition
      const submitButton = document.querySelector("#connect");
      submitButton.addEventListener("click", () => {
        document.querySelector(".error-msg-2").innerHTML = ""; // ou errorMessageElement.remove();
      });

      //solution timer
      // setTimeout(() => {
      //   errorMessageElement.remove();
      // }, 3000);
    }
  }
});
