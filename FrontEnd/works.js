const reponse = await fetch("http://localhost:5678/api/works");
 let works = await reponse.json();


console.log(works);