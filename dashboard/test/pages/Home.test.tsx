import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import Home from '@/pages/Home';

describe('Home Page', () => {
  test('should render home page', () => {
    const { container } = render(<Home />);
    expect(container).toBeDefined();
  });
});
