import { ChangeEvent } from 'react';
import { useComments, useFavoriteActions, useFavoriteStarships } from '../contexts/useFavorites';
import { Starship } from '../models/Starship';
import Typography from '../styled-components/Typography';
import img from '../assets/starship.png';
import FavoriteSelector from '../styled-components/FavoriteSelector';
import StarRating from '../styled-components/StarRating';
import Textarea from '../styled-components/Textarea';

const StarshipItem = ({ starship, showComments }: { starship: Starship; showComments?: boolean }) => {
  const favorites = useFavoriteStarships();
  const comments = useComments();

  const { toggleFavorite, setComment } = useFavoriteActions();

  const handleFavorite = () => toggleFavorite(starship);

  const handleSetComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ name: starship.name, comment: e.target.value });
  };

  return (
    <div className="rounded-2xl m-4 p-2 dark:bg-sithApprentice" aria-label="starship">
      <div className="flex">
        <main className="flex-1 m-3">
          <Typography variant="heading2">{starship.name}</Typography>
          <Typography variant="paragraph">{starship.manufacturer}</Typography>
          <StarRating rating={starship.hyperdrive_rating} />
          <Typography variant="paragraph">Passengers: {starship.passengers}</Typography>
        </main>

        <aside className="w-1/3 m-3 relative">
          <div className="h-full">
            <img src={img} alt="Starship" className="h-full w-full object-cover rounded-lg" />
          </div>
          <div className="absolute top-2 right-2">
            <FavoriteSelector isFavorite={!!favorites.find((fav) => fav.name === starship.name)} setIsFavorite={handleFavorite} />
          </div>
        </aside>
      </div>

      {showComments && (
        <footer className="m-3">
          <Textarea onChange={handleSetComment} value={comments.find((comment) => comment.name === starship.name)?.comment} placeholder="Add text" />
        </footer>
      )}
    </div>
  );
};

export default StarshipItem;
