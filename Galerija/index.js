const items = [
  {
    title: "Avengers: Endgame",
    type: "movie",
    image: "images/endgame.jpg",
    rating: "8.4",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo, Chris Hemsworth",
    description: "Osvetnički tim se udružuje kako bi poništio Thanosove postupke i vratio ravnotežu svemiru."
  },
  {
    title: "Avengers: Infinity War",
    type: "movie",
    image: "images/infinitywar.jpg",
    rating: "8.4",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo, Chris Hemsworth",
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
    {
      title: "The Avengers(2012)",
      type: "movie",
      image: "images/avengers.jpg",
      rating: "8.0",
      cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo, Chris Hemsworth",
      description: "Osvetnici se udružuju kako bi se suprotstavili prijetnji koja prijeti svijetu, a koju predstavlja zli Loki i njegova vanzemaljska armija."

    },
    {
      title: "Guardians of the Galaxy",
      type: "movie",
      image: "images/guardians1.jpg",
      rating: "8.0",
      cast: "Chris Pratt, Zoe Saldana, Dave Bautista",
      description: "Grupa nespojivih junaka udružuje se kako bi spasila galaksiju od zle prijetnje."
    },
    {
      title: "Guardians of the Galaxy Vol. 2",
      type: "movie",
      image: "images/guardians2.jpg",
      rating: "7.6",
      cast: "Chris Pratt, Zoe Saldana, Dave Bautista",
      description: "Članovi Čuvara galaksije suočavaju se s novom prijetnjom dok istražuju tajne Peterovog porijekla."
    },
    {
      title:"Black Panther",
      type: "movie",
      image: "images/blackpanther.jpg",
      rating: "7.3",
      cast: "Chadwick Boseman, Michael B. Jordan",
      description: "T'Challa se vraća kući u Wakandu kako bi preuzeo prijestolje, ali se suočava s prijetnjom koja prijeti njegovom narodu i cijelom svijetu."
    },
    {
      title:"Captain America: Civil War",
      type: "movie",
      image: "images/civilwar.jpg",
      rating: "7.8",
      cast: "Chris Evans, Robert Downey Jr., Scarlett Johansson",
      description: "Osvetnici se sukobljavaju zbog sukoba oko zakona o nadzoru superjunaka, što dovodi do podjele među njima."
    },
    {
      title:"Deadpool & Wolverine",
      type: "movie",
      image: "images/deadpoolwolverine.jpg",
      rating: "8.0",
      cast: "Ryan Reynolds, Hugh Jackman",
      description: "Deadpool i Wolverine se udružuju kako bi se suočili s opasnim neprijateljima i spasili svijet od prijetnje."
    },
    {
      title:"Fantastic 4: First Steps",
      type: "movie",
      image: "images/fantasticfour.jpg",
      rating: "6.5",
      cast: "Ioan Gruffudd, Elektra Kim, Michael Caine",
      description: "Fantastic 4 se suočavaju s novom prijetnjom dok istražuju tajne svojeg porijekla."
    },
    {
      title:"The Lord of the Rings: The Fellowship of the Ring",
      type: "movie",
      image: "images/fellowship.jpg",  
      rating: "8.8",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      description: "Grupa junaka kreće na opasno putovanje kako bi uništila moćni prsten i spasila Srednju Zemlju od zla."
    },
    {
      title:"The Lord of the Rings: The Two Towers",
      type: "movie",
      image: "images/twotowers.jpg",
      rating: "8.7",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      description: "Junaci se suočavaju s novim prijetnjama dok nastavljaju svoje putovanje prema uništenju prstena."
    },
    {
      title:"The Lord of the Rings: The Return of the King",
      type: "movie",
      image: "images/returnoftheking.jpg",
      rating: "8.9",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      description: "Junaci se suočavaju s konačnom prijetnjom dok se bore za sudbinu Srednje Zemlje."
    },
    {
      title:"Forrest Gump",
      type: "movie",
      image: "images/forrestgump.jpg",
      rating: "8.8",
      cast: "Tom Hanks, Robin Wright",
      description: "Priča o životu Forresta Gumpa, čovjeka s niskim IQ-om, koji postaje svjedokom i sudionikom važnih događaja u američkoj povijesti."
    },
    {
      title:"Hangover",
      type: "movie",
      image: "images/hangover.jpg",
      rating: "7.7",
      cast: "Bradley Cooper, Ed Helms",
      description: "Četiri prijatelja se probude nakon divlje momačke večeri u Las Vegasu, ali ne mogu se sjetiti ničega i moraju pronaći nestalog mladoženju."
    },
    {
      title:"Jurassic Park",
      type: "movie",
      image: "images/jurassicpark.jpg",
      rating: "8.1",
      cast: "Sam Neill, Laura Dern, Jeff Goldblum",
      description: "Grupa ljudi se suočava s opasnostima kada se dinosaurusi ožive u tematskom parku."
    },
    {
      title:"Spider-Man:No Way Home",
      type: "movie",
      image: "images/nowayhome.jpg",
      rating: "8.3",
      cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
      description: "Peter Parker se suočava s posljedicama svojih postupaka i mora se boriti protiv prijetnji iz drugih dimenzija kako bi spasio svijet."
    },
    {
      title:"Pirates of the Caribbean: The Curse of the Black Pearl",
      type: "movie",
      image: "images/curseoftheblackpearl.jpg",
      rating: "8.0",
      cast: "Johnny Depp, Geoffrey Rush, Orlando Bloom",
      description: "Jack Sparrow i njegovi prijatelji se suočavaju s prijetnjom zla u svijetu pirata."
    },
    {
      title:"Pirates of the Caribbean:Salazar's Revenge",
      type: "movie",
      image: "images/salazarsrevenge.jpg",
      rating: "6.5",
      cast: "Johnny Depp, Javier Bardem, Brenton Thwaites",
      description: "Jack Sparrow se suočava s prijetnjom zlog kapetana Salazara, koji želi osvetu za svoje poraze."
    },
    {
      title:"Dexter",
      type: "series",
      image: "images/dexter.jpg",
      rating: "8.6",
      cast: "Michael C. Hall, Jennifer Carpenter",
      description: "Dexter Morgan je forenzički stručnjak koji vodi dvostruki život kao serijski ubojica koji cilja druge ubojice."
    },
    {
      title:"Young Sheldon",
      type: "series",
      image: "images/youngsheldon.jpg",
      rating: "7.3",
      cast: "Iain Armitage, Zoe Perry",
      description: "Priča o mladom Sheldonu Cooperu, genijalnom dječaku koji se suočava s izazovima odrastanja u Teksasu."
    },
    {
      title:"South park",
      type: "series",
      image: "images/southpark.jpg",
      rating: "8.7",
      cast: "Trey Parker, Matt Stone",
      description: "Četiri dječaka iz malog grada South Parka suočavaju se s apsurdnim i često kontroverznim situacijama u svom svakodnevnom životu."
    },
      {
        title:"Friends",
        type: "series",
        image: "images/friends.jpg",
        rating: "8.9",
        cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer",
        description: "Šest prijatelja iz New Yorka prolazi kroz životne izazove, ljubavi i prijateljstvo dok se suočavaju s svakodnevnim situacijama."
    },
    {
      title:"The Office",
      type: "series",
      image: "images/office.jpg",
      rating: "8.9",
      cast: "Steve Carell, Rainn Wilson, John Krasinski",
      description: "Mockumentary serija koja prati svakodnevni život zaposlenika u uredu Dunder Mifflin."
    },
    {
      title:"Simpsons",
      type: "series",
      image: "images/simpsons.jpg",
      rating: "8.7",
      cast: "Dan Castellaneta, Julie Kavner, Nancy Cartwright",
      description: "Priča o obitelji Simpsona, članova koje se suočavaju s izazovima i zabavama u svakodnevnom životu u mjestu Springfield."
    },
    {
      title:"What if...?",
      type: "series",
      image: "images/whatif.jpg",
      rating: "7.3",
      cast: "Jeffrey Wright, Hayley Atwell",
      description: "Animirana serija koja istražuje alternativne scenarije u Marvelovom svemiru, pokazujući što bi se dogodilo da su se ključni događaji odvijali drugačije."
    },
    {
      title:"Big Time Rush",
      type: "series",
      image: "images/bigtimerush.jpg",
      rating: "7.0",
      cast: "Kendall Schmidt, James Maslow, Carlos Pena Jr., Logan Henderson",
      description: "Četiri prijatelja iz Minnesote se sele u Los Angeles kako bi postali pop zvijezde, suočavajući se s izazovima i avanturama na putu do slave."
    },
    {
      title:"iCarly",
      type: "series",
      image: "images/icarly.jpg",
      rating: "7.0",
      cast: "Selena Gomez, Cory Monteith",
      description: "Priča o mladoj djevojci koja stvara web seriju i suočava se s izazovima u svakodnevnom životu."
    },
    {
      title:"Victorious",
      type: "series",
      image: "images/victorious.jpg",
      rating: "7.2",
      cast: "Victoria Justice, Ariana Grande",
      description: "Tori Vega se upisuje u prestižnu školu za umjetnost i suočava se s izazovima i avanturama dok slijedi svoje snove."
    },
    {
      title:"Bitange i princeze",
      type: "series",
      image: "images/bip.jpg",
      rating: "7.5",
      cast: "Dražen Čuček, Stjepan Perić, Rene Bitorajac",
      description: "Dva prijatelja, Bitange i Princeze, prolaze kroz svakodnevne situacije i avanture u Zagrebu."
    },
    {
      title:"Naša mala klinika",
      type: "series",
      image: "images/nasamalaklinika.jpg",
      rating: "7.8",
      cast: "Goran Navojec, Bojana Gregorić, Enis Bešlagić",
      description: "Komedija koja prati svakodnevni život zaposlenika u maloj klinici, suočavajući se s različitim pacijentima i situacijama."
    },
    {
      title:"Zauvijek susjedi",
      type: "series",
      image: "images/zauvijeksusjedi.jpg",
      rating: "7.0",
      cast: "Dražen Čuček, Stjepan Perić, Rene Bitorajac",
      description: "Dva susjeda, Zauvijek Susjedi, prolaze kroz svakodnevne situacije i avanture u Zagrebu."
    },
    {
      title:"Lud, zbunjen, normalan",
      type: "series",
      image: "images/ludzbunjennormalan.jpg",
      rating: "7.5",
      cast: "Enis Bešlagić, Tarik Filipović, Sergej Trifunović",
      description: "Komedija koja prati svakodnevni život tri brata, Lud, Zbunjen i Normalan, suočavajući se s različitim situacijama i avanturama."
    },
    {
      title:"Looney Tunes",
      type: "series",
      image: "images/looneytunes.jpg",
      rating: "8.5",
      cast: "Mel Blanc, June Foray",
      description: "Animirana serija koja prati avanture popularnih likova poput Zekoslava Mrkve, Tweetyja i Silvestera."
    },
    {
      title:"Avatar: The Last Airbender",
      type: "series",
      image: "images/avatar.jpg",
      rating: "9.2",
      cast: "Zach Tyler Eisen, Mae Whitman",
      description: "Priča o mladom Avataru Aangu, koji se bori protiv zle vatre kako bi spasio svijet i uspostavio ravnotežu među četiri elementa."
    },
    {
      title:"Phineas and Ferb",
      type: "series",
      image: "images/phineasandferb.jpg",
      rating: "8.0",
      cast: "Vincent Martella, Thomas Sangster",
      description: "Dva brata, Phineas i Ferb, provode ljeto stvarajući nevjerojatne izume i avanture, dok se njihova sestra Candace pokušava dokazati roditeljima da su loši."
    },
    {
      title:"Ben 10",
      type: "series",
      image: "images/ben10.jpg",
      rating: "7.5",
      cast: "Tara Strong, Paul Eiding",
      description: "Dječak Ben Tennyson otkriva tajanstveni uređaj koji mu omogućuje da se transformira u različite izvanzemaljske oblike i bori protiv zla."
    },
    {
      title:"Jeffrey Epstein: Filthy Rich",
      type: "documentary",
      image: "images/epstein.jpg",
      rating: "7.5",
      cast: "Jeffrey Epstein, Ghislaine Maxwell",
      description: "Dokumentarna serija koja istražuje život i zločine Jeffreyja Epsteina, financijskog mogula optuženog za seksualno zlostavljanje i trgovinu ljudima."
    },
    {
      title:"March of the Penguins",
      type: "documentary",
      image: "images/penguins.jpg",
      rating: "7.5",
      cast: "Morgan Freeman",
      description: "Dokumentarni film koji prati putovanje carskih pingvina kroz surove uvjete Antarktike tijekom sezone parenja."
    },
    {
      title:"Apollo 11",
      type: "documentary",
      image: "images/apollo11.jpeg",
      rating: "8.2",
      cast: "Neil Armstrong, Buzz Aldrin",
      description: "Dokumentarni film koji koristi arhivske snimke i intervjue kako bi ispričao priču o misiji Apollo 11, koja je dovela do prvog čovjeka na Mjesecu."
    },
    {
      title:"Incredible Dr. Pol",
      type: "documentary",
      image: "images/drpol.jpg",
      rating: "7.0",
      cast: "Dr. Jan Pol, Diane Pol",
      description: "Dokumentarna serija koja prati svakodnevni rad veterinara dr. Jana Pola i njegove supruge Diane u njihovoj veterinarskoj klinici."
    },
    {
      title:"Planet Earth II",
      type: "documentary",
      image: "images/planetearth.jpg",
      rating: "9.5",
      cast: "David Attenborough",
      description: "Dokumentarna serija koja istražuje različite ekosustave na Zemlji, prikazujući nevjerojatne prizore prirode i divljih životinja."
    },
    {
      title:"Muhammad Ali: The Greatest",
      type: "documentary",
      image: "images/muhammadali.jpg",
      rating: "8.0",
      cast: "Muhammad Ali, George Foreman",
      description: "Dokumentarni film koji istražuje život i karijeru legendarnog boksača Muhammada Alija, poznatog kao 'The Greatest'."
    },
    {
      title:"Neymar: The Perfect Chaos",
      type: "documentary",
      image: "images/neymar.jpg",
      rating: "7.5",
      cast: "Neymar Jr., Thiago Silva, Dani Alves",
      description: "Dokumentarna serija koja prati život i karijeru brazilskog nogometaša Neymara, istražujući njegove uspjehe, izazove i kontroverze."
    },
    {
      title:"Sir Alex Ferguson: Never Give In",
      type: "documentary",
      image: "images/ferguson.jpg",
      rating: "8.0",
      cast: "Sir Alex Ferguson, Ryan Giggs, Eric Cantona, David Beckham",
      description: "Dokumentarni film koji istražuje život i karijeru legendarnog nogometnog trenera Sir Alexa Fergusona, poznatog po svojim uspjesima s Manchester Unitedom."
    },
    {
      title:"Rene Higuita: The Scorpion King",
      type: "documentary",
      image: "images/higuita.jpg",
      rating: "7.0",
      cast: "Rene Higuita, Carlos Valderrama",
      description: "Dokumentarni film koji istražuje život i karijeru kolumbijskog nogometnog vratara Rene Higuite, poznatog po svom neortodoksnom stilu igre i kontroverznim potezima."
    },
    {
      title:"Prehistoric Planet",
      type: "documentary",
      image: "images/prehistoricplanet.jpg",
      rating: "7.5",
      cast: "David Attenborough",
      description: "Dokumentarna serija koja istražuje geološke i paleontološke promjene na Zemlji tijekom prethistorijskih doba."
    },
    {
      title:"The Family",
      type: "documentary",
      image: "images/family.jpg",
      rating: "7.5",
      cast: "Doug Coe, Franklin Graham",
      description: "Dokumentarna serija koja istražuje tajanstvenu i utjecajnu kršćansku organizaciju poznatu kao 'The Family' i njen utjecaj na politiku i društvo."
    },
    {
      title:"Bear Grylls: Mission Survive",
      type: "documentary",
      image: "images/beargrylls.jpg",
      rating: "7.0",
      cast: "Bear Grylls, Ed Stafford",
      description: "Dokumentarna serija u kojoj Bear Grylls vodi poznate osobe kroz ekstremne preživljavačke izazove u divljini."
    },
    {
      title:"The Photographers",
      type: "documentary",
      image: "images/photographers.jpg",
      rating: "7.5",
      cast: "Annie Leibovitz, Steve McCurry",
      description: "Dokumentarna serija koja istražuje živote i rad poznatih fotografa, prikazujući njihove najpoznatije radove i priče iza njih."
    },
    {
      title:"The deepest cave",
      type: "documentary",
      image: "images/cave.jpg",
      rating: "7.0",
      cast: "Nikolay Krupnik, Alexander Klimchouk",
      description: "Dokumentarni film koji prati ekspediciju istraživača koji se spuštaju u najdublju špilju na svijetu, Krubera-Voronja, i suočavaju se s opasnostima i izazovima tijekom svog putovanja."
    },
    {
      title:"Great Migrations",
      type: "documentary",
      image: "images/migrations.jpg",
      rating: "8.0",
      cast: "David Attenborough",
      description: "Dokumentarna serija koja istražuje nevjerojatne migracije životinja širom svijeta, prikazujući njihove putove, izazove i preživljavanje."
    },
    {
      title:"Ocean",
      type: "documentary",
      image: "images/ocean.jpg",
      rating: "8.5",
      cast: "David Attenborough",
      description: "Dokumentarna serija koja istražuje tajne i ljepote oceana, prikazujući nevjerojatne prizore morskog života i ekosustava."
    }


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