import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Textarea from '../Textarea';

describe('Textarea', () => {
  it('should render a textarea element', () => {
    render(<Textarea />);
    const textareaElement = screen.getByPlaceholderText('Add text');

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass('min-w-full border-2 rounded-md p-2 bg-sithApprentice border-jediMaster text-jediMaster');
  });

  it('should pass down the value prop', () => {
    const value = 'Hello World';
    render(<Textarea value={value} onChange={() => jest.fn()} />);
    const textareaElement = screen.getByDisplayValue(value);

    expect(textareaElement).toBeInTheDocument();
  });
});
