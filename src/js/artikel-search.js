document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('article-search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location.href = `./pencarian-artikel.html?search=${encodeURIComponent(searchInput.value.trim())}`;
    }
  });
});
