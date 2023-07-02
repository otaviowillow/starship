import { useQuery } from '@tanstack/react-query';
import { fetchStarships } from '../api';
import { useCurrentPage } from '../contexts/usePagination';
import StarshipItem from './StarshipItem';
import { Starship } from '../models/Starship';
import Loader from '../styled-components/Loader';
import Typography from '../styled-components/Typography';

const StarshipList = () => {
  const page = useCurrentPage();
  const { isLoading, error, data } = useQuery({
    queryKey: ['starships', page],
    queryFn: () => fetchStarships({ page }),
  });

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center h-96">
        <Loader />
        <Typography variant="heading3" aria-live="polite">
          Loading...
        </Typography>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-96">
        <Typography variant="heading2">The possibility of unsuccessfully navigating on this page is approximately 3,720 to 1.</Typography>
        <Typography variant="paragraph">However, you have encountered an error. Try refreshing the page.</Typography>
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-col justify-center items-center h-96">
        <Typography variant="heading2">This isnt the data you were looking for</Typography>
        <Typography variant="paragraph">Please try again later or explore other areas of the galaxy.</Typography>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {data.results.map((starship: Starship, i: number) => (
        <StarshipItem key={i} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipList;
