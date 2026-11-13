// ----- Page elements -----
const grid = document.getElementById("pokemon-grid");
const searchInput = document.getElementById("search-input");
const typeFilter = document.getElementById("type-filter");
const trainAmount = document.getElementById("train-amount");
const shownCount = document.getElementById("shown-count");
const favCount = document.getElementById("fav-count");
const fighter1 = document.getElementById("fighter1");
const fighter2 = document.getElementById("fighter2");
const battleBtn = document.getElementById("battle-btn");
const battleResult = document.getElementById("battle-result");

const typeEmoji = {
  Electric: "⚡",
  Fire: "🔥",
  Water: "💧",
  Grass: "🌿",
  Normal: "⭐",
};

let favourites = []; // ids of the favourite Pokémon

// ----- Show the cards -----
function renderCards(list) {
  grid.innerHTML = "";

  list.forEach((p) => {
    const isFav = favourites.includes(p.id);
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="emoji">${typeEmoji[p.type]}</span>
        <button class="fav-btn" data-id="${p.id}">${isFav ? "♥" : "♡"}</button>
      </div>
      <h3>${p.name}</h3>
      <span class="type-badge type-${p.type.toLowerCase()}">${p.type}</span>
      <p>HP: ${p.hp}</p>
      <p>Attack: <strong>${p.attack}</strong></p>
      <p>Level: ${p.level}</p>
      <button class="train-btn" data-id="${p.id}">Train</button>
    `;
    grid.appendChild(card);
  });

  shownCount.textContent = list.length;
  favCount.textContent = favourites.length;
}

// ----- Search and filter -----
function matchesType(p, selectedType) {
  if (selectedType === "All") {
    return true;
  }
  return p.type === selectedType;
}

function getFilteredList() {
  const searchText = searchInput.value.toLowerCase();
  const selectedType = typeFilter.value;

  return pokemon.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(searchText);
    return matchesName && matchesType(p, selectedType);
  });
}

function updatePage() {
  renderCards(getFilteredList());
}

// ----- Favourites -----
function toggleFavourite(id) {
  const index = favourites.indexOf(id);
  if (index !== -1) {
    favourites.splice(index, 1); // remove it
  } else {
    favourites.push(id); // add it
  }
  updatePage();
}

// ----- Training -----
function trainPokemon(id) {
  const p = pokemon.find((item) => item.id === id);
  const boost = Number(trainAmount.value);
  p.attack = p.attack + boost;
  updatePage();
}

grid.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  if (event.target.classList.contains("fav-btn")) {
    toggleFavourite(id);
  }
  if (event.target.classList.contains("train-btn")) {
    trainPokemon(id);
  }
});

// ----- Battle -----
function fillFighterMenus() {
  pokemon.forEach((p) => {
    fighter1.add(new Option(p.name, p.id));
    fighter2.add(new Option(p.name, p.id));
  });
  fighter2.selectedIndex = 1;
}

function getPower(p) {
  return p.attack + p.level * 2;
}

function battle() {
  const p1 = pokemon.find((item) => item.id === Number(fighter1.value));
  const p2 = pokemon.find((item) => item.id === Number(fighter2.value));

  const power1 = getPowr(p1);
  const power2 = getPower(p2);

  if (power1 > power2) {
    battleResult.textContent = `${p1.name} wins! (${power1} vs ${power2})`;
  } else if (power2 > power1) {
    battleResult.textContent = `${p2.name} wins! (${power2} vs ${power1})`;
  } else {
    battleResult.textContent = `It's a draw! (${power1} vs ${power2})`;
  }
}

// ----- Start the page -----
searchInput.addEventListener("input", updatePage);
typeFilter.addEventListener("change", updatePage);
battleBtn.addEventListener("click", battle);

fillFighterMenus();
updatePage();
