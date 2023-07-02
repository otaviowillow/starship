import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  test('renders loader with correct CSS classes', () => {
    render(<Loader />);
    const loader = screen.getByLabelText('loader');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('flex items-center justify-center');
    expect(loader.firstChild).toHaveClass('animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-jediMaster');
  });
});
