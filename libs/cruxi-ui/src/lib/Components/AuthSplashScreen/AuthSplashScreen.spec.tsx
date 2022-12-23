import { render } from '@testing-library/react';

import { AuthSplashScreen } from './AuthSplashScreen';

describe('AuthSplashScreen', () => {
  it('should render successfully', () => {
    const appName = 'Test App';
    const backgroundImageURL = './../../../assets/images/flatirons.jpg';
    const cardHeader = 'Test Header';
    const cardClipPath = '18% 6%, 96% -2%, 86% 28%, 106% 82%, 85% 95%, -3% 108%, 4% 64%, -13% -2%';
    const bodyContent = <div>Test Element</div>;
    const { baseElement } = render(
      <AuthSplashScreen 
        backgroundImage={backgroundImageURL}
        clipPath={cardClipPath}
        appNameHeader={appName}
        cardHeader={cardHeader}
        bodyContent={bodyContent} />);
    expect(baseElement).toBeTruthy();
  });
});
