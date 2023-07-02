import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Typography from '../Typography';

describe('Typography', () => {
  it('should render the correct heading1 element', () => {
    render(<Typography variant="heading1">Heading 1</Typography>);
    const heading1Element = screen.getByText('Heading 1');

    expect(heading1Element.tagName).toBe('H1');
  });

  it('should render the correct heading2 element', () => {
    render(<Typography variant="heading2">Heading 2</Typography>);
    const heading2Element = screen.getByText('Heading 2');

    expect(heading2Element.tagName).toBe('H2');
  });

  it('should render the correct heading3 element', () => {
    render(<Typography variant="heading3">Heading 3</Typography>);
    const heading3Element = screen.getByText('Heading 3');

    expect(heading3Element.tagName).toBe('H3');
  });

  it('should render the correct paragraph element', () => {
    render(<Typography variant="paragraph">Paragraph</Typography>);
    const paragraphElement = screen.getByText('Paragraph');

    expect(paragraphElement.tagName).toBe('P');
  });
});
