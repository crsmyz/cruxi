import { render } from '@testing-library/react';

import ClimbingSession from './climbing-session';

describe('ClimbingSession', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClimbingSession />);
    expect(baseElement).toBeTruthy();
  });
});
