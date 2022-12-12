import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/HomePage';

test('renders HomePage header text', () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/This is the Home Page. YEAHHHH!/i);
  expect(headerElement).toBeInTheDocument();
});
