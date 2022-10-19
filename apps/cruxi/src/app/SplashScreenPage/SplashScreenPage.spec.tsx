import { render } from '@testing-library/react';

import SplashScreenPage from './SplashScreenPage';

describe('SplashScreenPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SplashScreenPage />);
    expect(baseElement).toBeTruthy();
  });
});
