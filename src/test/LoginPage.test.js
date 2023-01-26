import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';


describe('App', () => {
  test('should render without crashing', () => {
    render(<LoginPage />);
  });

  test('renders LoginPage header text', () => {
    render(<LoginPage />);
    const headerElement = screen.getByText(/Login user form/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should have a form with an email and password input', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByText(/username/i);
    const passwordInput = screen.getByText(/password/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

});