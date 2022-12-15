import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders HomePage header text', () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/Admin Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
