import { render } from '@testing-library/react';

import ClimbingLog from './climbing-log';

describe('ClimbingLog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClimbingLog />);
    expect(baseElement).toBeTruthy();
  });
});
