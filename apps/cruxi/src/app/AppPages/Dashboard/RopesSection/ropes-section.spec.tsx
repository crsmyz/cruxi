import { render } from '@testing-library/react';

import RopesSection from './ropes-section';

describe('RopesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RopesSection />);
    expect(baseElement).toBeTruthy();
  });
});
