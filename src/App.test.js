import { render, screen } from '@testing-library/react';
import App, { sort } from './App';

it('renders the app UI correctly (snapshot)', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

describe('sort', () => {
  it('returns REJECTED for heavy and bulky', () => {
    expect(sort(200, 10, 10, 25)).toBe('REJECTED'); // bulky (width) and heavy
    expect(sort(100, 100, 100, 25)).toBe('REJECTED'); // bulky (volume) and heavy
  });

  it('returns SPECIAL for only heavy', () => {
    expect(sort(10, 10, 10, 25)).toBe('SPECIAL');
  });

  it('returns SPECIAL for only bulky (dimension)', () => {
    expect(sort(151, 10, 10, 10)).toBe('SPECIAL');
  });

  it('returns SPECIAL for only bulky (volume)', () => {
    expect(sort(100, 100, 100, 10)).toBe('SPECIAL');
  });

  it('returns STANDARD for neither heavy nor bulky', () => {
    expect(sort(10, 10, 10, 10)).toBe('STANDARD');
  });
});
