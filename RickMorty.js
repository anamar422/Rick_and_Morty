
function info(gender, status, prev, next) {
  const results = fetch(
      `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}&prev=${prev || ""}&next=${next || ""}`);
  results
        .then(response => response.json())
        .then(data => { 
          //  done(data)
          

        data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        
        <div class="cards">
          <h2>${personaje.name}</h2>
          <div class="photo">
            <img class="img"src="${personaje.image}">
          </div>
          <h3 class= "gender">${personaje.gender}</h3>
          <h3 class= "status">${personaje.status}</h3>
        </div>
       
        `);

        const characters = document.querySelector(".sectionTwo")
        characters.append(article)
    });

   }).catch(error =>{
        document.querySelector(".sectionTwo").innerHTML = error
        console.log(error)
   });
}


const params = new URLSearchParams(window.location.search);
info(params.get("gender"), params.get("status"), params.get("next"), params.get("prev"));

const pagination = (info) => { 
let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
document.getElementById("pagination").innerHTML = html
}