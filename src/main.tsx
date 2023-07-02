import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StarshipsPage from './pages/StarshipsPage';
import FavoritesPage from './pages/FavoritesPage';

import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<StarshipsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
