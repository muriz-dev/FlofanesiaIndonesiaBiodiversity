document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const articleCards = document.querySelectorAll('.article-card, .species-card');
  const notFoundSection = document.getElementById('article-not-found');
  
  if (!searchInput || !articleCards.length) return;
  
  const searchParam = new URLSearchParams(window.location.search).get('search');
  articleCards.forEach(card => card.classList.add('hidden'));
  
  if (searchParam) {
    searchInput.value = searchParam;
    showAllArticles();
  } else if (notFoundSection) {
    notFoundSection.classList.replace('hidden', 'flex');
  }
  
  function showAllArticles() {
    const hasInput = searchInput.value.trim() !== '';
    
    articleCards.forEach(card => {
      card.classList.toggle('hidden', !hasInput);
      card.classList.toggle('flex', hasInput);
    });
    
    if (notFoundSection) {
      notFoundSection.classList.toggle('hidden', hasInput);
      notFoundSection.classList.toggle('flex', !hasInput);
    }
  }
  
  document.getElementById('search-button')?.addEventListener('click', showAllArticles);
  searchInput.addEventListener('keypress', e => e.key === 'Enter' && (e.preventDefault(), showAllArticles()));
});
