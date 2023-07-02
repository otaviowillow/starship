import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StarshipItem from '../StarshipItem';
import { useFavoriteActions, useComments } from '../../contexts/useFavorites';

jest.mock('../../contexts/useFavorites', () => ({
  ...jest.requireActual('../../contexts/useFavorites'),
  useFavoriteActions: jest.fn(),
  useComments: jest.fn(),
}));

const starship = {
  name: 'Starship A',
  model: 'Starship 1 Model',
  manufacturer: 'Starship 1 Manufacturer',
  passengers: '6',
  hyperdrive_rating: '1.0',
};

describe('StarshipItem', () => {
  it('displays comment if available', () => {
    (useFavoriteActions as jest.Mock).mockReturnValue({
      toggleFavorite: jest.fn(),
      setComment: jest.fn(),
    });
    (useComments as jest.Mock).mockReturnValue([{ name: 'Starship A', comment: 'This is a comment' }]);

    render(<StarshipItem starship={starship} showComments />);

    expect(screen.getByText('This is a comment')).toBeInTheDocument();
  });
});
