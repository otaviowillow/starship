import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';

describe('DefaultLayout', () => {
  test('renders header with home logo and view favorites button', () => {
    render(
      <Router>
        <DefaultLayout>
          <div>Content</div>
        </DefaultLayout>
      </Router>,
    );

    const homeLogo = screen.getByAltText('Home Logo');
    const viewFavoritesButton = screen.getByText('View Favorites');

    expect(homeLogo).toBeInTheDocument();
    expect(viewFavoritesButton).toBeInTheDocument();
  });

  test('renders children content correctly', () => {
    render(
      <Router>
        <DefaultLayout>
          <div>Content</div>
        </DefaultLayout>
      </Router>,
    );

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });
});
