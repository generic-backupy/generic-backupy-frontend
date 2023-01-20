import { render, screen } from '@testing-library/react';
import App from '../App';
import LoginPage from '../LoginPage'
import useToken from '../hooks/useToken'

test('renders LoginPage when not logged in', () => {
  render(<App />);

  const loginPageHeaderElement = screen.getByText(/Login user form/i);
  expect(loginPageHeaderElement).toBeInTheDocument();

  const homePageHeaderElement = screen.queryByText(/Admin Dashboard/i);
  expect(homePageHeaderElement).toBeNull();
});
