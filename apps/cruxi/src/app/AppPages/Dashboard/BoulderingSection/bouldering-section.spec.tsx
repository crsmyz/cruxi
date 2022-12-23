import { render } from '@testing-library/react';

import BoulderingSection from './bouldering-section';

describe('BoulderingSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoulderingSection />);
    expect(baseElement).toBeTruthy();
  });
});
