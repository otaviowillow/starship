import { useFavoriteStarships } from '../contexts/useFavorites';
import { Starship } from '../models/Starship';
import StarshipItem from './StarshipItem';
import Typography from '../styled-components/Typography';

const FavoritesList = () => {
  const favorites = useFavoriteStarships();

  if (!favorites.length)
    return (
      <div className="flex flex-col justify-center items-center h-96">
        <Typography variant="heading2">I find your lack of ships disturbing</Typography>
        <Typography variant="paragraph">You have not favorited any starships yet 💔</Typography>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {favorites.map((starship: Starship, i: number) => (
        <StarshipItem key={i} starship={starship} showComments />
      ))}
    </div>
  );
};

export default FavoritesList;
