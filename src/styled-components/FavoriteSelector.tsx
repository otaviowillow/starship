import emptyHeart from '../assets/empty_heart.svg';
import fullHeart from '../assets/full_heart.svg';

interface FavoriteSelectorProps {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
}

const FavoriteSelector = ({ isFavorite, setIsFavorite }: FavoriteSelectorProps) => {
  const handleFavorite = () => setIsFavorite(!isFavorite);

  if (isFavorite)
    return (
      <figure className="p-2 rounded-full cursor-pointer bg-sithApprentice" onClick={handleFavorite}>
        <img src={fullHeart} alt="is favorite" />
      </figure>
    );

  return (
    <figure className="p-2 rounded-full cursor-pointer bg-sithApprentice" onClick={handleFavorite}>
      <img src={emptyHeart} alt="is not favorite" />
    </figure>
  );
};

export default FavoriteSelector;
