import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteSelector from '../FavoriteSelector';

describe('FavoriteSelector', () => {
  it('should render empty heart when isFavorite is false', () => {
    const setIsFavorite = jest.fn();
    render(<FavoriteSelector isFavorite={false} setIsFavorite={setIsFavorite} />);

    const emptyHeartImage = screen.getByAltText('is not favorite');
    expect(emptyHeartImage).toBeInTheDocument();
  });

  it('should render full heart when isFavorite is true', () => {
    const setIsFavorite = jest.fn();
    render(<FavoriteSelector isFavorite={true} setIsFavorite={setIsFavorite} />);

    const emptyHeartImage = screen.getByAltText('is favorite');
    expect(emptyHeartImage).toBeInTheDocument();
  });

  it('should call setIsFavorite when the heart image is clicked', () => {
    const setIsFavorite = jest.fn();
    render(<FavoriteSelector isFavorite={false} setIsFavorite={setIsFavorite} />);

    const emptyHeartImage = screen.getByAltText('is not favorite');
    fireEvent.click(emptyHeartImage);

    expect(setIsFavorite).toHaveBeenCalledTimes(1);
    expect(setIsFavorite).toHaveBeenCalledWith(true);
  });
});
