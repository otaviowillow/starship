import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import StarshipItem from '../StarshipItem';
import { useFavoriteActions, useComments, useFavoriteStarships } from '../../contexts/useFavorites';

jest.mock('../../contexts/useFavorites', () => ({
  useFavoriteActions: jest.fn(),
  useComments: jest.fn(),
  useFavoriteStarships: jest.fn(),
}));

const starship = {
  name: 'Starship A',
  manufacturer: 'Manufacturer A',
  hyperdrive_rating: '4.5',
  passengers: '10',
  model: 'Model A',
};

describe('StarshipItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useFavoriteActions as jest.Mock).mockReturnValue({
      toggleFavorite: jest.fn(),
      setComment: jest.fn(),
    });

    (useComments as jest.Mock).mockReturnValue([]);
  });

  it('calls toggleFavorite when favorite selector is clicked', () => {
    const toggleFavorite = jest.fn();
    (useFavoriteActions as jest.Mock).mockReturnValue({
      toggleFavorite,
      setComment: jest.fn(),
    });
    (useFavoriteStarships as jest.Mock).mockReturnValue([{ name: 'Starship A' }]);

    render(<StarshipItem starship={starship} />);

    const favoriteSelector = screen.getByAltText('is favorite');
    fireEvent.click(favoriteSelector);

    expect(toggleFavorite).toHaveBeenCalledTimes(1);
    expect(toggleFavorite).toHaveBeenCalledWith(starship);
  });

  it('displays comments when showComments is true', () => {
    (useComments as jest.Mock).mockReturnValue([{ name: 'Starship A', comment: 'This is a comment' }]);

    render(<StarshipItem starship={starship} showComments />);

    expect(screen.getByText('This is a comment')).toBeInTheDocument();
  });

  it('sets comment when input value changes', () => {
    const setComment = jest.fn();
    (useFavoriteActions as jest.Mock).mockReturnValue({
      toggleFavorite: jest.fn(),
      setComment,
    });
    (useComments as jest.Mock).mockReturnValue([{ name: 'Starship A', comment: 'Initial comment' }]);

    render(<StarshipItem starship={starship} showComments />);

    const inputElement = screen.getByPlaceholderText('Add text');
    fireEvent.change(inputElement, { target: { value: 'Updated comment' } });

    expect(setComment).toHaveBeenCalledTimes(1);
    expect(setComment).toHaveBeenCalledWith({
      name: 'Starship A',
      comment: 'Updated comment',
    });
  });
});
