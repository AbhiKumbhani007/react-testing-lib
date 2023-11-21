import Form from '../components/Form';
import { render, screen } from '@testing-library/react';

test('Form renders successfully', () => {
  render(<Form />);
  const inputElement = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputElement).toBeInTheDocument();

  expect(button).toBeInTheDocument();
});
