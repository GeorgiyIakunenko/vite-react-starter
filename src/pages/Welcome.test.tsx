import { describe, it } from 'vitest';

import { Welcome } from '@/pages/Welcome.tsx';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {
  it('renders welcome message', () => {
    render(<Welcome />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Welcome to vite-react-starter with vitest!');
  });
});
