import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  test('renders button with default variant correctly', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-2xl p-3 rounded-2xl bg-sithApprentice text-darkSaber');
  });

  test('renders button with secondary variant correctly', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-xs p-3 rounded-2xl bg-sithApprentice text-jediMaster');
  });

  test('handles click event correctly', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled styles and attributes correctly', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByText('Click me');

    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });
});
