document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const speciesCards = document.querySelectorAll('.species-card');
  const notFoundSection = document.getElementById('species-not-found');
  
  speciesCards.forEach(card => card.classList.add('hidden'));
  
  const handleSearch = () => {
    const hasInput = searchInput.value.trim() !== '';
    
    speciesCards.forEach(card => card.classList.toggle('hidden', !hasInput));
    notFoundSection.classList.toggle('hidden', hasInput);
    notFoundSection.classList.toggle('flex', !hasInput);
  };
  
  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', e => e.key === 'Enter' && (e.preventDefault(), handleSearch()));
});
