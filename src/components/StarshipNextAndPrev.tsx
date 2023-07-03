import { fetchStarships } from '../api';
import { useQuery } from '@tanstack/react-query';
import { useCurrentPage, usePaginationActions } from '../contexts/usePagination';
import Button from '../styled-components/Button';
import Typography from '../styled-components/Typography';

const StarshipNextAndPrev = () => {
  const page = useCurrentPage();
  const { setPreviousPage, setNextPage } = usePaginationActions();
  const { isLoading, error, data } = useQuery({
    queryKey: ['starships', page],
    queryFn: () => fetchStarships({ page }),
  });

  const handlePrevPage = () => setPreviousPage();

  const handleNextPage = () => setNextPage();

  if (error) return null;

  return (
    <div className="p-10 flex justify-center">
      <Button variant="secondary" onClick={handlePrevPage} disabled={isLoading || !data?.previous}>
        Previous page
      </Button>
      <Button variant="secondary" className="ml-2" onClick={handleNextPage} disabled={isLoading || !data?.next}>
        Next page
      </Button>
    </div>
  );
};

export default StarshipNextAndPrev;
