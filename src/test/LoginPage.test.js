import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';

test('renders LoginPage header text', () => {
  render(<LoginPage />);
  const headerElement = screen.getByText(/Login user form/i);
  expect(headerElement).toBeInTheDocument();
});
