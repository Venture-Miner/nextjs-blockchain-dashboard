import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import Header from '@/layout/Header';

describe('Layout Header', () => {
  test('should render the Header component', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
});
