import { render } from '@testing-library/react';

import LogBook from './log-book';

describe('LogBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogBook />);
    expect(baseElement).toBeTruthy();
  });
});
