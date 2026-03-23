const items = [
  {
    title: "Avengers: Endgame",
    type: "movie",
    image: "images/endgame.jpg",
    rating: "8.4",
    cast: "Robert Downey Jr., Chris Evans",
    description: "Osvetnički tim se udružuje kako bi poništio Thanosove postupke i vratio ravnotežu svemiru."
  },
  {
    title: "Avengers: Infinity War",
    type: "movie",
    image: "images/infinitywar.jpg",
    rating: "8.4",
    cast: "Robert Downey Jr., Chris Evans",
    description: "Osvetnički tim se suočava s Thanosom, koji traži šest kamenja beskonačnosti kako bi ostvario svoj plan uništenja pola života u svemiru."
  },
  {
    title: "Thor: Ragnarok",
    type: "movie",
    image: "images/ragnarok.jpg",
    rating: "7.9",
    cast: "Chris Hemsworth, Tom Hiddleston",
    description: "Thor se nalazi zarobljen na udaljenom planetu i mora se boriti u gladiatorskim igrama kako bi preživio i spasio Asgard od propasti."
  },
    {
    title: "Fight Club",
    type: "movie",
    image: "images/fightclub.jpg",
    rating: "8.8",
    cast: "Edward Norton, Brad Pitt",
    description: "Nezadovoljni muškarac osniva ilegalni klub borbi kako bi se oslobodio svoje svakodnevne rutine, ali stvari brzo izmaknu kontroli."
  },
    {
    title: "Big bang theory",
    type: "series",
    image: "images/bigbangtheory.jpg",
    rating: "8.3",
    cast: "Johnny Galecki, Jim Parsons",
    description: "Grupa genijalaca i njihovih prijatelja suočava se s izazovima svakodnevnog života, ljubavi i prijateljstva, dok se bave svojim neobičnim interesima."
  },
    {
    title: "Rick and Morty",
    type: "series",
    image: "images/rickandmorty.jpg",
    rating: "9.2",
    cast: "Justin Roiland, Chris Parnell",
    description: "Ekscentrični znanstvenik Rick i njegov unuk Morty kreću na lude avanture kroz svemir i različite dimenzije, suočavajući se s opasnostima i apsurdima života."
    },
    {
    title: "Ancient Aliens",
    type: "documentary",
    image: "images/ancientaliens.jpg",
    rating: "8.5",
    cast: "Jeffrey Krueger, Hans Zimmer",
    description: "Istraživači istražuju dokaze za intervenciju vanzemaljskih civilizacija u ljudskoj povijesti."
    },
    {
        title:"Pele: Birth of a Legend",
        type: "documentary",
        image: "images/pele.jpg",
        rating: "7.2",
        cast: "Kevin de Paula, Seu Jorge",
        description: "Biografski film o životu i karijeri brazilske nogometne legende Pelea."
    },
    {
        title:"The Last Dance",
        type: "documentary",
        image: "images/lastdance.jpg",
        rating: "9.1",
        cast: "Michael Jordan, Scottie Pippen",
        description: "Dokumentarna serija koja prati posljednju sezonu Michaela Jordana s Chicago Bullsima i njegovu karijeru."
    },
    {
        title:"Sean Combs: The Reckoning",
        type: "documentary",
        image: "images/seancombs.jpg",
        rating: "7.8",
        cast: "Sean Combs, 50 Cent",
        description: "Dokumentarni film koji istražuje život i karijeru glazbenog mogula Seana Combs-a, poznatog kao Diddy."
    },
];


const gallery = document.getElementById("gallery");

function filterItems(event, category) {
  gallery.innerHTML = "";

  document.querySelectorAll(".filters button").forEach(btn =>
    btn.classList.remove("active")
  );
}

function filterItems(event, category) {
  gallery.innerHTML = "";

  document.querySelectorAll(".filters button").forEach(btn =>
    btn.classList.remove("active")
  );
  event.target.classList.add("active");

  let filtered = category === "all"
    ? items
    : items.filter(item => item.type === category);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
    `;

    card.onclick = () => openModal(item);

    gallery.appendChild(card);
  });
}

// MODAL FUNCTIONS
function openModal(item) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = item.image;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-rating").textContent = "⭐ Rating: " + item.rating;
  document.getElementById("modal-cast").textContent = "🎭 Cast: " + item.cast;
  document.getElementById("modal-desc").textContent = item.description;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// load on start
filterItems({ target: document.querySelector(".filters button") }, "all");