import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FavoritesList from '../FavoritesList';
import { useFavoriteActions, useComments, useFavoriteStarships } from '../../contexts/useFavorites';

jest.mock('../../contexts/useFavorites', () => ({
  useFavoriteStarships: jest.fn(),
  useComments: jest.fn(),
  useFavoriteActions: jest.fn(),
}));

const starships = [
  {
    name: 'Starship A',
    model: 'Starship 1 Model',
    manufacturer: 'Starship 1 Manufacturer',
    passengers: '6',
    hyperdrive_rating: '1.0',
  },
];

describe('StarshipItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useFavoriteActions as jest.Mock).mockReturnValue({
      toggleFavorite: jest.fn(),
      setComment: jest.fn(),
    });

    (useComments as jest.Mock).mockReturnValue([]);
  });

  it('displays message when no favorites are available', () => {
    (useFavoriteStarships as jest.Mock).mockReturnValue([]);

    render(<FavoritesList />);

    expect(screen.getByText('I find your lack of ships disturbing')).toBeInTheDocument();
    expect(screen.getByText('You have not favorited any starships yet 💔')).toBeInTheDocument();
  });

  it('displays favorite starships', () => {
    (useFavoriteStarships as jest.Mock).mockReturnValue(starships);

    render(<FavoritesList />);

    // Ensure all starships are rendered
    expect(screen.getAllByLabelText('starship')).toHaveLength(starships.length);
  });
});
