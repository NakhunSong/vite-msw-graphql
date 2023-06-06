import { render, screen, userEvent } from '@utils/test-utils';
import { expect, test } from 'vitest';
import App from './App';

test('renders the form', async () => {
  render(<App />);

  /** change input value and then submit it */
  const input = screen.getByLabelText(/username/i);
  await userEvent.type(input, 'Nakhun');
  expect(input).toHaveValue('Nakhun');
  userEvent.click(screen.getByText(/submit/i));

  /** check username visible */
  const username = await screen.findByTestId('username');
  expect(username).toHaveTextContent('Nakhun');
});
