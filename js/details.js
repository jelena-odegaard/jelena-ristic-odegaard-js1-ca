const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(queryString);
console.log(params);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const baseURL = "https://rickandmortyapi.com/api/character/";
const detailsURL = `${baseURL}${id}`;

fetch(detailsURL)
    .then(handleAPI)
    .then(createDetails)
    .catch(handleAPIError);

function handleAPI(response) {
    return response.json();
}

function handleAPIError(error) {
    window.location.href = "error.html";
}

function createDetails(json) {
    console.dir(json);

    const detailsContainer = document.querySelector(".container.content");
    let HTML = "";

    HTML += `<div class="breadcrumb-nav"><a href="/">Back to characters</a></div>
    <div class="detail-container">
    <img class="details-image" src="${json.image}" alt="${json.name}" />
    <div class="detail-details">
        <h1>${json.name}</h1>
        <p>Status: <span class="value" id="status">${json.status}</span></p>
        <p>Species: <span class="value" id="species">${json.species}</span></p>
        <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
        <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
    </div>
</div>`;

    detailsContainer.innerHTML = HTML;
}
