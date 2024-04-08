import { expect, test, describe } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import AppShell from '@/layout/AppShell';

describe('AppShell', () => {
  test('should render the app shell with children', () => {
    render(
      <AppShell>
        <h1>testing</h1>
      </AppShell>
    );
    const main = within(screen.getByText('testing'));
    expect(main).toBeDefined();
  });
});
