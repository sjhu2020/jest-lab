import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('renders learn react link', () => {
  render(<App />);
  //userEvent.click.(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).not.toBeChecked(); //npm run test
});

test('check that there is a enter button', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /enter/i
  });
  expect(button).toBeInTheDocument();
});
