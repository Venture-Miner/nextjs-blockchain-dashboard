import { expect, test, describe } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import BlockDetails from '@/pages/BlockDetails';

describe('BlockDetails', () => {
  test('should render the block number passed from the params', () => {
    render(<BlockDetails blockNumber='1234' />);
    const main = within(screen.getByText('1234'));
    expect(main).toBeDefined();
  });
});
