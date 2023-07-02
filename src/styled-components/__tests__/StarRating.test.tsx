import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import StarRating from '../StarRating';

describe('StarRating', () => {
  it('should render the correct number of full stars', () => {
    const rating = '4.5';
    render(<StarRating rating={rating} />);
    const fullStars = screen.getAllByAltText('full star');

    expect(fullStars.length).toBe(4);
  });

  it('should render a half star when the rating has a decimal part', () => {
    const rating = '3.5';
    render(<StarRating rating={rating} />);
    const halfStar = screen.getAllByAltText('half star');

    expect(halfStar.length).toBe(1);
  });
});
