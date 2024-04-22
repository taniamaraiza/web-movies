import React from 'react';

import { MoviesProvider } from './MoviesContext';

const AppProvider: React.FC = ({ children }) => (
  <MoviesProvider>{children}</MoviesProvider>
);

export default AppProvider;
