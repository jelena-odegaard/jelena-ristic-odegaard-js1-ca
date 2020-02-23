const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = `${baseUrl}character/`;

function character(response) {
    return response.json();
}

function handleJsonCharacter(json) {
    const characterLoad = json.results;
    console.dir(json);

    const resultsContainer = document.querySelector(".results");

    let html = "";

    characterLoad.forEach(function (result) {
        let typeOf = result.type;
        if (result.type.length > 0) {
        } else {
            typeOf = "Unknown";
        }

        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">
          <img class="image" src="${result.image}" alt=${result.name}>
          <div class="details">
              <h4 class="name">${result.name}</h4>
              <p>Type: ${typeOf}</p>
              <p>Episode count: ${result.episode.length}</p>                                       
              <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
          </div>
      </div>
  </div>`;
    });

    resultsContainer.innerHTML = html;
}

function error(error) {
    console.log(error);
}

fetch(characterUrl)
    .then(character)
    .then(handleJsonCharacter)
    .catch(error);


//adding id

const detailUrl = `${characterUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCharacter(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

//adding loader

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 

