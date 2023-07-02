import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import StarshipNextAndPrev from '../StarshipNextAndPrev';
import { useQuery } from '@tanstack/react-query';
import { useCurrentPage, usePaginationActions } from '../../contexts/usePagination';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../../contexts/usePagination', () => ({
  useCurrentPage: jest.fn(),
  usePaginationActions: jest.fn(),
}));

const mockSetPreviousPage = jest.fn();
const mockSetNextPage = jest.fn();
const mockFetchStarships = jest.fn();

describe('StarshipNextAndPrev', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCurrentPage as jest.Mock).mockReturnValue(1);
    (usePaginationActions as jest.Mock).mockReturnValue({
      setPreviousPage: mockSetPreviousPage,
      setNextPage: mockSetNextPage,
    });
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        previous: true,
        next: true,
      },
      queryKey: ['starships', 1],
      queryFn: mockFetchStarships,
    });
  });

  it('renders the previous and next buttons', () => {
    render(<StarshipNextAndPrev />);

    expect(screen.getByText('Previous page')).toBeInTheDocument();
    expect(screen.getByText('Next page')).toBeInTheDocument();
  });

  it('calls setPreviousPage when clicking the previous button', () => {
    render(<StarshipNextAndPrev />);

    const previousButton = screen.getByText('Previous page');
    fireEvent.click(previousButton);

    expect(mockSetPreviousPage).toHaveBeenCalled();
  });

  it('calls setNextPage when clicking the next button', () => {
    render(<StarshipNextAndPrev />);

    const nextButton = screen.getByText('Next page');
    fireEvent.click(nextButton);

    expect(mockSetNextPage).toHaveBeenCalled();
  });

  it('disables the previous button when loading or no previous page', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: {
        previous: false,
        next: true,
      },
      queryKey: ['starships', 1],
      queryFn: mockFetchStarships,
    });

    render(<StarshipNextAndPrev />);

    const previousButton = screen.getByText('Previous page');
    expect(previousButton).toBeDisabled();
  });

  it('disables the next button when loading or no next page', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: {
        previous: true,
        next: false,
      },
      queryKey: ['starships', 1],
      queryFn: mockFetchStarships,
    });

    render(<StarshipNextAndPrev />);

    const nextButton = screen.getByText('Next page');
    expect(nextButton).toBeDisabled();
  });

  it('displays an error message when an error occurs', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: true,
      data: null,
      queryKey: ['starships', 1],
      queryFn: mockFetchStarships,
    });

    render(<StarshipNextAndPrev />);

    expect(screen.getByText('However, you have encountered an error. Try refreshing the page.')).toBeInTheDocument();
  });
});
