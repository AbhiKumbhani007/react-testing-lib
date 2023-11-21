import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Adjust the import path as necessary

test('renders the logo image', () => {
  render(<App />);
  const logoImage = screen.getByAltText(/logo/i);
  expect(logoImage).toBeInTheDocument();
});

test('contains the correct paragraph text', () => {
  render(<App />);
  const paragraphText = screen.getByText(/Edit/i);
  expect(paragraphText).toBeInTheDocument();
});

test('has a link to learn React with correct attributes', () => {
  render(<App />);
  const reactLink = screen.getByText(/learn React/i);
  expect(reactLink).toBeInTheDocument();
  expect(reactLink).toHaveAttribute('href', 'https://reactjs.org');
  expect(reactLink).toHaveAttribute('target', '_blank');
  expect(reactLink).toHaveAttribute('rel', 'noopener noreferrer');
});
