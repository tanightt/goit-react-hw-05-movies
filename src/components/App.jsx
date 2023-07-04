import { lazy } from 'react';
import { Home } from 'pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Movies } from 'pages/Movies/Movies';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {' '}
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {' '}
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
