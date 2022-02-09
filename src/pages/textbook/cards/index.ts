import textbookStore from '../../../store/textbookStore';
import renderCard from '../../../components/card';

const renderCards = () => {
  const cards = document.createElement('div');
  cards.classList.add('textbook__cards');
  const cardsElements = textbookStore.words.map((word) => renderCard(word));
  cards.append(...cardsElements);
  return cards;
};

export default renderCards;