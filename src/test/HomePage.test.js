import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import renderer from 'react-test-renderer';




describe('HomePage', () => {
  test('Render homepage', () => {
    const component = renderer.create(<HomePage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Renders HomePage header text', () => {
    render(<HomePage />);
    const headerElement = screen.getByText(/Admin Dashboard/i);
    expect(headerElement).toBeInTheDocument();
  });

});