document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const speciesCards = document.querySelectorAll('.species-card');
  const notFoundSection = document.getElementById('species-not-found');
  
  if (!searchInput || !notFoundSection) return;
  
  speciesCards.forEach(card => card.classList.add('hidden'));
  
  const handleSearch = () => {
    const hasInput = searchInput.value.trim() !== '';
    
    speciesCards.forEach(card => card.classList.toggle('hidden', !hasInput));
    notFoundSection.classList.toggle('hidden', hasInput);
    notFoundSection.classList.toggle('flex', !hasInput);
  };
  
  document.getElementById('search-button')?.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', e => e.key === 'Enter' && (e.preventDefault(), handleSearch()));
});
