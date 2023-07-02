import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DefaultLayout from '../styled-components/DefaultLayout';
import FavoritesList from '../components/FavoritesList';
import Typography from '../styled-components/Typography';

const queryClient = new QueryClient();

const FavoritesPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Typography variant="heading1" className="m-4">
          Favorites
        </Typography>
        <FavoritesList />
      </DefaultLayout>
    </QueryClientProvider>
  );
};

export default FavoritesPage;
