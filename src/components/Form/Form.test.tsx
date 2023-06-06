import { render, screen, userEvent } from '@utils/test-utils';
import { expect, test } from 'vitest';
import Form from './Form';

test('renders the form', async () => {
  render(<Form />);

  /** change input value and then submit it */
  const input = screen.getByLabelText(/username/i);
  await userEvent.type(input, 'Nakhun');
  expect(input).toHaveValue('Nakhun');
  userEvent.click(screen.getByText(/submit/i));

  /** check username visible */
  const username = await screen.findByTestId('username');
  expect(username).toHaveTextContent('Nakhun');
});
