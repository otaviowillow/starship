import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import StarshipList from '../components/StarshipList';
import StarshipNextAndPrev from '../components/StarshipNextAndPrev';
import DefaultLayout from '../styled-components/DefaultLayout';
import Typography from '../styled-components/Typography';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

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
