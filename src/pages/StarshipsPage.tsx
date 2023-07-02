import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import StarshipList from '../components/StarshipList';
import StarshipNextAndPrev from '../components/StarshipNextAndPrev';
import DefaultLayout from '../styled-components/DefaultLayout';
import Typography from '../styled-components/Typography';

const queryClient = new QueryClient();

const StarshipsPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Typography variant="heading1" className="m-4">
          Starship List
        </Typography>
        <StarshipList />
        <StarshipNextAndPrev />
      </DefaultLayout>
    </QueryClientProvider>
  );
};

export default StarshipsPage;
