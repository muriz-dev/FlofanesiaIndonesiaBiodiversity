const speciesData = [
  { 
    name: 'Bunga Bangkai', 
    latin: 'Amorphophallus titanum', 
    image: '/public/assets/img/flora/flora-2.jpg',
    url: '/public/species/bunga-bangkai.html'
  },
  { 
    name: 'Badak Jawa', 
    latin: 'Rhinoceros Sondaicus', 
    image: '/public/assets/img/fauna/fauna-14.jpg',
    url: '/public/species/badak-jawa.html'
  },
  { 
    name: 'Harimau Sumatra', 
    latin: 'Panthera Tigris Sumatrae', 
    image: '/public/assets/img/fauna/fauna-7.jpg',
    url: '/public/species/harimau-sumatra.html'
  },
  { 
    name: 'Paku Rane', 
    latin: 'Selaginella', 
    image: '/public/assets/img/flora/flora-14.jpg',
    url: '/public/species/paku-rane.html'
  },
  { 
    name: 'Krabuku', 
    latin: 'Tarsius', 
    image: '/public/assets/img/fauna/fauna-11.jpg',
    url: '/public/species/krabuku.html'
  },
  { 
    name: 'Anggrek Hitam', 
    latin: 'Coelogyne pandurata', 
    image: '/public/assets/img/flora/flora-13.jpg',
    url: '/public/species/anggrek-hitam.html'
  },
  { 
    name: 'Cendrawasih', 
    latin: 'Paradisaeidae', 
    image: '/public/assets/img/fauna/fauna-19.jpg',
    url: '/public/species/cendrawasih.html'
  },
  { 
    name: 'Paku Tanduk Rusa', 
    latin: 'Platycerium', 
    image: '/public/assets/img/flora/flora-3.jpg',
    url: '/public/species/paku-tanduk-rusa.html'
  },
  { 
    name: 'Babi Rusa', 
    latin: 'Babyrousa', 
    image: '/public/assets/img/fauna/fauna-13.jpg',
    url: '/public/species/babi-rusa.html'
  },
  { 
    name: 'Komodo', 
    latin: 'Varanus komodoensis', 
    image: '/public/assets/img/fauna/fauna-16.jpg',
    url: '/public/species/komodo.html'
  },
  { 
    name: 'Orang Utan Sumatera', 
    latin: 'Pongo Abelii', 
    image: '/public/assets/img/fauna/fauna-12.jpg',
    url: '/public/species/orang-utan-sumatera.html'
  },
  { 
    name: 'Bubuntu Sulawesi', 
    latin: 'Ailurops Ursinus', 
    image: '/public/assets/img/fauna/fauna-10.jpg',
    url: '/public/species/bubuntu-sulawesi.html'
  }
];

let searchInput, searchButton, speciesGrid, speciesNotFoundSection;

document.addEventListener('DOMContentLoaded', () => {
  searchInput = document.getElementById('search-input');
  searchButton = document.getElementById('search-button');
  speciesGrid = document.getElementById('species-grid');
  speciesNotFoundSection = document.getElementById('species-not-found');

  initializeSpeciesGrid();

  searchButton.addEventListener('click', filterSpecies);
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      filterSpecies();
    }
  });
});

function createSpeciesCard(species) {
  const cardLink = document.createElement('a');
  
  cardLink.href = species.url || '#';
  cardLink.className = "block transition-transform hover:scale-[1.02] duration-300";
  
  const card = document.createElement('div');
  card.className = 'species-card bg-white rounded-[20px] overflow-hidden shadow-lg';
  card.dataset.name = species.name.toLowerCase();
  card.dataset.latin = species.latin.toLowerCase();
  
  card.innerHTML = `
    <div class="relative">
      <img src="${species.image}" alt="${species.name}" class="w-full aspect-square object-cover">
      <div class="absolute bottom-0 left-0 right-0 h-1/4 overflow-hidden">
        <img src="${species.image}" alt="" 
             class="w-full aspect-square object-cover absolute top-0 left-0 transform -translate-y-3/4 opacity-90 backdrop-blur-[2px]"
             style="filter: blur(2px);"
             aria-hidden="true">
      </div>
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-16 pb-6 px-6">
        <h2 class="text-3xl font-bold text-white mb-1">${species.name}</h2>
        <p class="text-xl font-medium text-white">${species.latin}</p>
      </div>
    </div>
  `;
  
  cardLink.appendChild(card);
  return cardLink;
}

function initializeSpeciesGrid() {
  speciesGrid.innerHTML = '';
  
  speciesData.forEach(species => {
    const card = createSpeciesCard(species);
    speciesGrid.appendChild(card);
  });
}

function filterSpecies() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const speciesCards = document.querySelectorAll('.species-card');
  let visibleCount = 0;
  
  speciesCards.forEach(card => {
    const name = card.dataset.name;
    const latin = card.dataset.latin;
    
    if (searchTerm === '' || name.includes(searchTerm) || latin.includes(searchTerm)) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
  
  if (visibleCount === 0 && searchTerm !== '') {
    speciesNotFoundSection.classList.remove('hidden');
    speciesNotFoundSection.classList.add('flex');
  } else {
    speciesNotFoundSection.classList.add('hidden');
    speciesNotFoundSection.classList.remove('flex');
  }
}

function setupScrollNavigation() {
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
      header.classList.add('nav-hidden');
    } else {
      header.classList.remove('nav-hidden');
    }
    
    lastScrollY = currentScrollY;
  });
}
