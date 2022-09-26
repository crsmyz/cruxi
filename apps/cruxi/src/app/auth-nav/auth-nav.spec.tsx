import { render } from '@testing-library/react';

import AuthNav from './auth-nav';

describe('AuthNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthNav />);
    expect(baseElement).toBeTruthy();
  });
});
