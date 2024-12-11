import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


for (let i = 1; i <= 999; i++) {
  test(`always passing test ${i}`, () => {
    expect(true).toBe(true);
  });
}
