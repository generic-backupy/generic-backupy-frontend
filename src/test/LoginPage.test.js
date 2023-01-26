import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';

describe('App', () => {
  test('should render without crashing', () => {
    const setToken = () => {};
    render(<LoginPage token={""} setToken={setToken} />);
  });

  test('renders LoginPage header text', () => {
    const setToken = () => {};
    render(<LoginPage token={""} setToken={setToken} />);
    const headerElement = screen.getByText(/Login user form/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should have a form with an email and password input', () => {
    const setToken = () => {};
    render(<LoginPage token={""} setToken={setToken} />);
    const usernameInput = screen.getByText(/username/i);
    const passwordInput = screen.getByText(/password/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

});