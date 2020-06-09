import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Matt Allinder', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Matt Allinder/i);
  expect(linkElement).toBeInTheDocument();
});
