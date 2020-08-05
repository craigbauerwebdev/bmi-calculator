import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter your info to calculate your BMI/i);
  expect(linkElement).toBeInTheDocument();
});
