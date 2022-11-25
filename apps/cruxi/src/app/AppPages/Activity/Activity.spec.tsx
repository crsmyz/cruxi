import { render } from '@testing-library/react';

import Activity from './Activity';

describe('Activity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Activity />);
    expect(baseElement).toBeTruthy();
  });
});
