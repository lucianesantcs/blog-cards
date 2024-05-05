export const handleSearch = () => {
  const searchInput = document.querySelector<HTMLInputElement>('#search-input');
  const searchValue = searchInput?.value?.trim()?.toLowerCase()?.split(/\s+/) || [];
  const cardsElement = document.querySelector('#cards');
  const cardElements = cardsElement?.querySelectorAll<HTMLElement>('#card') || [];
  const notFoundCardElement = document.querySelector<HTMLElement>('#card-not-found');

  const filteredCards = Array.from(cardElements)?.filter((card) => {
    const titleElement = card.querySelector<HTMLElement>('#title');
    const textValue = titleElement?.textContent ?? titleElement?.innerHTML ?? '';

    return searchValue?.every((word) => textValue?.toLowerCase()?.includes(word));
  });

  cardElements?.forEach((card) => {
    card.style.display = 'none';
  });

  filteredCards?.forEach((card) => {
    card.style.display = '';
  });

  if (notFoundCardElement) {
    notFoundCardElement.style.display = filteredCards.length > 0 ? 'none' : 'block';
  }
};

document.getElementById('search-input')?.addEventListener('keyup', handleSearch);
